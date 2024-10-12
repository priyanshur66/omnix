import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
interface ServiceProviderCodeState {
  serviceProviderCode: string;
  setServiceProviderCode: (key: string) => void;
}
interface PaymentAmount {
  paymentAmount: number;
  setPaymentAmount: (key: number) => void;
}
interface DiscountAmount {
  discountAmount: number;
  setDiscountAmount: (key: number) => void;
}
interface Web3Project {
  projectName: string;
  projectWalletAddress: string;
  promotionalVideo: string;
  projectLink: string;
  totalBudget: number;
  rewardPerUser: number;
  promoDuration: number;
  makeUsersEligibleForAirdrops: boolean;
  promoType: string;
  remainingBalance: number;
}

interface ServiceProvider {
  serviceProviderName: string;
  serviceType: string;
  providerWalletAddress: string;
  locationOfService: string;
  providerCode: string;
  commissionEarned: number;
}

interface Customer {
  name: string;
  customerWalletAddress: string;
}

interface Web3ProjectState extends Web3Project {
  setWeb3Project: (project: Partial<Web3Project>) => void;
}

interface ServiceProviderState extends ServiceProvider {
  setServiceProvider: (provider: Partial<ServiceProvider>) => void;
}

interface CustomerState extends Customer {
  setCustomer: (customer: Partial<Customer>) => void;
}

export const useServiceProviderCode = create<ServiceProviderCodeState>()(
  persist(
    (set) => ({
      serviceProviderCode: "",
      setServiceProviderCode: (key) => set({ serviceProviderCode: key }),
    }),
    {
      name: "public-key-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const usePaymentAmount = create<PaymentAmount>()(
  persist(
    (set) => ({
      paymentAmount: 0,
      setPaymentAmount: (key) => set({ paymentAmount: key }),
    }),
    {
      name: "public-key-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useDiscountAmount = create<DiscountAmount>()(
  persist(
    (set) => ({
      discountAmount: 0,
      setDiscountAmount: (key) => set({ discountAmount: key }),
    }),
    {
      name: "public-key-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useWeb3Project = create<Web3ProjectState>()(
  persist(
    (set) => ({
      projectName: "",
      projectWalletAddress: "",
      promotionalVideo: "",
      projectLink: "",
      totalBudget: 0,
      rewardPerUser: 0,
      promoDuration: 0,
      makeUsersEligibleForAirdrops: false,
      promoType: "",
      remainingBalance: 0,
      setWeb3Project: (project) => set((state) => ({ ...state, ...project })),
    }),
    {
      name: "web3-project-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useServiceProvider = create<ServiceProviderState>()(
  persist(
    (set) => ({
      serviceProviderName: "",
      serviceType: "",
      providerWalletAddress: "",
      locationOfService: "",
      providerCode: "",
      commissionEarned: 0,
      setServiceProvider: (provider) =>
        set((state) => ({ ...state, ...provider })),
    }),
    {
      name: "service-provider-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useCustomer = create<CustomerState>()(
  persist(
    (set) => ({
      name: "",
      customerWalletAddress: "",
      setCustomer: (customer) => set((state) => ({ ...state, ...customer })),
    }),
    {
      name: "customer-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
