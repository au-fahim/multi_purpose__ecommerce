// app/lib/data.ts

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description: string;
  price: number;
  salePrice?: number;
  currency: string; // 'BDT'
  images: string[];
  categoryId: string;
  brand?: string;
  rating?: number;
  reviewsCount?: number;
  stock: number;
  unitsSold?: number;
  variants?: Array<{ id: string; name: string; price: number; stock: number }>;
  attributes?: Record<string, string>;
  isFavourite?: boolean;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  image?: string;
  parentId?: string;
};

export const categories: Category[] = [
    {
        id: "cat-1",
        slug: "bags",
        name: "Bags",
        image: "/images/bag1.jpg",
    },
    {
        id: "cat-1-1",
        slug: "tote-bags",
        name: "Tote Bags",
        image: "/images/bag1.jpg",
        parentId: "cat-1",
    },
    {
        id: "cat-1-2",
        slug: "crossbody-bags",
        name: "Crossbody Bags",
        image: "/images/bag2.jpg",
        parentId: "cat-1",
    },
    {
        id: "cat-2",
        slug: "shoes",
        name: "Shoes",
        image: "/images/shoe1.jpg",
    },
    {
        id: "cat-2-1",
        slug: "heels",
        name: "Heels",
        image: "/images/shoe1.jpg",
        parentId: "cat-2",
    },
    {
        id: "cat-2-2",
        slug: "sneakers",
        name: "Sneakers",
        image: "/images/shoe2.jpg",
        parentId: "cat-2",
    },
    {
        id: "cat-3",
        slug: "jewelry",
        name: "Jewelry",
        image: "/images/jewelry1.jpg",
    },
    {
        id: "cat-3-1",
        slug: "earrings",
        name: "Earrings",
        image: "/images/jewelry1.jpg",
        parentId: "cat-3",
    },
    {
        id: "cat-3-2",
        slug: "necklaces",
        name: "Necklaces",
        image: "/images/jewelry2.jpg",
        parentId: "cat-3",
    },
];

