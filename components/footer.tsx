import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-pink-500 mb-6">Pich Pisey</h3>
            <p className="text-gray-600 mb-6">
              Your destination for premium beauty products that enhance your natural beauty.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">Shop</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-pink-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/category/skincare" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Skincare
                </Link>
              </li>
              <li>
                <Link href="/category/makeup" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Makeup
                </Link>
              </li>
              <li>
                <Link href="/category/haircare" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Hair Care
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="text-gray-600 hover:text-pink-500 transition-colors">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-pink-500 mr-3 mt-0.5" />
                <span className="text-gray-600">123 Beauty Street, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-600">+855 12 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-pink-500 mr-3" />
                <span className="text-gray-600">info@pichpisey.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Pich Pisey. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-500 text-sm hover:text-pink-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-500 text-sm hover:text-pink-500 transition-colors">
                Terms of Service
              </Link>
              <Link href="/shipping-policy" className="text-gray-500 text-sm hover:text-pink-500 transition-colors">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
