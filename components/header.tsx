"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Package, ShoppingBag, Search, Menu, Heart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Header() {
  const [cartItems, setCartItems] = useState(4)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-pink-500">
            Pich Pisey
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-sm font-medium">
              Home
            </Link>
            <Link href="/products" className="nav-link text-sm font-medium">
              Product
            </Link>
            <Link href="/collections" className="nav-link text-sm font-medium">
              Order
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative w-64">
            <Input type="search" placeholder="Search products..." className="search-input pr-10 rounded-full" />
            <Button
              type="submit"
              size="icon"
              variant="ghost"
              className="absolute right-0 top-0 h-full text-gray-400 hover:text-pink-500"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-500 hover:bg-pink-50">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-pink-500 hover:bg-pink-50">
              <User className="h-5 w-5" />
            </Button>

            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-700 hover:text-pink-500 hover:bg-pink-50"
              >
                <ShoppingBag className="h-5 w-5" />
                {cartItems > 0 && (
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white"
                  >
                    {cartItems}
                  </Badge>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative text-gray-700 hover:text-pink-500">
              <ShoppingBag className="h-5 w-5" />
              {cartItems > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center rounded-full bg-pink-500 text-xs font-bold text-white"
                >
                  {cartItems}
                </Badge>
              )}
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isMobile ? "bottom" : "right"} className={isMobile ? "h-[80vh] rounded-t-3xl" : ""}>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-pink-500">Pich Pisey</h2>
                </div>

                <div className="relative mb-6">
                  <Input type="search" placeholder="Search products..." className="search-input pr-10 rounded-full" />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-0 top-0 h-full text-gray-400 hover:text-pink-500"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>

                <nav className="flex flex-col space-y-6">
                  <Link
                    href="/"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <Home className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <Package className="h-5 w-5" />
                    Shop
                  </Link>
                  <Link
                    href="/collections"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <Package className="h-5 w-5" />
                    Collections
                  </Link>
                  <Link
                    href="/wishlist"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </Link>
                  <Link
                    href="/account"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <User className="h-5 w-5" />
                    Account
                  </Link>
                  <Link
                    href="/orders"
                    className="flex items-center gap-3 text-lg font-medium text-gray-700 hover:text-pink-500"
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Orders
                  </Link>
                </nav>

                <div className="mt-auto pt-6 border-t">
                  <Button className="w-full bg-pink-500 hover:bg-pink-600">Sign In</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
