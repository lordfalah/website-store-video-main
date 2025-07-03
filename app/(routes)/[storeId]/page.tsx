import getBanner from "@/actions/get-banner";
import getProducts from "@/actions/get-products";
import { getStore } from "@/actions/get-stores";
import Banner from "@/components/banner";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { notFound } from "next/navigation";
import React from "react";

interface StorePageProps {
  params: {
    storeId: string;
  };
}

export const revalidate = 0;

const StorePage: React.FC<StorePageProps> = async ({ params }) => {
  if (!params.storeId) notFound();

  const store = await getStore(params.storeId);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Banner data={store.banners[0]} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Produk Unggulan" items={store.product} />
        </div>
      </div>
    </Container>
  );
};

export default StorePage;
