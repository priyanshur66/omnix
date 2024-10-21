"use client";
import { useState, useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import { OmniXAbi, OmniXAddress } from "@/constants/constants";
import { useUserStore } from "../../store";

export default function useUpdateCurrentUserData(userAddress) {
  const [isSuccess, setIsSuccess] = useState(false);
  const { address } = useAccount();

  const setUserData = useUserStore((state) => state.setUser);

  const {
    data: userData,
    isError: userDataError,
    isLoading: userDataLoading,
  } = useReadContract({
    abi: OmniXAbi,
    address: OmniXAddress,
    functionName: "addressToUser",
    args: [userAddress || address],
  });

  console.log(userData);

  useEffect(() => {
    if (userData) {
      setUserData({
        userName: userData[0], // Assuming userName is at index 0
        userWalletAddress: userData[1], // userWalletAddress is at index 1
        userSex: userData[2], // userSex is at index 2
        userWeight: Number(userData[3]), // userWeight is at index 3
        userAge: Number(userData[4]), // userAge is at index 4
        userHeight: Number(userData[5]), // userHeight is at index 5
        medicalCondition: userData[6], // medicalCondition is at index 6 (assumed boolean)
        userLocation: userData[7], // userLocation is at index 7
        joinedClubs: userData[8], // joinedClubs is at index 8 (assumed to be an array)
      });
      setIsSuccess(true); // Set success state after updating user data
    }
  }, [userData, setUserData]);

  // useEffect(() => {
  //   if (userTypeData) {
  //     setUserType(userTypeData);
  //   }
  // }, [userTypeData]);

  // useEffect(() => {
  //   if (userType === "web3Project" && web3ProjectData) {
  //     setWeb3Project({
  //       projectName: web3ProjectData[0],
  //       projectWalletAddress: web3ProjectData[1],
  //       promotionalVideo: web3ProjectData[2],
  //       projectLink: web3ProjectData[3],
  //       totalBudget: Number(web3ProjectData[4]),
  //       rewardPerUser: Number(web3ProjectData[5]),
  //       promoDuration: Number(web3ProjectData[6]),
  //       makeUsersEligibleForAirdrops: web3ProjectData[7],
  //       promoType: web3ProjectData[8],
  //       remainingBalance: Number(web3ProjectData[9]),
  //     });
  //     setIsSuccess(true);
  //   } else if (userType === "serviceProvider" && serviceProviderData) {
  //     setServiceProvider({
  //       serviceProviderName: serviceProviderData[0],
  //       serviceType: serviceProviderData[1],
  //       providerWalletAddress: serviceProviderData[2],
  //       locationOfService: serviceProviderData[3],
  //       providerCode: serviceProviderData[4],
  //       commissionEarned: Number(serviceProviderData[5]),
  //     });
  //     setIsSuccess(true);
  //   } else if (userType === "customer" && customerData) {
  //     setCustomer({
  //       name: customerData[0],
  //       customerWalletAddress: customerData[1],
  //     });
  //     setIsSuccess(true);
  //   }
  // }, [
  //   userType,
  //   web3ProjectData,
  //   serviceProviderData,
  //   customerData,
  //   setWeb3Project,
  //   setServiceProvider,
  //   setCustomer,
  // ]);

  return {
    userData,
    isSuccess,
    userDataError,

    userDataLoading,
  };
}
