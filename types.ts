export interface Banner {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  banner: Banner;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export type Store = {
  id: string;
  name: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Tipe untuk Product dengan Image terkait.
 */
export type ProductWithImages = Product & {
  images: Image[];
};

/**
 * Tipe untuk Banner dengan Category terkait (jika relasi Category[] di Banner dimaksudkan untuk di-include).
 * Catatan: Dalam skema Prisma Anda, relasi Banner ke Category adalah Category[].
 * Asumsi: Kueri yang Anda jalankan akan mengembalikan kategori yang berasosiasi dengan banner.
 */
export type BannerWithCategories = Banner & {
  categories: Category[];
};

/**
 * Tipe untuk Store yang di-include dengan Categories, Products (dengan Images), dan Banners (dengan Categories).
 */
export type StoreWithRelations = Store & {
  categories: Category[];
  product: ProductWithImages[];
  banners: BannerWithCategories[];
  _count: { banners: number; categories: number; product: number };
};
