import Header from "@/components/header"
import { ShoppingCart, Trash2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

// Sample cart data
const cartItems = [
  {
    id: 1,
    name: "Pink Blush Palette",
    price: 24.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Hydrating Face Mask",
    price: 12.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Lip Gloss Set",
    price: 18.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "Skincare Bundle",
    price: 49.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function CartPage() {
  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-gray-800" />
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-100 py-4 last:border-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-16 w-16 overflow-hidden rounded-md bg-gray-100">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0 flex items-center gap-4">
                      <div className="flex items-center">
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-r-none border-gray-200">
                          -
                        </Button>
                        <div className="flex h-8 w-12 items-center justify-center border-y border-gray-200 text-sm">
                          {item.quantity}
                        </div>
                        <Button variant="outline" size="icon" className="h-8 w-8 rounded-l-none border-gray-200">
                          +
                        </Button>
                      </div>
                      <p className="w-20 text-right font-medium text-pink-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400 hover:text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between bg-gray-50 p-6">
                <Button
                  variant="outline"
                  className="border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600"
                >
                  <Link href="/products">Continue Shopping</Link>
                </Button>
                <Button className="bg-pink-500 hover:bg-pink-600">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Proceed to Checkout
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-xl font-bold">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <p className="text-gray-600">Subtotal</p>
                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Shipping</p>
                    <p className="font-medium">${shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-gray-600">Tax</p>
                    <p className="font-medium">${tax.toFixed(2)}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between">
                      <p className="font-bold">Total</p>
                      <p className="font-bold text-pink-500">${total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="bg-gray-50 p-6">
                <Button className="w-full bg-pink-500 hover:bg-pink-600">Checkout</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
