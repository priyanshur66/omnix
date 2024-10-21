"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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

export default function ProfileHealthForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    sex: "",
    medicalCondition: false,
    height: 0,
    weight: 0,
    location: "",
  });
  const { address } = useAccount();

  const [image, setImage] = useState(null);

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
      functionName: "createNewUser",
      args: [
        formData.name,
        address,
        formData.sex,
        formData.weight,
        formData.age,
        formData.height,
        formData.medicalCondition,
        formData.location,
      ],
    },
  ];

  const handleError = (err) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response) => {
    console.log("Transaction successful", response);
    router.push("/health-goals");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Health profile submitted:", { ...formData, image });
  };

  return (
    <div className="">
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white opacity-30 backdrop-blur-md rounded-lg shadow-xl ml-16 mt-5 p-6 max-w-xl w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-indigo-600">
          Your Health Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="md:col-span-2 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-32 h-32 bg-indigo-200 rounded-full mb-4 overflow-hidden">
              {image && (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            <input
              type="file"
              id="profilePic"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            <button
              type="button"
              onClick={() => document.getElementById("profilePic").click()}
              className="bg-indigo-500 text-white py-2 px-4 rounded transition duration-300"
            >
              Upload Picture
            </button>
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              aria-label="Name"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="age"
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              placeholder="Enter your age"
              aria-label="Age"
            />
          </motion.div>

          <motion.div
            className="flex flex-col -mt-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="sex"
            >
              Sex
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="sex"
              type="text"
              name="sex"
              value={formData.sex}
              onChange={handleChange}
              required
              placeholder="Enter your sex"
              aria-label="Sex"
            />
          </motion.div>

          <motion.div
            className="flex flex-col -mt-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="medicalCondition"
            >
              Medical Condition
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="medicalCondition"
              type="text"
              name="medicalCondition"
              value={formData.medicalCondition}
              onChange={handleChange}
              required
              placeholder="Enter your medical condition"
              aria-label="Medical Condition"
            />
          </motion.div>

          <motion.div
            className="flex flex-col -mt-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="height"
            >
              Height (cms)
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="height"
              type="number"
              name="height"
              value={formData.height}
              onChange={handleChange}
              required
              placeholder="Enter your height"
              aria-label="Height"
            />
          </motion.div>

          <motion.div
            className="flex flex-col -mt-3"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="weight"
            >
              Weight (KGs)
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="weight"
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              required
              placeholder="Enter your weight"
              aria-label="Weight"
            />
          </motion.div>

          <motion.div
            className="flex flex-col md:col-span-2 -mt-3"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              id="location"
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Enter your location"
              aria-label="Location"
            />
          </motion.div>
        </div>

        <Transaction
          contracts={contracts}
          className="w-[450px]"
          chainId={BASE_SEPOLIA_CHAIN_ID}
          onError={handleError}
          onSuccess={handleSuccess}
        >
          <TransactionButton text="Setup profile" className=" mr-auto mt-10 ml-auto w-[450px] max-w-full text-[white]" />
          <TransactionStatus>
            <TransactionStatusLabel />
            <TransactionStatusAction />
          </TransactionStatus>
        </Transaction>
      </motion.form>
    </div>
  );
}