// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./IModifiedERC20.sol";

contract OmniX {
    IModifiedERC20 public usdt;

    constructor(address _usdtAdd) {
        usdt = IModifiedERC20(_usdtAdd);
    }

    uint256 public clubIdTracker = 1;

    struct User {
        string userName;
        address userWalletAddress;
        string userSex;
        uint256 userWeight;
        uint256 userAge;
        uint256 userHeight;
        bool medicalCondition;
        string userLocation;
        uint256[] joinedClubs;
    }
    struct Club {
        uint256 clubId;
        string clubName;
        address clubWalletAddress;
        uint256 joiningFee;
        uint256 memberMinCaloriesBurnt;
        uint256 memberMinSleepHours;
        uint256 memberMinSteps;
        uint256 memberMinRunningDistance;
        uint256 memberMinWalkingDistance;
    }
    struct HealthGoals {
        uint256 minCaloriesBurnt;
        uint256 minSleepHours;
        uint256 minSteps;
        uint256 minRunningDistance; 
        uint256 minWalkingDistance;
    }
    struct RewardCalculation {
        uint256 userReward;
        uint256 clubReward;
        bool goalsAchieved;
    }

    mapping(address => User) public addressToUser;
    mapping(uint256 => Club) public idToClub;
    mapping(address => uint256) public clubWalletToId;
    uint256[] public allClubIds;

    function createNewUser(
        string memory _userName,
        address _userWalletAddress,
        string memory _userSex,
        uint256 _userWeight,
        uint256 _userAge,
        uint256 _userHeight,
        bool _medicalCondition,
        string memory _userLocation
    ) public returns (User memory) {
        User memory user = User(
            _userName,
            _userWalletAddress,
            _userSex,
            _userWeight,
            _userAge,
            _userHeight,
            _medicalCondition,
            _userLocation,
            new uint256[](0)
        );

        usdt.mintForDemo(_userWalletAddress);
        addressToUser[_userWalletAddress] = user;

        return user;
    }

    // usd
    function createNewClub(
        string memory _clubName,
        address _clubWalletAddress,
        uint256 _joiningFee,
        uint256 _memberMinCaloriesBurnt,
        uint256 _memberMinSleepHours,
        uint256 _memberMinSteps,
        uint256 _memberMinRunningDistance,
        uint256 _memberMinWalkingDistance
    ) public returns (Club memory) {
        // Basic input validation
        require(
            _clubWalletAddress != address(0),
            "Invalid club wallet address"
        );
        require(bytes(_clubName).length > 0, "Club name cannot be empty");
        require(
            clubWalletToId[_clubWalletAddress] == 0,
            "Club wallet address already used"
        );

        // Health metrics validation
        require(
            _memberMinCaloriesBurnt > 0 && _memberMinCaloriesBurnt < 10000,
            "Invalid calories range"
        );
        require(
            _memberMinSleepHours > 0 && _memberMinSleepHours <= 24,
            "Invalid sleep hours range"
        );
        require(_memberMinSteps > 0, "Steps must be greater than 0");
        require(
            _memberMinRunningDistance > 0,
            "Running distance must be greater than 0"
        );
        require(
            _memberMinWalkingDistance > 0,
            "Walking distance must be greater than 0"
        );

        Club memory newClub = Club(
            clubIdTracker,
            _clubName,
            _clubWalletAddress,
            _joiningFee,
            _memberMinCaloriesBurnt,
            _memberMinSleepHours,
            _memberMinSteps,
            _memberMinRunningDistance,
            _memberMinWalkingDistance
        );

        idToClub[clubIdTracker] = newClub;
        clubWalletToId[_clubWalletAddress] = clubIdTracker;
        allClubIds.push(clubIdTracker);

        clubIdTracker++;

        return newClub;
    }

    function getAllClubs() public view returns (Club[] memory) {
        Club[] memory clubs = new Club[](allClubIds.length);
        for (uint256 i = 0; i < allClubIds.length; i++) {
            clubs[i] = idToClub[allClubIds[i]];
        }
        return clubs;
    }

    function getClubById(uint256 _clubId) public view returns (Club memory) {
        require(idToClub[_clubId].clubId != 0, "Club does not exist");
        return idToClub[_clubId];
    }

    function getClubByAddress(address _clubWalletAddress)
        public
        view
        returns (Club memory)
    {
        uint256 clubId = clubWalletToId[_clubWalletAddress];
        require(clubId != 0, "Club does not exist");
        return idToClub[clubId];
    }

    function joinClub(uint256 _clubId) public {
        require(idToClub[_clubId].clubId != 0, "Club does not exist");
        require(
            addressToUser[msg.sender].userWalletAddress != address(0),
            "User does not exist"
        );

        Club storage club = idToClub[_clubId];
        User storage user = addressToUser[msg.sender];

        // Check if user has sufficient USDT balance
        require(
            usdt.balanceOf(msg.sender) >= club.joiningFee * 10 ** 18,
            "Insufficient balance to join club"
        );

        // Transfer joining fee to contract instead of club wallet
        require(
            usdt.transferFrom(msg.sender, address(this), club.joiningFee * 10 ** 18),
            "Fee transfer failed"
        );

        // Update user's joined clubs
        user.joinedClubs.push(club.clubId);

        // Emit an event for tracking
        emit ClubJoined(msg.sender, _clubId, club.joiningFee);
    }

    // Add this event at contract level
    event ClubJoined(
        address indexed user,
        uint256 indexed clubId,
        uint256 joiningFee
    );

    function getUserHealthGoals(address _userAddress)
        public
        view
        returns (HealthGoals memory)
    {
        require(
            addressToUser[_userAddress].userWalletAddress != address(0),
            "User does not exist"
        );

        User memory user = addressToUser[_userAddress];
        HealthGoals memory goals;

        for (uint256 i = 0; i < user.joinedClubs.length; i++) {
            uint256 clubId = user.joinedClubs[i];
            Club memory club = idToClub[clubId];

            goals.minCaloriesBurnt = max(
                goals.minCaloriesBurnt,
                club.memberMinCaloriesBurnt
            );
            goals.minSleepHours = max(
                goals.minSleepHours,
                club.memberMinSleepHours
            );
            goals.minSteps = max(goals.minSteps, club.memberMinSteps);
            goals.minRunningDistance = max(
                goals.minRunningDistance,
                club.memberMinRunningDistance
            );
            goals.minWalkingDistance = max(
                goals.minWalkingDistance,
                club.memberMinWalkingDistance
            );
        }

        return goals;
    }

    function max(uint256 a, uint256 b) internal pure returns (uint256) {
        return a > b ? a : b;
    }

    function checkHealthGoalsAndReward(
        address _userAddress,
        uint256 _caloriesBurnt,
        uint256 _sleepHours,
        uint256 _steps,
        uint256 _runningDistance,
        uint256 _walkingDistance
    ) public returns (uint256) {
        require(
            addressToUser[_userAddress].userWalletAddress != address(0),
            "User does not exist"
        );
        return
            _processRewards(
                _userAddress,
                _caloriesBurnt,
                _sleepHours,
                _steps,
                _runningDistance,
                _walkingDistance
            );
    }

    function _processRewards(
        address _userAddress,
        uint256 _caloriesBurnt,
        uint256 _sleepHours,
        uint256 _steps,
        uint256 _runningDistance,
        uint256 _walkingDistance
    ) internal returns (uint256) {
        User storage user = addressToUser[_userAddress];
        uint256 totalUserReward = 0;

        for (uint256 i = 0; i < user.joinedClubs.length; i++) {
            RewardCalculation memory calc = _calculateReward(
                user.joinedClubs[i],
                _caloriesBurnt,
                _sleepHours,
                _steps,
                _runningDistance,
                _walkingDistance
            );

            if (calc.goalsAchieved) {
                _transferRewards(
                    _userAddress,
                    idToClub[user.joinedClubs[i]].clubWalletAddress,
                    calc.userReward,
                    calc.clubReward
                );
                totalUserReward += calc.userReward;
            }
        }

        return totalUserReward;
    }

    function _calculateReward(
        uint256 _clubId,
        uint256 _caloriesBurnt,
        uint256 _sleepHours,
        uint256 _steps,
        uint256 _runningDistance,
        uint256 _walkingDistance
    ) internal view returns (RewardCalculation memory) {
        Club memory club = idToClub[_clubId];
        RewardCalculation memory calc;

        calc.goalsAchieved =
            _caloriesBurnt >= club.memberMinCaloriesBurnt &&
            _sleepHours >= club.memberMinSleepHours &&
            _steps >= club.memberMinSteps &&
            _runningDistance >= club.memberMinRunningDistance &&
            _walkingDistance >= club.memberMinWalkingDistance;

        if (calc.goalsAchieved) {
            calc.userReward = (club.joiningFee * 80) / 100;
            calc.clubReward = club.joiningFee - calc.userReward;
        }

        return calc;
    }

    function _transferRewards(
        address _userAddress,
        address _clubAddress,
        uint256 _userReward,
        uint256 _clubReward
    ) internal {
        require(
            usdt.transfer(_userAddress, _userReward * 10 ** 18),
            "User reward transfer failed"
        );
        require(
            usdt.transfer(_clubAddress, _clubReward * 10 ** 18),
            "Club reward transfer failed"
        );
    }
}
