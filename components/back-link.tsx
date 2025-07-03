"use client";

import { ArrowLeftFromLine } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const BackLink = () => {
  const router = useRouter();

  return (
    <ArrowLeftFromLine
      className="cursor-pointer"
      onClick={() => router.back()}
    />
  );
};

export default BackLink;
