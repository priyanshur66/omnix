"use client";
import LogoImage from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

import Link from "next/link";

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

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import useUpdateCurrentUserData from "@/hooks/useUpdateCurrentUserData";
import { base } from "viem/chains";
import { useUserStore } from "../../store";

export const Navbar = () => {
  const router = useRouter();
  const { address } = useAccount();
  const route = usePathname();
  const { userWalletAddress } = useUserStore();
  const { userData } = useUpdateCurrentUserData(address);
  console.log("userData is ", userData);
  useEffect(() => {
    console.log("walleet address is ", userWalletAddress);
  }, [userData]);
  useEffect(() => {
    if (userData && route === "/") {
      if (userData && userData[0].length > 0) {
        router.push("/progress");
      } else {
        router.push("/profile-setup");
      }
    }
  }, [userWalletAddress]);
  return (
    <>
      <div className="bg-slate-800 text-white">
        <div className="px-4">
          <div className="container ">
            <div className="py-4 flex items-center justify-between">
              <Link href="\">
                <div className="">
                  <div className="absolute w-full bottom-0  "></div>

                  <img
                    src="https://res.cloudinary.com/dxn4bwg6u/image/upload/v1728612664/smart-watch-icon-vector-fitness-gym-concept-thin-line-illustration-editable-stroke-linear-sign-use-web-mobile-193468610_vamgri.jpg"
                    height={50}
                    width={50}
                    className="rounded-full ml-10"
                  />
                </div>
              </Link>
              <nav>
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
                    <WalletDropdownLink
                      icon="wallet"
                      href="https://keys.coinbase.com"
                    >
                      Wallet
                    </WalletDropdownLink>
                    <WalletDropdownFundLink />
                    <WalletDropdownDisconnect />
                  </WalletDropdown>
                </Wallet>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
