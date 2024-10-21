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

interface UserState extends User {
  setUser: (user: Partial<User>) => void;
  resetUser: () => void;
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
