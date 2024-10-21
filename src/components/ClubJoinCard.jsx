"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Confetti from "react-confetti";

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
  OmniXAddress,
  OmniXAbi,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "../constants/constants";
const ClubCard = ({ amount, clubName, running, steps, calories, ClubId }) => {
  const router = useRouter();
  const { address } = useAccount();

  // contracts interaction

  const handleOnStatus = useCallback((status) => {
    console.log("LifecycleStatus", status);
  }, []);

  const contracts = [
    {
      address: SampleUsdtAddress,
      abi: SampleUsdtAbi,
      functionName: "approve",
      args: [OmniXAddress, 10000000000000000000000000],
    },
    {
      address: OmniXAddress,
      abi: OmniXAbi,
      functionName: "joinClub",
      args: [ClubId],
    },
  ];

  const handleError = (err) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response) => {
    console.log("Transaction successful", response);
  };

  return (
    <div className="my-12 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto -mt-10 p-4">
      <div className="bg-white border-2 border-blue-300 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-bold text-blue-600">
            {amount}
          </span>
        </div>
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            {clubName}
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">Run</p>
          <p className="text-xs sm:text-sm font-medium text-gray-700">
            {running} kms
          </p>
          <p className="text-xs sm:text-sm text-gray-600">Run</p>
          <p className="text-xs sm:text-sm font-medium text-gray-700">
            {steps} steps
          </p>
          <p className="text-xs sm:text-sm text-gray-600">Run</p>
          <p className="text-xs sm:text-sm font-medium text-gray-700">
            {calories} kcal
          </p>
        </div>
        <Transaction
          contracts={contracts}
          className="w-[450px]"
          chainId={BASE_SEPOLIA_CHAIN_ID}
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <TransactionButton
            text="Join Club"
            className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]"
          />
          <TransactionStatus>
            <TransactionStatusLabel />
            <TransactionStatusAction />
          </TransactionStatus>
        </Transaction>
      </div>
    </div>
  );
};

export default function App({ club }) {
 // console.log("In cards", club);
  const handleJoin = () => {
    alert("Joined the club!");
  };
  // clubId
  // :
  // 1n
  // clubName
  // :
  // "sd"
  // clubWalletAddress
  // :
  // "0x3C5b3bad66517CB920A673945433F1021E2bd8da"
  // joiningFee
  // :
  // 100n
  // memberMinCaloriesBurnt
  // :
  // 1000n
  // memberMinRunningDistance
  // :
  // 1000n
  // memberMinSleepHours
  // :
  // 10n
  // memberMinSteps
  // :
  // 1000n
  // memberMinWalkingDistance
  // :
  // 1000n
  return (
    <ClubCard
      amount={Number(String(club.joiningFee))}
      clubName={String(club.clubName)}
      running={Number(String(club.memberMinRunningDistance))}
      steps={Number(String(club.memberMinSteps))}
      calories={Number(String(club.memberMinCaloriesBurnt))}
      ClubId={club.clubId}
    />
  );
}
