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
  {
    id: "cat-4",
    slug: "electronics",
    name: "Electronics",
    image: "/images/MainProductCategory/Electronics.jpg",
  },
  {
    id: "cat-4-1",
    slug: "smartphones",
    name: "Smartphones",
    image: "/images/MainProductCategory/Electronics.jpg",
    parentId: "cat-4",
  },
  {
    id: "cat-4-2",
    slug: "laptops",
    name: "Laptops",
    image: "/images/MainProductCategory/Electronics.jpg",
    parentId: "cat-4",
  },
  {
    id: "cat-4-3",
    slug: "headphones",
    name: "Headphones",
    image: "/images/MainProductCategory/Electronics.jpg",
    parentId: "cat-4",
  },
  {
    id: "cat-5",
    slug: "books",
    name: "Books",
    image: "/images/MainProductCategory/Books.jpg",
  },
  {
    id: "cat-5-1",
    slug: "fiction",
    name: "Fiction",
    image: "/images/MainProductCategory/Books.jpg",
    parentId: "cat-5",
  },
  {
    id: "cat-5-2",
    slug: "non-fiction",
    name: "Non-Fiction",
    image: "/images/MainProductCategory/Books.jpg",
    parentId: "cat-5",
  },
  {
    id: "cat-5-3",
    slug: "science-fiction",
    name: "Science Fiction",
    image: "/images/MainProductCategory/Books.jpg",
    parentId: "cat-5",
  },
  {
    id: "cat-6",
    slug: "home-kitchen",
    name: "Home & Kitchen",
    image: "/images/MainProductCategory/Kitchen.jpg",
  },
  {
    id: "cat-6-1",
    slug: "cookware",
    name: "Cookware",
    image: "/images/MainProductCategory/Kitchen.jpg",
    parentId: "cat-6",
  },
  {
    id: "cat-6-2",
    slug: "bedding",
    name: "Bedding",
    image: "/images/MainProductCategory/Kitchen.jpg",
    parentId: "cat-6",
  },
  {
    id: "cat-6-3",
    slug: "furniture",
    name: "Furniture",
    image: "/images/MainProductCategory/Kitchen.jpg",
    parentId: "furniture",
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
  },
  // Electronics
  {
    id: "abb-111111111111",
    slug: "gaming-laptop",
    title: "Gaming Laptop",
    shortDescription: "A powerful gaming laptop.",
    description: "A powerful gaming laptop for all your gaming needs.",
    price: 1200.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Electronics.jpg"],
    categoryId: "electronics",
    brand: "Brand A",
    rating: 4.8,
    reviewsCount: 150,
    stock: 10,
    unitsSold: 50,
    attributes: { color: "Black" },
  },
  {
    id: "abb-222222222222",
    slug: "smartphone-x",
    title: "Smartphone X",
    shortDescription: "A modern smartphone.",
    description: "A modern smartphone with all the latest features.",
    price: 800.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Electronics.jpg"],
    categoryId: "smartphones",
    brand: "Brand B",
    rating: 4.7,
    reviewsCount: 200,
    stock: 20,
    unitsSold: 100,
    attributes: { color: "White" },
  },
  {
    id: "abb-333333333333",
    slug: "noise-cancelling-headphones",
    title: "Noise Cancelling Headphones",
    shortDescription: "Immersive sound experience.",
    description:
      "Immersive sound experience with these noise cancelling headphones.",
    price: 250.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Electronics.jpg"],
    categoryId: "headphones",
    brand: "Brand C",
    rating: 4.9,
    reviewsCount: 300,
    stock: 30,
    unitsSold: 150,
    attributes: { color: "Black" },
  },
  // Books
  {
    id: "abb-444444444444",
    slug: "the-great-gatsby",
    title: "The Great Gatsby",
    shortDescription: "A classic novel.",
    description: "A classic novel by F. Scott Fitzgerald.",
    price: 15.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Books.jpg"],
    categoryId: "fiction",
    brand: "Penguin Books",
    rating: 4.5,
    reviewsCount: 500,
    stock: 100,
    unitsSold: 300,
    attributes: { author: "F. Scott Fitzgerald" },
  },
  {
    id: "abb-555555555555",
    slug: "sapiens",
    title: "Sapiens: A Brief History of Humankind",
    shortDescription: "A book about the history of humankind.",
    description: "A book about the history of humankind by Yuval Noah Harari.",
    price: 25.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Books.jpg"],
    categoryId: "non-fiction",
    brand: "HarperCollins",
    rating: 4.8,
    reviewsCount: 1000,
    stock: 50,
    unitsSold: 500,
    attributes: { author: "Yuval Noah Harari" },
  },
  {
    id: "abb-666666666666",
    slug: "dune",
    title: "Dune",
    shortDescription: "A science fiction novel.",
    description: "A science fiction novel by Frank Herbert.",
    price: 20.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Books.jpg"],
    categoryId: "science-fiction",
    brand: "Ace Books",
    rating: 4.9,
    reviewsCount: 800,
    stock: 80,
    unitsSold: 400,
    attributes: { author: "Frank Herbert" },
  },
  // Home & Kitchen
  {
    id: "abb-777777777777",
    slug: "non-stick-cookware-set",
    title: "Non-Stick Cookware Set",
    shortDescription: "A complete cookware set.",
    description: "A complete cookware set for all your cooking needs.",
    price: 150.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Kitchen.jpg"],
    categoryId: "home-kitchen",
    brand: "T-fal",
    rating: 4.6,
    reviewsCount: 400,
    stock: 40,
    unitsSold: 200,
    attributes: { material: "Aluminum" },
  },
  {
    id: "abb-888888888888",
    slug: "queen-size-bed-sheets",
    title: "Queen Size Bed Sheets",
    shortDescription: "Comfortable and soft bed sheets.",
    description: "Comfortable and soft bed sheets for a good night's sleep.",
    price: 50.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Kitchen.jpg"],
    categoryId: "home-kitchen",
    brand: "Utopia Bedding",
    rating: 4.7,
    reviewsCount: 600,
    stock: 60,
    unitsSold: 300,
    attributes: { material: "Microfiber" },
  },
  {
    id: "abb-999999999999",
    slug: "modern-sofa",
    title: "Modern Sofa",
    shortDescription: "A stylish and comfortable sofa.",
    description: "A stylish and comfortable sofa for your living room.",
    price: 500.0,
    currency: "BDT",
    images: ["/images/MainProductCategory/Kitchen.jpg"],
    categoryId: "furniture",
    brand: "Zinus",
    rating: 4.8,
    reviewsCount: 200,
    stock: 20,
    unitsSold: 100,
    attributes: { color: "Gray" },
  },
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
