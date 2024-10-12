"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Router } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

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
import type { LifecycleStatus } from "@coinbase/onchainkit/transaction";
import { Wallet, ConnectWallet } from "@coinbase/onchainkit/wallet";
import { useAccount } from "wagmi";
import type {
  TransactionError,
  TransactionResponse,
} from "@coinbase/onchainkit/transaction";

import {
  BASE_SEPOLIA_CHAIN_ID,
  BasedPayAbi,
  BasedPayAddress,
  SampleUsdtAbi,
  SampleUsdtAddress,
} from "../../constants/constants";
import type { Address, ContractFunctionParameters } from "viem";

export default function Advertisement() {
  const router = useRouter();
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    projectName: "",
    projectWalletAddress: address,
    video: "",
    link: "",
    totalBudget: "",
    rewardPerUser: "",
    duration: "",
    eligibleForAirdrops: false,
    promotionType: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  const handleSetup = () => {
    router.push("/advertisement-setup-success");
  };

  // contracts interaction

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  const contracts = [
    {
      address: BasedPayAddress,
      abi: BasedPayAbi,
      functionName: "createWeb3Project",
      args: [
        formData.projectName,
        formData.projectWalletAddress,
        formData.video,
        formData.link,
        formData.totalBudget,
        formData.rewardPerUser,
        formData.duration,
        formData.eligibleForAirdrops,
        formData.promotionType,
      ],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log("Transaction successful", response);
  };

  return (
    <div className="bg-gray-900">
      <Navbar />
      <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg -mt-20"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Lock In Tokens</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="video"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Upload Video
                </label>
                <input
                  type="file"
                  id="video"
                  name="video"
                  accept="video/*"
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="rewardPerUser"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Reward per User
                </label>
                <input
                  type="number"
                  id="rewardPerUser"
                  name="rewardPerUser"
                  value={formData.rewardPerUser}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter reward amount"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="totalBudget"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Total Budget
                </label>
                <input
                  type="number"
                  id="totalBudget"
                  name="totalBudget"
                  value={formData.totalBudget}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter total budget"
                />
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter title"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="link"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  LINK
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter link"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-gray-300 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter duration"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="eligibleForAirdrops"
                  checked={formData.eligibleForAirdrops}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-500"
                />
                <span className="ml-2 text-gray-300">
                  Make eligible for airdrops
                </span>
              </label>
            </div>

            {/* <button
            type="submit"
            onClick={handleSetup}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
          >
            Lock in Tokens
          </button> */}
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
          </div>
        </form>
      </div>
    </div>
  );
}
