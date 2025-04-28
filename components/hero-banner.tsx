import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export default function HeroBanner() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden rounded-3xl bg-pink-50 shadow-inner">
      
      {/* Background Image */}
      <Image
        src="cover.png" // Your actual image
        alt="Beauty Cover"
        fill
        className="object-cover object-center brightness-95"
      />
      
      {/* Light pink overlay */}
      <div className="absolute inset-0 bg-pink-100/40 "></div>

      {/* Decorative Stars */}
      <Star className="absolute top-10 left-10 h-16 w-16 text-pink-200 opacity-20" fill="currentColor" />
      <Star className="absolute bottom-10 right-10 h-24 w-24 text-pink-200 opacity-20" fill="currentColor" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
  
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-5 font-semibold shadow-lg">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-pink-400 text-pink-500 hover:bg-pink-100 rounded-full px-8 py-5 font-semibold"
          >
            View Collections
          </Button>
        </div>
      </div>
    </section>
  );
}
