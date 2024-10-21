import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useHealthGoalsStore } from "../../store";

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
  OmniXAbi,
  OmniXAddress,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "../constants/constants";

const ProgressBar = ({ label, value, max, color }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-700">
        {max}/{value}
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
      <motion.div
        className="h-2.5 rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: `${(max / value) * 100}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const ProgressTab = ({ steps, runs, sleep, calories, walk }) => {
  const router = useRouter();
  const [progress, setProgress] = useState({
    steps: steps,
    runs: runs,
    sleep: sleep,
    calories: calories,
    walk: walk,
  });

  // Use the store
  const {
    minSteps,
    minRunningDistance,
    minSleepHours,
    minCaloriesBurnt,
    minWalkingDistance,
  } = useHealthGoalsStore();

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
      functionName: "checkHealthGoalsAndReward",
      args: [
        address,
        minCaloriesBurnt,
        minSleepHours,
        minSteps,
        minRunningDistance,
        minWalkingDistance,
      ],
    },
  ];

  const handleError = (err) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response) => {
    console.log("Transaction successful", response);
    
  };

  const handleClubRouter = () => {
    router.push("/club-creation");
  };

  const handleWatchSimulation = () => {
    router.push("/watchSimulation");
  };

  useEffect(() => {
    // You can keep this effect if you want to update progress based on props
    setProgress({
      steps: steps,
      runs: runs,
      sleep: sleep,
      calories: calories,
      walk: walk,
    });
  }, [steps, runs, sleep, calories, walk]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col items-center -mt-16 justify-center min-h-screen p-4">
      <motion.div
        className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-indigo-600"
          variants={itemVariants}
        >
          My Progress
        </motion.h2>
        <div className="space-y-4">
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="steps"
              value={progress.steps}
              max={minSteps}
              color="#4CAF50"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="runs"
              value={progress.runs}
              max={minRunningDistance}
              color="#2196F3"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="sleep"
              value={progress.sleep}
              max={minSleepHours}
              color="#9C27B0"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="calories"
              value={progress.calories}
              max={minCaloriesBurnt}
              color="#FF9800"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ProgressBar
              label="walk"
              value={progress.walk}
              max={minWalkingDistance}
              color="#E91E63"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="flex flex-col sm:flex-row justify-center w-full gap-4">
        <Transaction
          contracts={contracts}
          className="w-[450px]"
          chainId={BASE_SEPOLIA_CHAIN_ID}
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <TransactionButton
            text="Claim reward"
            className="mt-0 mr-auto ml-auto w-[450px] max-w-full text-[white]"
          />
          <TransactionStatus>
            <TransactionStatusLabel />
            <TransactionStatusAction />
          </TransactionStatus>
        </Transaction>
        <button
          className="bg-black hover:bg-white hover:text-black text-white py-2 px-6 rounded-full font-bold w-full sm:w-auto"
          onClick={handleWatchSimulation}
        >
          Simulate Workout
        </button>
      </div>
    </div>
  );
};

export default ProgressTab;
