export const BASE_SEPOLIA_CHAIN_ID = 84532;
export const OmniXAbi = [
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
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "joiningFee",
				"type": "uint256"
			}
		],
		"name": "ClubJoined",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "addressToUser",
		"outputs": [
			{
				"internalType": "string",
				"name": "userName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "userWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "userSex",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "userWeight",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "userAge",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "userHeight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "medicalCondition",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "userLocation",
				"type": "string"
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
		"name": "allClubIds",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "_userAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_caloriesBurnt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_sleepHours",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_steps",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_runningDistance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_walkingDistance",
				"type": "uint256"
			}
		],
		"name": "checkHealthGoalsAndReward",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "clubIdTracker",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
		"name": "clubWalletToId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "_clubName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_clubWalletAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_joiningFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memberMinCaloriesBurnt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memberMinSleepHours",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memberMinSteps",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memberMinRunningDistance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_memberMinWalkingDistance",
				"type": "uint256"
			}
		],
		"name": "createNewClub",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "clubName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "clubWalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "joiningFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinCaloriesBurnt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSleepHours",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSteps",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinRunningDistance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinWalkingDistance",
						"type": "uint256"
					}
				],
				"internalType": "struct OmniX.Club",
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
				"name": "_userName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_userWalletAddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_userSex",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_userWeight",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_userAge",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_userHeight",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_medicalCondition",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "_userLocation",
				"type": "string"
			}
		],
		"name": "createNewUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "userWalletAddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "userSex",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "userWeight",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userAge",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "userHeight",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "medicalCondition",
						"type": "bool"
					},
					{
						"internalType": "string",
						"name": "userLocation",
						"type": "string"
					},
					{
						"internalType": "uint256[]",
						"name": "joinedClubs",
						"type": "uint256[]"
					}
				],
				"internalType": "struct OmniX.User",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllClubs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "clubName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "clubWalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "joiningFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinCaloriesBurnt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSleepHours",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSteps",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinRunningDistance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinWalkingDistance",
						"type": "uint256"
					}
				],
				"internalType": "struct OmniX.Club[]",
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
				"name": "_clubWalletAddress",
				"type": "address"
			}
		],
		"name": "getClubByAddress",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "clubName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "clubWalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "joiningFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinCaloriesBurnt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSleepHours",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSteps",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinRunningDistance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinWalkingDistance",
						"type": "uint256"
					}
				],
				"internalType": "struct OmniX.Club",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_clubId",
				"type": "uint256"
			}
		],
		"name": "getClubById",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "clubId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "clubName",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "clubWalletAddress",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "joiningFee",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinCaloriesBurnt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSleepHours",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinSteps",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinRunningDistance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "memberMinWalkingDistance",
						"type": "uint256"
					}
				],
				"internalType": "struct OmniX.Club",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
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
		"name": "getUserHealthGoals",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "minCaloriesBurnt",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minSleepHours",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minSteps",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minRunningDistance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "minWalkingDistance",
						"type": "uint256"
					}
				],
				"internalType": "struct OmniX.HealthGoals",
				"name": "",
				"type": "tuple"
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
		"name": "idToClub",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "clubId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "clubName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "clubWalletAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "joiningFee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberMinCaloriesBurnt",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberMinSleepHours",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberMinSteps",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberMinRunningDistance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "memberMinWalkingDistance",
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
				"name": "_clubId",
				"type": "uint256"
			}
		],
		"name": "joinClub",
		"outputs": [],
		"stateMutability": "nonpayable",
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
	}
]
export const OmniXAddress = "0x9c6B0B6ecAC8Bbb9741b1357690fa4701419e23c";
export const SampleUsdtAbi = [
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
];
export const SampleUsdtAddress = "0x7887aE94c3e7a709A85Df9Db52a26F3022ded370";
