"use client";

import { useAccount, useReadContract } from "wagmi";
import { SampleUsdtAddress, SampleUsdtAbi } from "@/constants/constants";

export default  function useReadFromUsdtContract({
  funcName,
  paraArr,
}) {
  console.log(funcName)
  console.log(paraArr)
  const {
    data: resData,
    isError: resError,
    isLoading: resLoading,
  } =  useReadContract({
    abi: SampleUsdtAbi,
    address: SampleUsdtAddress,
    functionName: funcName,
    args: paraArr,
  });
  console.log("data res",resData)
  return { resData, resError, resLoading };
}
