import React, { useState } from "react";

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
} from "@/constants/constants";
import type { Address, ContractFunctionParameters } from "viem";

const NameInputPopup = () => {
  const { address } = useAccount();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted name:", name);
    setIsOpen(false);
  };

  // contracts interaction

  const handleOnStatus = useCallback((status: LifecycleStatus) => {
    console.log("LifecycleStatus", status);
  }, []);

  const contracts = [
    {
      address: BasedPayAddress,
      abi: BasedPayAbi,
      functionName: "createCustomer",
      args: ["akash", address],
    },
  ] as unknown as ContractFunctionParameters[];

  const handleError = (err: TransactionError) => {
    console.error("Transaction error:", err);
  };

  const handleSuccess = (response: TransactionResponse) => {
    console.log("Transaction successful", response);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Open Name Input
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Enter Your Name</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
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
};

export default NameInputPopup;
