"use client";
import { useState, useEffect } from "react";
import { useAccount, useReadContract } from "wagmi";
import { BasedPayAbi, BasedPayAddress } from "@/constants/constants";
import { useWeb3Project, useServiceProvider, useCustomer } from "../../store"; // Adjust the import path as needed

export default function useUpdateCurrentUserData(userAddress) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [userType, setUserType] = useState(null);
  const { address } = useAccount();

  const setWeb3Project = useWeb3Project((state) => state.setWeb3Project);
  const setServiceProvider = useServiceProvider(
    (state) => state.setServiceProvider
  );
  const setCustomer = useCustomer((state) => state.setCustomer);

  const {
    data: userTypeData,
    isError: userTypeError,
    isLoading: userTypeLoading,
  } = useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: "returnUserType",
    args: [userAddress || address],
  });

  const {
    data: web3ProjectData,
    isError: web3ProjectError,
    isLoading: web3ProjectLoading,
  } = useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: "addressToWeb3Project",
    args: [userAddress || address],
    enabled: userType === "web3Project",
  });

  const {
    data: serviceProviderData,
    isError: serviceProviderError,
    isLoading: serviceProviderLoading,
  } = useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: "addressToServiceProvider",
    args: [userAddress || address],
    enabled: userType === "serviceProvider",
  });

  const {
    data: customerData,
    isError: customerError,
    isLoading: customerLoading,
  } = useReadContract({
    abi: BasedPayAbi,
    address: BasedPayAddress,
    functionName: "addressToCustomer",
    args: [userAddress || address],
    enabled: userType === "customer",
  });

  useEffect(() => {
    if (userTypeData) {
      setUserType(userTypeData);
    }
  }, [userTypeData]);

  useEffect(() => {
    if (userType === "web3Project" && web3ProjectData) {
      setWeb3Project({
        projectName: web3ProjectData[0],
        projectWalletAddress: web3ProjectData[1],
        promotionalVideo: web3ProjectData[2],
        projectLink: web3ProjectData[3],
        totalBudget: Number(web3ProjectData[4]),
        rewardPerUser: Number(web3ProjectData[5]),
        promoDuration: Number(web3ProjectData[6]),
        makeUsersEligibleForAirdrops: web3ProjectData[7],
        promoType: web3ProjectData[8],
        remainingBalance: Number(web3ProjectData[9]),
      });
      setIsSuccess(true);
    } else if (userType === "serviceProvider" && serviceProviderData) {
      setServiceProvider({
        serviceProviderName: serviceProviderData[0],
        serviceType: serviceProviderData[1],
        providerWalletAddress: serviceProviderData[2],
        locationOfService: serviceProviderData[3],
        providerCode: serviceProviderData[4],
        commissionEarned: Number(serviceProviderData[5]),
      });
      setIsSuccess(true);
    } else if (userType === "customer" && customerData) {
      setCustomer({
        name: customerData[0],
        customerWalletAddress: customerData[1],
      });
      setIsSuccess(true);
    }
  }, [
    userType,
    web3ProjectData,
    serviceProviderData,
    customerData,
    setWeb3Project,
    setServiceProvider,
    setCustomer,
  ]);

  return {
    isSuccess,
    userType,
    isLoading:
      userTypeLoading ||
      web3ProjectLoading ||
      serviceProviderLoading ||
      customerLoading,
    isError:
      userTypeError ||
      web3ProjectError ||
      serviceProviderError ||
      customerError,
  };
}
