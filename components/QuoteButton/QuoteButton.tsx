"use client"
import React from 'react'
import { Button } from '../ui/button'

function QuoteButton() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <div>
      <div className="absolute inset-0 flex items-center px-4 md:px-8 lg:px-12">
                <div className="container mx-auto px-4 md:px-8 lg:px-12 text-white">
                  <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left font-sans">Get a Quote Instantly</h1>
                  <Button onClick={() => scrollToSection("form")} className="font-sans bg-transparent border border-white hover:bg-[#536AAE] hover:border-[#536AAE] font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
                </div>
              </div>
    </div>
  )
}

export default QuoteButton
