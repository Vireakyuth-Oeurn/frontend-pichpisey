import Image from "next/image"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300">
      <img
        src={product.image || '/default-product.jpg'}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-pink-500 font-bold mt-2">${product.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              className={`h-5 w-5 ${
                index < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.618 4.979h5.235c.969 0 1.371 1.24.588 1.81l-4.233 3.074 1.618 4.978c.3.922-.755 1.688-1.54 1.118L10 15.347l-4.233 3.073c-.784.57-1.838-.196-1.539-1.118l1.618-4.978-4.233-3.073c-.783-.57-.38-1.81.588-1.81h5.235l1.618-4.979z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
        </div>
      </div>
    </div>
  );
}
