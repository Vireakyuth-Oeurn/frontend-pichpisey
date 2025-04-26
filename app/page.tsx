import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import PopularProducts from "@/components/popular-products"
import FeaturedCategories from "@/components/featured-categories"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroBanner />
      <FeaturedCategories />
      <PopularProducts />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
