import Header from "@/components/header"
import { ShoppingBag, Package, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Sample orders data
const orders = [
  {
    id: "ORD-12345",
    date: "April 15, 2025",
    status: "Delivered",
    total: 87.97,
    items: [
      { id: 1, name: "Pink Blush Palette", price: 24.99, quantity: 1 },
      { id: 3, name: "Lip Gloss Set", price: 18.99, quantity: 1 },
      { id: 5, name: "Facial Cleanser", price: 15.99, quantity: 2 },
    ],
  },
  {
    id: "ORD-12344",
    date: "April 10, 2025",
    status: "Processing",
    total: 49.99,
    items: [{ id: 4, name: "Skincare Bundle", price: 49.99, quantity: 1 }],
  },
  {
    id: "ORD-12343",
    date: "March 28, 2025",
    status: "Delivered",
    total: 42.98,
    items: [
      { id: 2, name: "Hydrating Face Mask", price: 12.99, quantity: 2 },
      { id: 7, name: "Moisturizing Cream", price: 22.99, quantity: 1 },
    ],
  },
]

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-pink-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-gray-800" />
          <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden">
              <CardHeader className="bg-gray-50 p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-lg font-medium">Order {order.id}</CardTitle>
                    <p className="text-sm text-gray-500">Placed on {order.date}</p>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center">
                    <div className="flex items-center gap-1">
                      {order.status === "Delivered" ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Clock className="h-4 w-4 text-yellow-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          order.status === "Delivered" ? "text-green-500" : "text-yellow-500"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="ml-4 border-pink-200 text-pink-500 hover:bg-pink-50 hover:text-pink-600"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-pink-100">
                          <Package className="h-6 w-6 text-pink-500" />
                        </div>
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium text-pink-500">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
                  <p className="font-medium">Total</p>
                  <p className="font-bold text-pink-500">${order.total.toFixed(2)}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
