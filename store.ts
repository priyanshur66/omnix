import { create } from "zustand";

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

interface PromotionalVideoUrlState {
  promotionalVideoUrl: string;
  setPromotionalVideoUrl: (key: string) => void;
}

interface PaymentSponsorState {
  paymentSponsorAddress: string;
  setPaymentSponsorAddress: (key: string) => void;
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

export const useServiceProviderCode = create<ServiceProviderCodeState>()((set) => ({
  serviceProviderCode: "",
  setServiceProviderCode: (key) => set({ serviceProviderCode: key }),
}));

export const usePromotionalVideoUrlState = create<PromotionalVideoUrlState>()((set) => ({
  promotionalVideoUrl: "",
  setPromotionalVideoUrl: (key) => set({ promotionalVideoUrl: key }),
}));

export const usePaymentSponsorState = create<PaymentSponsorState>()((set) => ({
  paymentSponsorAddress: "",
  setPaymentSponsorAddress: (key) => set({ paymentSponsorAddress: key }),
}));

export const usePaymentAmount = create<PaymentAmount>()((set) => ({
  paymentAmount: 0,
  setPaymentAmount: (key) => set({ paymentAmount: key }),
}));

export const useDiscountAmount = create<DiscountAmount>()((set) => ({
  discountAmount: 0,
  setDiscountAmount: (key) => set({ discountAmount: key }),
}));

export const useWeb3Project = create<Web3ProjectState>()((set) => ({
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
}));

export const useServiceProvider = create<ServiceProviderState>()((set) => ({
  serviceProviderName: "",
  serviceType: "",
  providerWalletAddress: "",
  locationOfService: "",
  providerCode: "",
  commissionEarned: 0,
  setServiceProvider: (provider) => set((state) => ({ ...state, ...provider })),
}));

export const useCustomer = create<CustomerState>()((set) => ({
  name: "",
  customerWalletAddress: "",
  setCustomer: (customer) => set((state) => ({ ...state, ...customer })),
}));