export const products: Product[] = [
  // Bags
  {
    id: "abb-889572188144",
    slug: "classic-leather-tote",
    title: "Classic Leather Tote",
    shortDescription: "A timeless leather tote for everyday use.",
    description:
      "Crafted from high-quality leather, this tote is perfect for carrying your essentials in style. It features a spacious interior and multiple pockets for organization.",
    price: 189.99,
    salePrice: 159.99,
    currency: "BDT",
    images: ["/images/bag1.jpg"],
    categoryId: "tote-bags",
    brand: "LAOBAAN",
    rating: 4.5,
    reviewsCount: 120,
    stock: 15,
    unitsSold: 50,
    attributes: { color: "Brown", material: "Leather" },
    isFavourite: true,
  },
  {
    id: "abb-889572188145",
    slug: "modern-crossbody-bag",
    title: "Modern Crossbody Bag",
    shortDescription: "A sleek and stylish crossbody bag.",
    description:
      "This modern crossbody bag is perfect for when you're on the go. It's lightweight and has enough room for your phone, wallet, and keys.",
    price: 99.5,
    currency: "BDT",
    images: ["/images/bag2.jpg"],
    categoryId: "crossbody-bags",
    brand: "LAOBAAN",
    rating: 4.8,
    reviewsCount: 250,
    stock: 25,
    unitsSold: 100,
    attributes: { color: "Black", material: "Nylon" },
  },
  {
    id: "abb-889572188146",
    slug: "stylish-shoulder-bag",
    title: "Stylish Shoulder Bag",
    shortDescription: "A stylish shoulder bag for everyday use.",
    description:
      "This stylish shoulder bag is perfect for everyday use. It has a spacious interior and multiple pockets for organization.",
    price: 150.0,
    currency: "BDT",
    images: ["/images/bag2.jpg"],
    categoryId: "crossbody-bags",
    brand: "LAOBAAN",
    rating: 4.7,
    reviewsCount: 180,
    stock: 22,
    unitsSold: 80,
    attributes: { color: "Blue", material: "Canvas" },
  },
  // Shoes
  {
    id: "abb-943245158884",
    slug: "elegant-suede-heels",
    title: "Elegant Suede Heels",
    shortDescription: "Elegant heels for special occasions.",
    description:
      "Step out in style with these elegant suede heels. They feature a comfortable footbed and a classic design that will never go out of style.",
    price: 250.0,
    currency: "BDT",
    images: ["/images/shoe1.jpg"],
    categoryId: "heels",
    brand: "LAOBAAN",
    rating: 4.9,
    reviewsCount: 88,
    stock: 10,
    unitsSold: 30,
    variants: [
      { id: "variant-1", name: "Size 7", price: 250.0, stock: 5 },
      { id: "variant-2", name: "Size 8", price: 250.0, stock: 5 },
    ],
    attributes: { color: "Red", material: "Suede" },
  },
  {
    id: "abb-943245158885",
    slug: "casual-canvas-sneakers",
    title: "Casual Canvas Sneakers",
    shortDescription: "Comfortable sneakers for everyday wear.",
    description:
      "These casual canvas sneakers are perfect for everyday wear. They're comfortable, stylish, and go with just about anything.",
    price: 75.0,
    currency: "BDT",
    images: ["/images/shoe2.jpg"],
    categoryId: "sneakers",
    brand: "LAOBAAN",
    rating: 4.2,
    reviewsCount: 310,
    stock: 50,
    unitsSold: 200,
    attributes: { color: "White", material: "Canvas" },
  },
  {
    id: "abb-943245158886",
    slug: "leather-boots",
    title: "Leather Boots",
    shortDescription: "Stylish leather boots for any occasion.",
    description:
      "These leather boots are perfect for any occasion. They are comfortable and stylish.",
    price: 350.0,
    currency: "BDT",
    images: ["/images/shoe1.jpg"],
    categoryId: "heels",
    brand: "LAOBAAN",
    rating: 4.8,
    reviewsCount: 120,
    stock: 15,
    unitsSold: 40,
    attributes: { color: "Black", material: "Leather" },
  },
  // Jewelry
  {
    id: "abb-663422007187",
    slug: "silver-drop-earrings",
    title: "Silver Drop Earrings",
    shortDescription: "Elegant silver earrings.",
    description:
      "Add a touch of elegance to any outfit with these beautiful silver drop earrings. They're perfect for both casual and formal occasions.",
    price: 65.0,
    currency: "BDT",
    images: ["/images/jewelry1.jpg"],
    categoryId: "earrings",
    brand: "LAOBAAN",
    rating: 4.7,
    reviewsCount: 150,
    stock: 30,
    unitsSold: 120,
    attributes: { material: "Sterling Silver" },
  },
  {
    id: "abb-663422007188",
    slug: "gold-plated-necklace",
    title: "Gold Plated Necklace",
    shortDescription: "A beautiful gold plated necklace.",
    description:
      "This stunning gold plated necklace is the perfect accessory for any occasion. It features a delicate chain and a beautiful pendant.",
    price: 120.0,
    currency: "BDT",
    images: ["/images/jewelry2.jpg"],
    categoryId: "necklaces",
    brand: "LAOBAAN",
    rating: 4.6,
    reviewsCount: 95,
    stock: 20,
    unitsSold: 90,
    attributes: { material: "Gold Plated" },
  },
  {
    id: "abb-663422007189",
    slug: "pearl-necklace",
    title: "Pearl Necklace",
    shortDescription: "An elegant pearl necklace.",
    description:
      "This elegant pearl necklace is a timeless piece of jewelry. It is perfect for special occasions.",
    price: 220.0,
    currency: "BDT",
    images: ["/images/jewelry2.jpg"],
    categoryId: "necklaces",
    brand: "LAOBAAN",
    rating: 4.9,
    reviewsCount: 110,
    stock: 18,
    unitsSold: 70,
    attributes: { material: "Pearl" },
  }
];

// Helper function to get products by category
export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.categoryId === category);
};

// Helper function to get a single product by ID
export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

// Helper function to get a single product by slug
export const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug);
};

// Helper function to get categories by parent ID
export const getCategoriesByParentId = (parentId: string) => {
    return categories.filter((category) => category.parentId === parentId);
};