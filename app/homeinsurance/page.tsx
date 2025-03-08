"use client";

import HeroSection from "@/components/nav-section/nav";
import Image from "next/image";
import autoInsuranceImage from "@/public/images/autoInsuranceImage.png";
import { Button } from "@/components/ui/button";

export default function HomeInsurance() {
  return (
    <div>
      <HeroSection />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
              Home Insurance
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Protect Your Greatest Investment With Anchor Insurance Agency...
            </p>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              What&apos;s Included in a Home Insurance Policy?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li>Guaranteed replacement</li>
              <li>Back-up drain and sewer</li>
              <li>Mechanical breakdown</li>
              <li>Service line</li>
              <li>Personal liability</li>
              <li>In-home business </li>
              <li> Mysterious disappearance</li>
              <li> Worldwide liability</li>
              <li> Identity theft</li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Why Choose Anchor Insurance Agency?
            </h2>
            <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
              <li className="font-semibold">
                Insurance policies to fit your needs:
                <span className="font-normal"> There isn&apos;t a one-size-fits-all option for insurance. We custom build policies
                to fit your needs for high-quality protection for your home.</span>
              </li>
              <li className="font-semibold">
                A helping hand when you need it most:
                <span className="font-normal"> Do you need help filing a claim? Struggling to understand your policy? We&apos;re here to
                support you. All you have to do is call and we&apos;ll answer.</span>
              </li>
              <li className="font-semibold">
                Expert guidance:
                <span className="font-normal"> Already have a home insurance policy? We&apos;ll
                look it over to ensure you have the coverage you need for
                protection. And if it&apos;s a solid policy, we&apos;ll tell you so.</span>
              </li>
            </ul>

            <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
              Start Protecting Your Home Today. Get Your Free Quote!
            </h2>
            <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
              Your home is truly your greatest investment. A customized home
              insurance policy can help you protect it. Ready to get started? Get
              your free quote today. Or, for answers to all of your policy
              questions, give our team a call at 763-473-4090.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex flex-col items-center gap-4 sm:gap-6 order-1 lg:order-2">
            <Image
              src={autoInsuranceImage.src}
              alt="Car Insurance"
              width={400}
              height={300}
              className="rounded-md w-full max-w-md object-cover"
            />
            <Button
              onClick={() => window.open("https://www.agentinsure.com/compare/auto-insurance-home-insurance/primei/quote.aspx", "_blank")}
              className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg"
            >
              Get Home Insurance Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
