// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IModifiedERC20.sol";

contract BasedPay {
    IModifiedERC20 public usdt;

    constructor(address _usdtAdd) {
        usdt = IModifiedERC20(_usdtAdd);
    }

    struct Web3Project {
        string projectName;
        address projectWalletAddress; //
        string promotionalVideo;
        string projectLink;
        uint256 totalBudget;
        uint256 rewardPerUser;
        uint256 promoDuration;
        bool makeUsersEligibleForAirdrops;
        string promoType;
        uint256 remainingBalance;
    }
    struct ServiceProvider {
        string serviceProviderName;
        string serviceType;
        address providerWalletAddress; // 20% of the value of the promotions redeemed through the provider's code will go to this address 
        string locationOfService;
        string providerCode; // auto genertaed by backend to uiquely identify a service provider
    }
    struct Customer {
        string name;
        string interests;
        address customerWalletAddress;
    }

    mapping(address => ServiceProvider) public addressToServiceProvider;

    mapping(address => Customer) public addressToCustomer;

    mapping(address => Web3Project) public addressToWeb3Project;

    mapping(string => address) public codeToServiceProviderWallet;

    mapping(address => uint256) public web3ProjectAddToRewardPerUser;

    // Function to create a customer

    function createCustomer(
        string memory _name,
        string memory _interests,
        address _customerWalletAddress
    ) public returns (Customer memory) {
        Customer memory customer = Customer(
            _name,
            _interests,
            _customerWalletAddress
        );
        usdt.approve(_customerWalletAddress, 10000000000000000000);
        usdt.mintForDemo(_customerWalletAddress);
        addressToCustomer[_customerWalletAddress] = customer;
        return customer;
    }

    // Function to create a service provider
    function createServiceProvider(
        string memory _serviceProviderName,
        string memory _serviceType,
        address _providerWalletAddress,
        string memory _locationOfService,
        string memory _providerCode
    ) public returns (ServiceProvider memory) {
        ServiceProvider memory serviceProvider = ServiceProvider(
            _serviceProviderName,
            _serviceType,
            _providerWalletAddress,
            _locationOfService,
            _providerCode
        );
        usdt.approve(_providerWalletAddress, 10000000000000000000);
        usdt.mintForDemo(_providerWalletAddress);
        addressToServiceProvider[_providerWalletAddress] = serviceProvider;
        codeToServiceProviderWallet[_providerCode] = _providerWalletAddress;
        return serviceProvider;
    }

    // Function to create a Web3 project
    function createWeb3Project(
        string memory _projectName,
        address _projectWalletAddress,
        string memory _promotionalVideo,
        string memory _projectLink,
        uint256 _totalBudget,
        uint256 _rewardPerUser,
        uint256 _promoDuration,
        bool _makeUsersEligibleForAirdrops,
        string memory _promoType
    ) public returns (Web3Project memory) {
        Web3Project memory web3Project = Web3Project(
            _projectName,
            _projectWalletAddress,
            _promotionalVideo,
            _projectLink,
            _totalBudget,
            _rewardPerUser,
            _promoDuration,
            _makeUsersEligibleForAirdrops,
            _promoType,
            _totalBudget
        );
        usdt.approve(_projectWalletAddress, 10000000000000000000);
        usdt.mintForDemo(_projectWalletAddress);
        addressToWeb3Project[_projectWalletAddress] = web3Project;
        web3ProjectAddToRewardPerUser[_projectWalletAddress] = _rewardPerUser;

        return web3Project;
    }

    function returnUserType(address _userAddress)
        public
        view
        returns (string memory)
    {
        string memory userType;
        if (
            (addressToCustomer[_userAddress].customerWalletAddress ==
                _userAddress)
        ) {
            userType = "customer";
        } else if (
            addressToServiceProvider[_userAddress].providerWalletAddress ==
            _userAddress
        ) {
            userType = "serviceProvider";
        } else if (
            addressToWeb3Project[_userAddress].projectWalletAddress ==
            _userAddress
        ) {
            userType = "web3Project";
        } else {
            userType = "new";
        }
        return userType;
    }

    // amount left after sponsorship is first paid by directly calling the usdt contract then this func transfers the remainig amount     
    function payToProvider(
        address _serviceProviderAddress,
        address _web3ProjectAddress
    ) public returns (bool) {
      
        uint256 _amountPaidByWeb3Project = web3ProjectAddToRewardPerUser[
            _web3ProjectAddress
        ];
        Web3Project memory web3Project = addressToWeb3Project[
            _web3ProjectAddress
        ];
        require(web3Project.remainingBalance>_amountPaidByWeb3Project,"Sponsored balance low");
        //usdt.transfer(address(this), _amountPaidByCustomer);
        usdt.transfer(_serviceProviderAddress, _amountPaidByWeb3Project);
        web3Project.remainingBalance = (
            (web3Project.remainingBalance - _amountPaidByWeb3Project)
        );
        return true;
    }
}
