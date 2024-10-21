import { create } from "zustand";

interface User {
  userName: string;
  userWalletAddress: string;
  userSex: string;
  userWeight: number;
  userAge: number;
  userHeight: number;
  medicalCondition: boolean;
  userLocation: string;
  joinedClubs: number[];
}

interface HealthGoals {
  minCaloriesBurnt: number;
  minSleepHours: number;
  minSteps: number;
  minRunningDistance: number;
  minWalkingDistance: number;
}

interface UserState extends User {
  setUser: (user: Partial<User>) => void;
  resetUser: () => void;
}

interface HealthGoalsState extends HealthGoals {
  setMinCaloriesBurnt: (minCaloriesBurnt: number) => void;
  setMinSleepHours: (minSleepHours: number) => void;
  setMinSteps: (minSteps: number) => void;
  setMinRunningDistance: (minRunningDistance: number) => void;
  setMinWalkingDistance: (minWalkingDistance: number) => void;
  resetHealthGoals: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  userName: "",
  userWalletAddress: "",
  userSex: "",
  userWeight: 0,
  userAge: 0,
  userHeight: 0,
  medicalCondition: false,
  userLocation: "",
  joinedClubs: [],

  setUser: (user) => set((state) => ({ ...state, ...user })),

  resetUser: () =>
    set({
      userName: "",
      userWalletAddress: "",
      userSex: "",
      userWeight: 0,
      userAge: 0,
      userHeight: 0,
      medicalCondition: false,
      userLocation: "",
      joinedClubs: [],
    }),
}));
export const useHealthGoalsStore = create<HealthGoalsState>((set) => ({
  minCaloriesBurnt: 0,
  minSleepHours: 0,
  minSteps: 0,
  minRunningDistance: 0,
  minWalkingDistance: 0,

  setMinCaloriesBurnt: (minCaloriesBurnt) => set(() => ({ minCaloriesBurnt })),

  setMinSleepHours: (minSleepHours) => set(() => ({ minSleepHours })),

  setMinSteps: (minSteps) => set(() => ({ minSteps })),

  setMinRunningDistance: (minRunningDistance) =>
    set(() => ({ minRunningDistance })),

  setMinWalkingDistance: (minWalkingDistance) =>
    set(() => ({ minWalkingDistance })),

  resetHealthGoals: () =>
    set({
      minCaloriesBurnt: 0,
      minSleepHours: 0,
      minSteps: 0,
      minRunningDistance: 0,
      minWalkingDistance: 0,
    }),
}));
