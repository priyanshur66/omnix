export const BASE_SEPOLIA_CHAIN_ID = 84532;
export const BasedPayAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdtAdd",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToCustomer",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "customerWalletAddress",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToServiceProvider",
		"outputs": [
			{
				"internalType": "string",
				"name": "serviceProviderName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceType",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "providerWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "locationOfService",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "providerCode",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "commissionEarned",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToWeb3Project",
		"outputs": [
			{
				"internalType": "string",
				"name": "projectName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "projectWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "promotionalVideo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "projectLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalBudget",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardPerUser",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "promoDuration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "makeUsersEligibleForAirdrops",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "promoType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "remainingBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allServiceProviders",
		"outputs": [
			{
				"internalType": "string",
				"name": "serviceProviderName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "serviceType",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "providerWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "locationOfService",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "providerCode",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "commissionEarned",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allWeb3Project",
		"outputs": [
			{
				"internalType": "string",
				"name": "projectName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "projectWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "promotionalVideo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "projectLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalBudget",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rewardPerUser",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "promoDuration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "makeUsersEligibleForAirdrops",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "promoType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "remainingBalance",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "codeToServiceProviderWallet",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_customerWalletAddress",
				"type": "address"
			}
		],
		"name": "createCustomer",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "customerWalletAddress",
						"type": "address"
					}
				],
				"internalType": "struct BasedPay.Customer",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_serviceProviderName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_serviceType",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_providerWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_locationOfService",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_providerCode",
				"type": "string"
			}
		],
		"name": "createServiceProvider",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "serviceProviderName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "providerWalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "locationOfService",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "providerCode",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "commissionEarned",
						"type": "uint256"
					}
				],
				"internalType": "struct BasedPay.ServiceProvider",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_projectName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_projectWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_promotionalVideo",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_projectLink",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalBudget",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_rewardPerUser",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_promoDuration",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_makeUsersEligibleForAirdrops",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_promoType",
				"type": "string"
			}
		],
		"name": "createWeb3Project",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "projectName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "projectWalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "promotionalVideo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "projectLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalBudget",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPerUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "promoDuration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "makeUsersEligibleForAirdrops",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "promoType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remainingBalance",
						"type": "uint256"
					}
				],
				"internalType": "struct BasedPay.Web3Project",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllServiceProviders",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "serviceProviderName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "serviceType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "providerWalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "locationOfService",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "providerCode",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "commissionEarned",
						"type": "uint256"
					}
				],
				"internalType": "struct BasedPay.ServiceProvider[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWeb3Project",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "projectName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "projectWalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "promotionalVideo",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "projectLink",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalBudget",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "rewardPerUser",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "promoDuration",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "makeUsersEligibleForAirdrops",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "promoType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "remainingBalance",
						"type": "uint256"
					}
				],
				"internalType": "struct BasedPay.Web3Project[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_serviceProviderAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_customerWalletAddress",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_web3ProjectAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountPaidByCustomer",
				"type": "uint256"
			}
		],
		"name": "payToProvider",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "returnUserType",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdt",
		"outputs": [
			{
				"internalType": "contract IModifiedERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "web3ProjectAddToRewardPerUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const BasedPayAddress = "0xd2741773B1B075f0cC6e32465989BEefd4fcAd30";
export const SampleUsdtAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "mintForDemo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
export const SampleUsdtAddress = "0x0b453C2A2e4d8ccE11fdD397a7beA33FC5D24dc1";
