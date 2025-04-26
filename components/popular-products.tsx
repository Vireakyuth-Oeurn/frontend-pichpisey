import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"

// Sample product data with enhanced properties
const products = [
  {
    id: 1,
    name: "Pink Blush Palette",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.5,
    isNew: true,
  },
  {
    id: 2,
    name: "Hydrating Face Mask",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
    isSale: true,
    discount: 15,
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
    isNew: true,
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
    isSale: true,
    discount: 20,
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

export default function PopularProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Popular Products</h2>
            <p className="mt-2 text-gray-600">Discover our most loved beauty essentials</p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-2 overflow-x-auto pb-2 md:pb-0">
            <Button
              variant="outline"
              className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 whitespace-nowrap"
            >
              All Products
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 whitespace-nowrap"
            >
              Skincare
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 whitespace-nowrap"
            >
              Makeup
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 whitespace-nowrap"
            >
              Hair Care
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-pink-500 hover:bg-pink-600 rounded-full px-8">View All Products</Button>
        </div>
      </div>
    </section>
  )
}
