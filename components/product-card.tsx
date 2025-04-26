import Image from "next/image"
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  isNew?: boolean
  isSale?: boolean
  discount?: number
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="product-card overflow-hidden border-0 bg-white rounded-xl shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-emerald-500 hover:bg-emerald-600">New</Badge>}
          {product.isSale && <Badge className="bg-pink-500 hover:bg-pink-600">Sale</Badge>}
          {product.discount && <Badge className="bg-pink-500 hover:bg-pink-600">-{product.discount}%</Badge>}
        </div>

        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-pink-50 text-gray-700 hover:text-pink-500"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-pink-50 text-gray-700 hover:text-pink-500"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-1">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-1">({product.rating})</span>
        </div>

        <h3 className="font-medium text-gray-800 line-clamp-1">{product.name}</h3>

        <div className="mt-2 flex items-center gap-2">
          <p className="font-bold text-pink-500">${product.price.toFixed(2)}</p>
          {product.discount && (
            <p className="text-sm text-gray-400 line-through">
              ${(product.price * (1 + product.discount / 100)).toFixed(2)}
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button className="w-full bg-pink-500 hover:bg-pink-600 rounded-full" size="sm">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
