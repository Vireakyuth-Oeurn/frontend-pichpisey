'use client';

import { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const API_URL = 'http://52.202.236.27:1337/api/products?populate=*';

    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        const data = json.data.map((product: any) => {
          const attributes = product.attributes || {};
          const image = attributes.image?.data?.attributes?.url || '';
          return {
            id: product.id,
            name: attributes.name || '',
            price: attributes.price || 0,
            image: `http://52.202.236.27:1337${image}`,
            rating: attributes.rating || 0,
          };
        });
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
            <p className="mt-2 text-gray-600">Discover our most loved beauty essentials</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
