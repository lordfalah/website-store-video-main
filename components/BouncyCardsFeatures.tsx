"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { StoreWithRelations } from "@/types";
import { useRouter } from "next/navigation";

// Array palet warna dasar yang akan diulang setiap 4 item
const colorPalettes = [
  {
    bgColorFrom: "from-violet-400",
    bgColorTo: "to-indigo-400",
    textColor: "text-indigo-50",
    className: "col-span-12 md:col-span-4", // Layout untuk item 1 (atau index 0)
  },
  {
    bgColorFrom: "from-amber-400",
    bgColorTo: "to-orange-400",
    textColor: "text-orange-50",
    className: "col-span-12 md:col-span-8", // Layout untuk item 2 (atau index 1)
  },
  {
    bgColorFrom: "from-green-400",
    bgColorTo: "to-emerald-400",
    textColor: "text-emerald-50",
    className: "col-span-12 md:col-span-8", // Layout untuk item 3 (atau index 2)
  },
  {
    bgColorFrom: "from-pink-400",
    bgColorTo: "to-red-400",
    textColor: "text-red-50",
    className: "col-span-12 md:col-span-4", // Layout untuk item 4 (atau index 3)
  },
];

export const BouncyCardsFeatures: React.FC<{ items: StoreWithRelations[] }> = ({
  items,
}) => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-xl text-4xl font-bold md:text-5xl">
          Ingin Beres Lebih Cepat?
          <span className="text-slate-400">
            {" "}
            Temukan Segalanya dalam Satu Kunjungan!
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {items.map((item, index) => {
          // Tentukan palet warna berdasarkan indeks, berulang setiap 4 item
          const paletteIndex = index % colorPalettes.length;
          const currentPalette = colorPalettes[paletteIndex];

          // Jika ada lebih dari 4 item dan ini adalah item ke-5 atau lebih, gunakan "FEATURE DEMO HERE"
          const showFeatureDemo = items.length > 4 && index >= 4;

          return (
            <BounceCard
              storeId={item.id}
              key={item.id}
              className={currentPalette.className}
            >
              {/* Gunakan item.name sebagai judul */}
              <CardTitle>{item.name}</CardTitle>

              <div
                className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br ${currentPalette.bgColorFrom} ${currentPalette.bgColorTo} p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
              >
                <span
                  className={`block text-center font-semibold ${currentPalette.textColor}`}
                >
                  {showFeatureDemo
                    ? "FEATURE DEMO HERE"
                    : // Konten asli untuk 4 item pertama atau jika total item <= 4
                      `Total produk ${item._count.product ?? 0}`}
                </span>
              </div>
            </BounceCard>
          );
        })}
      </div>
    </section>
  );
};

const BounceCard = ({
  className,
  children,
  storeId,
}: {
  className: string;
  children: ReactNode;
  storeId: string;
}) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(`/${storeId}`)}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
