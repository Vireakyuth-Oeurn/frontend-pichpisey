import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function Newsletter() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-pink-100 mb-6">
            <Mail className="h-8 w-8 text-pink-500" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest products, exclusive offers, and beauty tips.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="search-input rounded-full" />
            <Button className="bg-pink-500 hover:bg-pink-600 rounded-full whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
