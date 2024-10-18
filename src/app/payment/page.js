'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams, useRouter } from 'next/navigation'
import { usePaymentAmount, usePaymentSponsorState, useDiscountAmount, useServiceProviderCode } from '../../../store';
import { useCallback } from "react";
import { Avatar, Name } from "@coinbase/onchainkit/identity";
import {
  Transaction,
  TransactionButton,
  TransactionSponsor,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from "@coinbase/onchainkit/transaction";

import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";


import {
  BASE_SEPOLIA_CHAIN_ID,
  BasedPayAddress,
  BasedPayAbi,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "@/constants/constants"

import useReadFromBasePayContract from '@/hooks/useReadFromBasePayContract';
export default function DiscountSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [showPayButton, setShowPayButton] = useState(false)
  const discountedPrice = searchParams.get('price') || '40'
  const { paymentAmount } = usePaymentAmount();
  const { paymentSponsorAddress, setPaymentSponsorAddress } = usePaymentSponsorState();
  const { discountAmount, setDiscountAmount } = useDiscountAmount();
  const { serviceProviderCode } = useServiceProviderCode();
  const { address } = useAccount()
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPayButton(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handlePayment = () => {
    router.push('/paymentsuccess')
  }

  const handleOnStatus = useCallback((status) => {
    console.log("LifecycleStatus", status);
  }, []);
  const {resData:sellerAddress} = useReadFromBasePayContract({ funcName: "codeToServiceProviderWallet", paraArr: [serviceProviderCode] });
  console.log("sellerAddress", sellerAddress,address,paymentSponsorAddress,(String(paymentAmount - (discountAmount * 0.8)))+"1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");

  const contracts = [
    {
      address: BasedPayAddress,
      abi: BasedPayAbi,
      functionName: "payToProvider",
      args: [
        sellerAddress, address, paymentSponsorAddress, paymentAmount - ((discountAmount * 0.8))
      ],
    },
  ]

  const handleError = (err) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response) => {
    console.log("Transaction successful", response);
    router.push('/paymentsuccess')
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl px-4">
        <motion.h1
          className="text-5xl font-bold text-green-400 text-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          UPDATED PRICE: ${paymentAmount - (discountAmount * 0.8)}
        </motion.h1>

        <motion.div
          className="bg-gray-800 rounded-2xl p-8 shadow-lg relative overflow-hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-green-400"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          />

          <motion.p
            className="text-2xl text-white text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Hey you got
            <motion.span
              className="text-green-400 font-bold mx-2"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, delay: 2 }}
            >
              ${discountAmount * 0.8}
            </motion.span>
            off,
          </motion.p>

          <motion.p
            className="text-2xl text-white text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2 }}
          >
            hurraay now lets pay the amount below
          </motion.p>

          {showPayButton && (
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
          )}
        </motion.div>
      </div>
    </div>
  )
}