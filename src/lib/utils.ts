import { QueryClient } from "@tanstack/react-query";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient();

export const variant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const skeletonVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: delay, // Delay setiap elemen sebesar 0.2 detik
      ease: "easeInOut",
      duration: 0.6,
    },
  }),
};

export const FormatCurrency = (number: number, locale: string = "id-ID") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
