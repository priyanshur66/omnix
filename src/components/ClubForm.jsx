"use client";
import React, { useState, useEffect } from "react";
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
  OmniXAbi,
  OmniXAddress,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "../constants/constants";

export default function ClubForm() {
  const [formData, setFormData] = useState({
    name: "",
    joiningFee: 0,
    memberMinCaloriesBurnt: 0,
    memberMinSleepHours: 0,
    memberMinSteps: 0,
    memberMinRunningDistance: 0,
    memberMinWalkingDistance: 0,
  });

  const router = useRouter();
  const { address } = useAccount();

  // contracts interaction

  const handleOnStatus = useCallback((status) => {
    console.log("LifecycleStatus", status);
  }, []);

  const contracts = [
    {
      address: OmniXAddress,
      abi: OmniXAbi,
      functionName: "createNewClub",
      args: [
        formData.name,
        address,
        formData.joiningFee,
        formData.memberMinCaloriesBurnt,
        formData.memberMinSleepHours,
        formData.memberMinSteps,
        formData.memberMinRunningDistance,
        formData.memberMinWalkingDistance,
      ],
    },
  ];

  const handleError = (err) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response) => {
    console.log("Transaction successful", response);
    router.push("/progress");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form className="bg-white shadow-md rounded px-8 pt-0 mt-10 pb-5 mb-4 border-2">
        <div className="text-center pb-8 mt-3">
          <span className="text-2xl font-bold pb-5">Create Your Club</span>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Club Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Club Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Joining Fee */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="joiningFee"
          >
            Joining Fee
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="joiningFee"
            type="text"
            placeholder="Joining Fee"
            name="joiningFee"
            value={formData.joiningFee}
            onChange={handleChange}
          />
        </div>

        {/* Member Minimum Calories Burnt */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="memberMinCaloriesBurnt"
          >
            Minimum Calories Burnt
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberMinCaloriesBurnt"
            type="text"
            placeholder="Min Calories"
            name="memberMinCaloriesBurnt"
            value={formData.memberMinCaloriesBurnt}
            onChange={handleChange}
          />
        </div>

        {/* Member Minimum Sleep Hours */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="memberMinSleepHours"
          >
            Minimum Sleep Hours
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberMinSleepHours"
            type="text"
            placeholder="Min Sleep Hours"
            name="memberMinSleepHours"
            value={formData.memberMinSleepHours}
            onChange={handleChange}
          />
        </div>

        {/* Member Minimum Steps */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="memberMinSteps"
          >
            Minimum Steps
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberMinSteps"
            type="text"
            placeholder="Min Steps"
            name="memberMinSteps"
            value={formData.memberMinSteps}
            onChange={handleChange}
          />
        </div>

        {/* Member Minimum Running Distance */}
        <div className="mb-4">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="memberMinRunningDistance"
          >
            Minimum Running Distance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberMinRunningDistance"
            type="text"
            placeholder="Min Running Distance"
            name="memberMinRunningDistance"
            value={formData.memberMinRunningDistance}
            onChange={handleChange}
          />
        </div>

        {/* Member Minimum Walking Distance */}
        <div className="mb-6">
          <label
            className="block text-black-500 text-sm font-bold mb-2"
            htmlFor="memberMinWalkingDistance"
          >
            Minimum Walking Distance
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="memberMinWalkingDistance"
            type="text"
            placeholder="Min Walking Distance"
            name="memberMinWalkingDistance"
            value={formData.memberMinWalkingDistance}
            onChange={handleChange}
          />
        </div>

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
      </form>
    </div>
  );
}
