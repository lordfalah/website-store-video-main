import { Banner } from "@/types";

const URL = `${process.env.PUBLIC_API_URL}/banners`;

const getBanner = async (id: string): Promise<Banner> => {
  const req = await fetch(`${URL}/${id}`, { cache: "no-store" });
  const res = await req.json();

  return res;
};

export default getBanner;
