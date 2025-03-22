import { QueryClient } from "@tanstack/react-query";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const queryClient = new QueryClient();

export const FormatCurrency = (number: number, locale: string = "id-ID") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "IDR",
  }).format(number);
};
