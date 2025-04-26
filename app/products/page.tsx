import Header from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Package } from "lucide-react"
import ProductCard from "@/components/product-card"

// Sample product data - expanded for products page
const products = [
  {
    id: 1,
    name: "Pink Blush Palette",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Hydrating Face Mask",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Lip Gloss Set",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.2,
  },
  {
    id: 4,
    name: "Skincare Bundle",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Facial Cleanser",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Makeup Brush Set",
    price: 29.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Moisturizing Cream",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.4,
  },
  {
    id: 8,
    name: "Eye Shadow Collection",
    price: 34.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.3,
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2">
          <Package className="h-6 w-6 text-gray-800" />
          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm">
                  <option>All Categories</option>
                  <option>Skincare</option>
                  <option>Makeup</option>
                  <option>Hair Care</option>
                  <option>Body Care</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Price Range</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm">
                  <option>All Prices</option>
                  <option>Under $15</option>
                  <option>$15 - $30</option>
                  <option>$30 - $50</option>
                  <option>Over $50</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Rating</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm">
                  <option>All Ratings</option>
                  <option>4 Stars & Up</option>
                  <option>3 Stars & Up</option>
                  <option>2 Stars & Up</option>
                  <option>1 Star & Up</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Sort By</label>
                <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  )
}
