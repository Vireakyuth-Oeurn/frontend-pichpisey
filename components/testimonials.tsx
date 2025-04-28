"use client"

import { useState, useEffect, useCallback, SetStateAction } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    title: "Absolutely Worth It!",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt officia quae reiciendis architecto. Quibusdam et delectus nesciunt molestiae quis animi molestias recusandae, rerum culpa aliquam sint eaque suscipit ex veritatis!",
    author: "Jessica L.",
    image: "/feedback1.jpg",
  
  },
  {
    id: 2,
    title: "Amazing Results!",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam animi fugiat ad, exercitationem qui possimus nam ea tenetur temporibus alias modi enim nemo sapiente sequi illum earum voluptates pariatur saepe.",
    author: "Sarah J.",
    image: "/feedback2.jpg",
   
  },
  {
    id: 3,
    title: "Life Changing!",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit architecto nemo impedit porro debitis ullam eum, est explicabo cupiditate, tempore molestias incidunt distinctio culpa possimus atque illo deleniti nobis in.",
    author: "Michelle T.",
    image: "/feedback3.jpg",
  
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  
  const goToSlide = useCallback((index: SetStateAction<number>) => {
    if (isAnimating) return
    
    setIsAnimating(true)
    setActiveIndex(index)
    
    setTimeout(() => {
      setIsAnimating(false)
    }, 500) // Match this with the transition duration
  }, [isAnimating])
  
  const goToNextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % testimonials.length
    goToSlide(nextIndex)
  }, [activeIndex, goToSlide])
  
  const goToPrevSlide = useCallback(() => {
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length
    goToSlide(prevIndex)
  }, [activeIndex, goToSlide])
  
  // Auto play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide()
    }, 5000)
    
    return () => clearInterval(interval)
  }, [goToNextSlide])
  
  const renderRatingStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg 
          key={`star-${i}`} 
          className={`w-5 h-5 ${i < fullStars ? "text-yellow-400" : "text-gray-200"}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
    
    return stars
  }
  
  return (
    <section className="w-full py-12 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-full flex-shrink-0 flex flex-col md:flex-row"
              >
                {/* Left side with product image and review */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-pink-100 to-pink-200 p-6 relative">
                  <div className="relative aspect-[1/1.2] max-w-xs mx-auto">
                    <div className="absolute inset-0 bg-pink-200/50 rounded-full opacity-50 animate-pulse-slow" style={{ animationDelay: "0s" }}></div>
                    <div className="absolute inset-0 scale-75 bg-pink-200/50 rounded-full opacity-50 animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute inset-0 scale-50 bg-pink-200/50 rounded-full opacity-50 animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
                    
                    <div className="relative h-full flex items-center justify-center">
                      <Image 
                        src={testimonial.image} 
                        alt={`${testimonial.title} product`}
                        width={200}
                        height={300}
                        className="object-contain z-10"
                      />
                    
                      
                      {/* Brand watermark */}
                      <div className="absolute bottom-4 left-0 text-xs font-bold text-pink-500 opacity-50">
                        PICH PISEY
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right side with testimonial text */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-pink-200 mb-6" />
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    {testimonial.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {testimonial.content}
                  </p>
                  
                  <div className="flex items-center mt-auto">
                  
                    <span className="font-semibold text-gray-700">{testimonial.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            onClick={goToPrevSlide}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-pink-500" />
          </button>
          <button 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-white transition-colors"
            onClick={goToNextSlide}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-pink-500" />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeIndex === index 
                  ? "bg-pink-500 w-6" 
                  : "bg-pink-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      </div>
    </section>
  )
}