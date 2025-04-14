"use client";

import NavSection from "@/components/nav-section/nav";
import Footer from "@/components/footer/Footer";
import QuoteForm from "@/app/components/QuoteForm";

export default function QuotePage() {
  return (
    <div>
      <NavSection />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#11193B] text-center mb-8">
            Get Your Insurance Quote
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Fill out the form below to receive a personalized insurance quote. Our team will review your information and get back to you with the best options for your needs.
          </p>
          <QuoteForm />
        </div>
      </div>
      <Footer />
    </div>
  );
} 