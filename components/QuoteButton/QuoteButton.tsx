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
      <div className="absolute inset-0  flex items-center pl-8 lg:pl-16">
                <div className="text-white max-w-lg">
                  <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left">Get a Quote Instantly</h1>
                  <Button onClick={() => scrollToSection("form")} className="bg-gradient-to-b from-[#D2091D] to-[#880310] hover:bg-red-700 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
                </div>
              </div>
    </div>
  )
}

export default QuoteButton
