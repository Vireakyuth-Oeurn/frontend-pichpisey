import Image from "next/image"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Beauty Enthusiast",
    content:
      "I've tried many beauty products, but Pich Pisey's skincare line has completely transformed my routine. My skin has never looked better!",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Makeup Artist",
    content:
      "As a professional makeup artist, I'm very particular about the products I use. Pich Pisey's makeup collection offers exceptional quality and stunning colors.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Regular Customer",
    content:
      "The customer service is outstanding, and the products arrive beautifully packaged. I'm a customer for life!",
    rating: 4,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">What Our Customers Say</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">Discover why our customers love shopping with us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                  />
                ))}
              </div>

              <Quote className="h-8 w-8 text-pink-200 mb-4" />

              <p className="text-gray-600 mb-6">{testimonial.content}</p>

              <div className="flex items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full mr-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
