import { StoreWithRelations } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/stores`;

export const getStores = async (): Promise<StoreWithRelations[]> => {
  const res = await fetch(URL, { cache: "no-store" });

  return res.json();
};

export const getStore = async (
  storeId: string
): Promise<StoreWithRelations> => {
  const res = await fetch(`${URL}/${storeId}`, { cache: "no-store" });

  return res.json();
};
