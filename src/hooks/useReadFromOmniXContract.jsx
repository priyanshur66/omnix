"use client";

import { useAccount, useReadContract } from "wagmi";
import { OmniXAbi, OmniXAddress } from "@/constants/constants";

export default function useReadFromOmniXContract({ funcName, paraArr }) {
  console.log(funcName);
  console.log(paraArr);
  const {
    data: resData,
    isError: resError,
    isLoading: resLoading,
  } = useReadContract({
    abi: OmniXAbi,
    address: OmniXAddress,
    functionName: funcName,
    args: paraArr,
  });
  console.log("data res", resData);
  return { resData, resError, resLoading };
}
