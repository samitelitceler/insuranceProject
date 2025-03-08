import React from "react";
import NavSection from "@/components/nav-section/nav";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import umbrellaInsure from "@/public/images/umbrellaInsure.jpg";
import QuoteButton from "@/components/QuoteButton/QuoteButton";
const inter = Inter({ weight: ["400", "600", "700"], subsets: ["latin"] });

const BusinessInsurance = () => {
  return (
    <div className={inter.className}>
      <NavSection />
      <div className="w-full">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center bg-black">
          <Image
            src={umbrellaInsure.src}
            alt="Business Insurance"
            layout="fill"
            objectFit="cover"
            className="opacity-70 bg-cover bg-center"
          />
          <QuoteButton />
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
            Umbrella Insurance
          </h2>
          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Gain Extra Coverage for Claims Against You With Umbrella Insurance
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            In rare cases, even quality homeowners&apos; and auto insurance
            policies aren&apos;t enough to protect your finances should a claim
            be filed against you. If you&apos;re found liable for more than your
            current insurance will cover, an umbrella insurance policy can fill
            the gap. Based in Plymouth, Minnesota, Anchor Insurance Agency
            provides umbrella insurance policies to individuals and families
            throughout Minnesota, Wisconsin, Arizona, Florida, Nevada and
            Colorado. Let us help you protect your wellbeing, no matter what
            comes next.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">What Is Umbrella Insurance?</h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Umbrella insurance is a type of liability insurance that works
            alongside your homeowners&apos; or auto insurance. The goal of
            umbrella insurance is to provide additional financial support if
            you&apos;re found liable for an accident or injury. For example, if
            you cause a pile-up on the interstate that results in the severe
            injury of several parties and they sue, the claim may be larger than
            your other policies will cover. Your umbrella policy would then kick
            in to provide the rest. Umbrella insurance doesn&apos;t only cover
            you. It will also cover those closest to you, such as your spouse
            and kids. For example, if your newly 16-year-old teen causes a
            severe accident, your umbrella policy is there if you need it.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>
              Assess Risks: Evaluate the specific risks associated with your
              industry and business activities.
            </li>
            <li>
              Legal Requirements: Check the mandatory insurance requirements in
              your region or industry.
            </li>
            <li>
              Budget Considerations: Balance coverage needs with affordability.
            </li>
            <li>
              Consult an Agent: Seek professional advice to tailor coverage to
              your business needs.
            </li>
          </ul>
        </div>

        {/* Form Section */}
        <div>
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
