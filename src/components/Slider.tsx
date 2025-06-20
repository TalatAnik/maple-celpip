import React, { useState, useEffect } from 'react'

interface SliderProps {
  images: {
    src: string
    title: string
    description: string
    cta: string
  }[]
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Automatic sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [images.length])

  const handleDotClick = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-[70vh] flex-shrink-0"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top center', // Focus on faces
            }}
          >
            {/* Dark Overlay */}
            <div
              className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 md:px-12"
              style={{ backgroundColor: 'rgba(149, 109, 81, 0.4)' }} // Brighter overlay with primary color
            >
              <div className="max-w-screen-lg w-full mx-auto">
                <div className="max-w-lg w-full md:pl-0">
                  <h1
                    className="text-4xl md:text-6xl font-bold mb-4"
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
                  >
                    {image.title}
                  </h1>
                  <p
                    className="text-base md:text-xl mb-6"
                    style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
                  >
                    {image.description}
                  </p>
                  <div className="flex gap-4 justify-start">
                    <button className="btn-primary">{image.cta}</button>
                    <button className="btn-secondary">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Slider