import { useCallback } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { 
  Transaction, 
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction'; 
import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi';
import type {
  TransactionError,
  TransactionResponse,
} from '@coinbase/onchainkit/transaction';

import { BASE_SEPOLIA_CHAIN_ID,
  BasedPayAddress,
  SampleUsdtAbi,
  SampleUsdtAddress,}from "../constants/constants"
  import type { Address, ContractFunctionParameters } from 'viem';
 
export default function TransactionComponents() {
  const { address } = useAccount();
  
  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log('LifecycleStatus', status);
  }, []);




  const contracts = [
    {
      address: SampleUsdtAddress,
      abi: SampleUsdtAbi,
      functionName: 'approve',
      args: [BasedPayAddress,100000],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error('Transaction error:', err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log('Transaction successful', response);
  };

 
  return  (
    <div className="flex w-[450px]">
    <Transaction
      contracts={contracts}
      className="w-[450px]"
      chainId={BASE_SEPOLIA_CHAIN_ID}
      onError={handleError}
      onSuccess={handleSuccess}
    >
      <TransactionButton className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]" />
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  </div>)
};