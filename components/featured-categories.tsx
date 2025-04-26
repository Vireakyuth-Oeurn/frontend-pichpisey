import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Skincare",
    description: "Nourish your skin with our premium skincare products",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-pink-100",
  },
  {
    id: 2,
    name: "Makeup",
    description: "Express yourself with our high-quality makeup collection",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-purple-100",
  },
  {
    id: 3,
    name: "Hair Care",
    description: "Revitalize your hair with our specialized treatments",
    image: "/placeholder.svg?height=400&width=300",
    color: "bg-blue-100",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Shop by Category</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of premium beauty products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/category/${category.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className={`${category.color} h-full w-full p-6 flex flex-col justify-between`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{category.name}</h3>
                  <p className="mt-2 text-sm text-gray-600">{category.description}</p>
                </div>

                <div className="flex items-center text-pink-500 font-medium">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-0 right-0 w-40 h-40">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
