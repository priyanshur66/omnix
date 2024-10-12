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
  
