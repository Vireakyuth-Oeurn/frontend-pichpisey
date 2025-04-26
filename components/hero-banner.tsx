import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroBanner() {
  return (
    <div className="relative mx-auto my-8 overflow-hidden rounded-3xl bg-gradient-to-r from-pink-50 to-pink-100">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-block rounded-full bg-pink-100 px-4 py-1.5 text-sm font-medium text-pink-600">
              New Collection
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Discover Beauty <br />
              <span className="text-pink-500">Essentials</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              Explore our curated collection of premium beauty products designed to enhance your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 rounded-full px-8">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600 rounded-full px-8"
              >
                View Collections
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-500">50+</p>
                <p className="text-sm text-gray-500">Brands</p>
              </div>
              <div className="h-10 border-l border-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-500">500+</p>
                <p className="text-sm text-gray-500">Products</p>
              </div>
              <div className="h-10 border-l border-gray-200"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-pink-500">10k+</p>
                <p className="text-sm text-gray-500">Customers</p>
              </div>
            </div>
          </div>
          <div className="relative md:w-1/2 h-[400px] mt-8 md:mt-0">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-pink-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -left-10 -top-10 w-48 h-48 bg-pink-300 rounded-full opacity-30 blur-3xl"></div>
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="Beauty products showcase"
              fill
              className="object-contain z-10"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
