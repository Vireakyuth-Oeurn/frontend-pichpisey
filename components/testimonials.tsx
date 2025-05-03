"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  text: string;
  content: string;
  author: string;
  image: string;
  rating: number;
};

export default function TestimonialCarousel() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageLoadError, setImageLoadError] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const API_URL = "http://52.202.236.27:1337/api/testimonials?populate=*";

    const fetchTestimonials = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        const fetched = json.data.map((testimonial: any) => {
          const imageUrl = testimonial.image.url;

          const contentText =
            testimonial.attributes?.content || 
            testimonial.content?.[0]?.children?.[0]?.text || 
            "No content available";

          return {
            id: testimonial.id,
            text: testimonial.attributes?.text || testimonial.text || "No title",
            content: typeof contentText === 'string' ? contentText : "No content available",
            author: testimonial.attributes?.author || testimonial.author || "Anonymous",
            rating: testimonial.attributes?.rating || testimonial.rating || 5,
            image: imageUrl ? `http://52.202.236.27:1337${imageUrl}` : '/default-image.png', 
          };
        });

        console.log("Fetched testimonials:", fetched);
        setTestimonials(fetched);
      } catch (error) {
        console.error("Failed to fetch testimonials", error);
      }
    };

    fetchTestimonials();
  }, []);

  const handleImageError = (id: number) => {
    setImageLoadError(prev => ({
      ...prev,
      [id]: true
    }));
    console.error(`Image load error for testimonial ${id}`);
  };

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setActiveIndex(index);

      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    },
    [isAnimating]
  );

  const goToNextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length;
    goToSlide(nextIndex);
  }, [activeIndex, goToSlide, testimonials.length]);

  const goToPrevSlide = useCallback(() => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    goToSlide(prevIndex);
  }, [activeIndex, goToSlide, testimonials.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  if (testimonials.length === 0) {
    return (
      <div className="w-full py-12 bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center h-96">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-64 h-8 bg-gray-200 rounded-full mb-4"></div>
          <div className="w-48 h-6 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">What Our Clients Say</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative ring-1 ring-pink-100">
          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                width: `${testimonials.length * 100}%`,
                transform: `translateX(-${activeIndex * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  {/* Left Side */}
                  <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-100 to-purple-100 p-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                      <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-pink-300"></div>
                      <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-purple-300"></div>
                    </div>
                    <div className="relative aspect-square max-w-xs mx-auto mt-8">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white/50 backdrop-blur-sm shadow-inner"></div>
                      </div>
                      <div className="relative z-10 flex items-center justify-center h-full">
                        {imageLoadError[testimonial.id] ? (
                          <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                            Image not available
                          </div>
                        ) : (
                          // Important: Next.js configuration required for external images
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={200}
                            height={200}
                            onError={() => handleImageError(testimonial.id)}
                            className="object-cover rounded-full border-4 border-white shadow-lg"
                            unoptimized // Add this to bypass Next.js image optimization for external URLs
                          />
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-8 text-xs font-bold tracking-widest text-pink-500 opacity-50 uppercase">
                      Testimonial
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
                    <Quote className="h-12 w-12 text-pink-200 absolute top-8 right-8" strokeWidth={1} />
                    <div className="mb-2">{renderRatingStars(testimonial.rating)}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                      {testimonial.text}
                    </h3>
                    <p className="text-gray-600 mb-8 italic">{testimonial.content}</p>
                    <div className="flex items-center">
                      <div className="h-10 w-1 bg-pink-500 mr-4"></div>
                      <div>
                        <div className="font-bold text-gray-800">{testimonial.author}</div>
                        <div className="text-sm text-gray-500">Satisfied Customer</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-pink-50 transition-all duration-300 z-10 group"
          >
            <ChevronLeft className="text-pink-500 group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-pink-50 transition-all duration-300 z-10 group"
          >
            <ChevronRight className="text-pink-500 group-hover:scale-110 transition-transform" />
          </button>

          {/* Dots */}
          <div className="flex justify-center py-4 space-x-2 absolute bottom-0 left-0 right-0">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={cn(
                  "rounded-full transition-all duration-300",
                  activeIndex === i 
                    ? "bg-pink-500 w-8 h-2" 
                    : "bg-pink-200 w-2 h-2 hover:bg-pink-300"
                )}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}