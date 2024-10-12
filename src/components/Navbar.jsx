"use client"
import Link from "next/link";
import { useReadContract } from "wagmi";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename, 
  WalletDropdownFundLink, 
  WalletDropdownLink, 
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet';
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance, 
} from '@coinbase/onchainkit/identity';
import { color } from '@coinbase/onchainkit/theme';
import { BasedPayAbi,BasedPayAddress } from "@/constants/constants";
import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";



export default function Navbar() {

  const router = useRouter()

  const { data: userType, isError, isLoading } = useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: 'returnUserType',
    args: ['0x063145aa5f16FAD2C8179c1E0Ff1a1a39D95AF9d'],
  });

  useEffect(() => {
    if (userType !== undefined) {
      if(userType==="new"){
        router.push("/roles")
      }
      console.log("User type is:", userType);
    }
  }, [userType]);

  





  return (
    <nav className="flex justify-between items-center bg-gray-800 rounded-b-3xl px-4 sm:px-10 lg:mx-20 pt-4 pb-4 sm:pt-6 sm:pb-6">
      <Link href="\landing">
      <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-white">BasedPay</div>
      </Link>
      
      <div className="flex items-center">
      <Wallet>
  <ConnectWallet>
    <Avatar className="h-6 w-6" />
    <Name />
  </ConnectWallet>
  <WalletDropdown>
    <Identity 
      className="px-4 pt-3 pb-2" 
      hasCopyAddressOnClick
    >
      <Avatar />
      <Name />
      <Address />
      <EthBalance />
    </Identity>
    <WalletDropdownBasename />
    <WalletDropdownLink
      icon="wallet"
      href="https://keys.coinbase.com"
    >
      Wallet
    </WalletDropdownLink>
    <WalletDropdownFundLink />
    <WalletDropdownDisconnect />
  </WalletDropdown>
</Wallet>
      </div>
    </nav>
  );
}