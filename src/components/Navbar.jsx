"use client";
import Link from "next/link";
import { useReadContract } from "wagmi";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownBasename,
  WalletDropdownFundLink,
  WalletDropdownLink,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import {
  Address,
  Avatar,
  Name,
  Identity,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import { color } from "@coinbase/onchainkit/theme";
import { BasedPayAbi, BasedPayAddress } from "@/constants/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import useUpdateCurrentUserData from "@/hooks/useUpdateCurrentUserData";
import { base } from "viem/chains";

export default function Navbar() {
  const router = useRouter();
  const { address } = useAccount();
  const route = usePathname();

  // const { data: userType, isError, isLoading } = useReadContract({
  //   abi: BasedPayAbi,
  //   address: BasedPayAddress,
  //   functionName: 'returnUserType',
  //   args: [address],
  // });

  const { isSuccess, userType, isLoading } = useUpdateCurrentUserData(address);

  useEffect(() => {
    if (userType !== undefined) {
      if (userType === "new" && route === "/") {
        console.log("checking for user adresss", address);
        // console.log("checking for path ",route)

        router.push("/roles");
      } else if (userType === "serviceProvider" && route === "/") {
        router.push("/commissions-dashboard");
      } else if (userType === "customer" && route === "/") {
       router.push("/usenetwork");
      }else if (userType === "web3Project" && route === "/") {
        router.push("/dashboard");
       }
       console.log("User type is:", userType);
    }
  }, [userType]);

  return (
    <nav className="flex justify-between items-center bg-gray-800  px-4 sm:px-10 pt-4 pb-4 sm:pt-6 sm:pb-6">
      <Link href="\">
        <div className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-white">
          BasedPay
        </div>
      </Link>

      <div className="flex items-center">
        <Wallet>
          <ConnectWallet>
            <Avatar className="h-6 w-6" />
            <Name address={address} chain={base} /> 
          </ConnectWallet>
          <WalletDropdown>
            <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
              <Avatar />
              <Name address={address} chain={base} /> 
              <Address />
              <EthBalance />
            </Identity>
            <WalletDropdownBasename />
            <WalletDropdownLink icon="wallet" href="https://keys.coinbase.com">
              Wallet
            </WalletDropdownLink>
            <WalletDropdownFundLink />
            <WalletDropdownDisconnect />
          </WalletDropdown>
        </Wallet>
      </div>
    </nav>
  );
}
