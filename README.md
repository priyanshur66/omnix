# omniX

omniX is a health-focused platform built on Base that gamifies daily wellness routines using blockchain technology. By setting goals, creating and joining groups (Clubs), users are incentivized with crypto rewards (USDT on Base Sepolia for this demo) to achieve their health objectives. Group creators (admins) earn a share of the group joining fees, motivating them to design engaging challenges and keep members healthy.

## Problem Statement

According to reports from the **WHO**, India faces a high burden of lifestyle diseases, which account for **60% of all deaths**. Diseases like **diabetes, hypertension, and heart disease** have seen a sharp rise, especially due to inactive lifestyles and unhealthy habits. The majority of these conditions can be significantly reduced through mindful daily habits. omniX aims to tackle this by making healthy habits fun, social, and rewarding.

## Our Solution

omniX promotes healthy living by:

*   **Gamifying Health Goals:** Turning wellness routines into engaging challenges with clear objectives and rewards.
*   **Group Health Challenges (Clubs):** Enabling users to join or create clubs with specific health goals (e.g., running, walking, sleep quality). Admins are incentivized to innovate activities and goals.
*   **Crypto Incentives:** Utilizing smart contracts on the Base blockchain to automatically redistribute club joining fees based on individual performance, boosting motivation and accountability.
*   **Seamless Onboarding:** Leveraging Coinbase Smart Wallet and Base Name Service (BaseNS) for easy wallet connection and user identification.

## How It Works (The Mechanics)

1.  **Club Creation:** Admins create a Club, define specific health goals (e.g., minimum steps, calories burnt, sleep hours), set rules, and establish a joining fee (in USDT).
2.  **Joining a Club:** Users browse available Clubs and join by paying the fee using their connected crypto wallet.
3.  **Goal Achievement:** Users strive to meet the Club's health goals within the set timeframe (e.g., daily, monthly). Progress can be tracked (simulated in the demo via manual input, intended for integration with fitness trackers).
4.  **Reward Distribution:** At the end of the period (simulated as daily in the demo, typically monthly), the smart contract automatically distributes the fee pool. Users who meet their goals receive a significant portion of their joining fee back, while the Club admin receives the remainder as a reward for creating and managing the group.

## How to Use omniX (Step-by-Step Demo Flow)

Here’s how to navigate and use the omniX platform, as shown in the demo:

1.  **Connect Wallet:**
    *   Visit the omniX application.
    *   Click the "Connect Wallet" button.
    *   Choose your wallet (Demo uses Coinbase Smart Wallet).
    *   Approve the connection request in your wallet application. Your Base Name (e.g., `priyanshux64.base.eth`) may be displayed.

2.  **Set Up Your Health Profile:**
    *   You'll be prompted to create your profile.
    *   Enter your details: Name, Age, Sex, Medical Condition (if any), Height, Weight, Location.
    *   Optionally, upload a profile picture.
    *   Click "Setup Profile".
    *   Approve the transaction in your wallet (this may involve passkey/device authentication).

3.  **Select Initial Health Goals:**
    *   Choose the general health areas you want to focus on (e.g., Lose weight, Better sleep, Increase flexibility).
    *   Click "Save".

4.  **Join or Create a Club:**
    *   You'll see a page listing available Clubs with their goals and joining fees.
    *   **To Join an Existing Club:**
        *   Find a Club that matches your interests (e.g., "Delhi running club").
        *   Click "Join Club".
        *   Approve the transaction in your wallet to pay the joining fee (e.g., 10 USDT deducted from your balance).
    *   **To Create a New Club:**
        *   Click "Create new club".
        *   Fill in the details: Club Name, Joining Fee, Minimum Goals (Calories Burnt, Sleep Hours, Steps, Running Distance, Walking Distance).
        *   Click "Transact" or "Create Club".
        *   Approve the transaction in your wallet. Your new club will appear in the list.

5.  **Track Your Progress:**
    *   Once you join a Club, its specific goals will be added to your "My Progress" dashboard.
    *   Your activity (steps, sleep, etc.) needs to be logged.
    *   *(Demo Feature)*: Click "Simulate Workout" to manually input your activity data for the day (e.g., sleep hours, calories, steps, distance run/walked). Click "Log".
    *   *(Real-World Intention)*: This data would ideally sync automatically from connected fitness trackers (like Apple Watch, Fitbit, etc.).
    *   View your progress towards the daily/monthly goals on the dashboard bars.

6.  **Meet Goals & Claim Reward:**
    *   Ensure you meet all the required goals for the Club within the specified period (simulated as one day in the demo).
    *   Once all goals are met (progress bars are full), the "Claim reward" button becomes active.
    *   Click "Claim reward".
    *   Approve the transaction in your wallet.
    *   The smart contract executes: a percentage of your joining fee (e.g., 80% or 8 USDT in the demo) is returned to your wallet balance. The remaining percentage (e.g., 20%) is sent to the Club admin.
    *   Your progress bars will reset for the next period.

---

Stay healthy, stay motivated with omniX!
