import { client } from "@/api/client";
import { Product } from "@/types/productListType";
import { QueryObserverResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

const fetchProductList = async (): Promise<
  AxiosResponse<Product[], unknown>
> => {
  return await client.get<Product[]>("/list_products");
};

const fetchProductListById = async (
  id: string
): Promise<AxiosResponse<Product[], unknown>> => {
  return await client.get<Product[]>(`/list_products`, {
    params: {
      slug_name: id,
    },
  });
};

export const useFetchProductListById = (
  id: string
): QueryObserverResult<Product, unknown> => {
  return useQuery<Product, unknown>({
    queryKey: ["list_products", id],
    queryFn: async () => {
      const { data } = await fetchProductListById(id);
      return data?.[0];
    },
    // staleTime: 10 * 1000,
  });
};

export const useFetchProductList = (): QueryObserverResult<
  Product[],
  unknown
> => {
  return useQuery<Product[], unknown>({
    queryFn: async () => {
      const { data } = await fetchProductList();
      return data;
    },
    queryKey: ["list_products"],
    // staleTime: 10 * 1000,
  });
};
