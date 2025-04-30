import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

export default function Footer() {
  return (
    <>
      {/* Add Font Awesome Script */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"
        integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    
      <footer className="bg-gradient-to-r text-gray-800 py-12 shadow-lg mb-0 border-t border-pink-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-pink-600 mb-4">PichPiseyShop</h4>
                <p className="text-gray-600 mb-4">We provide high-quality beauty products to boost confidence and elegance.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <i className="fas fa-map-marker-alt text-pink-500"></i>
                  </div>
                  <span className="text-gray-600">Phnom Penh, Cambodia</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <i className="fas fa-envelope text-pink-500"></i>
                  </div>
                  <span className="text-gray-600">contact@pichpiseyshop.com</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                    <i className="fas fa-phone text-pink-500"></i>
                  </div>
                  <span className="text-gray-600">(+855) 89 723 701</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h5 className="text-xl font-bold text-pink-600 mb-5">Quick Links</h5>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-pink-400 mr-2 text-xs"></i>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-pink-400 mr-2 text-xs"></i>
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center">
                    <i className="fas fa-chevron-right text-pink-400 mr-2 text-xs"></i>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-span-1">
              <h5 className="text-xl font-bold text-pink-600 mb-5">Follow Us</h5>
              <p className="text-gray-600 mb-4">Stay updated with our latest offers.</p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/pichpiseycosmetic"
                  className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/pichpisey_skincare/"
                  className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://t.me/Sarahpich_333"
                  className="w-10 h-10 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="Telegram"
                >
                  <i className="fab fa-telegram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@pichpisey.skincare?lang=en"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center text-white transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
              </div>
              
              <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
                <h6 className="text-sm font-semibold text-gray-700 mb-3">Subscribe to our newsletter</h6>
                <form className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500"
                  />
                  <button 
                    type="submit" 
                    className="bg-pink-500 hover:bg-pink-600 text-white px-3 py-2 rounded-r-md transition-colors duration-300"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="col-span-1">
              <h5 className="text-xl font-bold text-pink-600 mb-5">We Accept</h5>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300">
                  <Image
                    src="/visamaster.png"
                    alt="Visa"
                    width={60}
                    height={40}
                    className="object-contain h-8"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300">
                  <Image
                    src="/aba.jpg"
                    alt="ABA Bank"
                    width={60}
                    height={40}
                    className="object-contain h-8"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300">
                  <Image
                    src="/acleda.png"
                    alt="Aceleda Bank"
                    width={60}
                    height={40}
                    className="object-contain h-8"
                  />
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-300">
                  <Image
                    src="/khqr"
                    alt="Mastercard"
                    width={60}
                    height={40}
                    className="object-contain h-8"
                  />
                </div>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-headset text-pink-500 text-2xl mr-3"></i>
                  <div>
                    <h6 className="text-sm font-semibold text-gray-800">Need Help?</h6>
                    <p className="text-pink-600 font-medium">Contact our support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-8 border-pink-100" />

          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                © {new Date().getFullYear()}{' '}
                <Link href="/" className="text-pink-600 font-bold hover:text-pink-700 transition-colors duration-300">
                  PichPiseyShop.com
                </Link>{' '}
                All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm">
                Terms of Use
              </Link>
              <Link href="/cookies" className="text-gray-600 hover:text-pink-600 transition-colors duration-300 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}