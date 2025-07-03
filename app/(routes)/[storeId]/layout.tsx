import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import ModalProvider from "@/providers/modal-provider";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Toko Detail",
  description: "Toko Detail",
};

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <ModalProvider />
      <Navbar />
      {children}
    </Fragment>
  );
}
