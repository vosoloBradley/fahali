import { useEffect, useState } from 'react';
import { Button } from '../../components/ui/button';

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      name: 'John Smith',
      title: 'CEO, TechCorp',
      text: "Fahali Building & Civil Engineering delivered our project ahead of schedule and under budget. Their attention to detail and professional approach exceeded our expectations.",
      initial: 'J'
    },
    {
      name: 'Mary Johnson',
      title: 'Project Manager, BuildPro',
      text: "The team at Fahali Building & Civil Engineering demonstrated exceptional expertise and professionalism throughout our project. Their communication was outstanding and they consistently delivered high-quality work.",
      initial: 'M'
    },
    {
      name: 'Robert Brown',
      title: 'Architect, DesignWorks',
      text: "Working with Fahali Building & Civil Engineering was a pleasure. Their technical expertise and commitment to quality ensured our project was completed to the highest standards.",
      initial: 'R'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
        Client Testimonials
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl text-[#FF10F0] mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-600 mb-6">
              {testimonials[currentSlide].text}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold">{testimonials[currentSlide].initial}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{testimonials[currentSlide].name}</h3>
                <p className="text-gray-500">{testimonials[currentSlide].title}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <Button
              variant="ghost"
              onClick={prevSlide}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <Button
              variant="ghost"
              onClick={nextSlide}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <Button
          className="bg-[#FF10F0] hover:bg-[#e000d0] text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Read More Testimonials
        </Button>
      </div>
    </div>
  );
};
