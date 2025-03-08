import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import cyberInsure from '@/public/images/cyberSecurity.jpg';
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
          src={cyberInsure.src}
          alt="Business Insurance"
          layout="fill"
          objectFit="cover"
          className="opacity-70 bg-cover bg-center"
        />
      <QuoteButton/>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-sm md:text-base">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-red-600 font-semibold font-sans">
            Cyber and EPLI Insurance
          </h2>
          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Cyber & Employee Practice Liability Insurance
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Today&apos;s businesses face a wide range of additional threats than
            businesses of the past. For example, businesses must stay up-to-date
            with technology to provide the best experience for their customers.
            Yet, as tech usage increases, so does cybercrime, which can have a
            detrimental impact on your business. Other risks such as claims
            brought against you for wrongful termination or wage violations can
            make running a business tedious. Anchor Insurance Agency can help
            protect you from these challenges with cyber liability coverage and
            Employee Practice Liability Insurance (EPLI).
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            Cyber Liability: Protection From Data Breaches
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Cyberattacks are incredibly expensive. And even with heightened
            protection, cybercriminals learn new tactics each day. Cyber
            liability protection can help your business recover in the event of
            a cyberattack or data breach. Cyber liability coverage can protect
            you from the legal fees associated with lawsuits due to lost
            customer data. It can also support you with the costs of recovering
            compromised data and repairing computer systems. Not sure if cyber
            liability protection is for you? It&apos;s a great and smart choice for
            any business, regardless of industry. After all, cybercriminals
            don&apos;t discriminate.
          </p>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            EPLI: Protection From Legal Right Violation Claims
          </h2>
          <p className="text-[18px] text-[#393939] text-left font-opensans font-medium leading-[30px] mb-5">
            Your employees have rights. And one of those rights is to file a
            claim against you should they feel discriminated against, harassed
            or wrongfully terminated. Employee Practice Liability Insurance
            (EPLI) helps you recoup losses associated with a claim such as
            attorney&apos;s fees and fines. Some of the claims covered under an EPLI
            policy include:
          </p>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Discrimination</li>
            <li>Wrongful termination or discipline</li>
            <li>Sexual harassment</li>
            <li>Breach of Contract</li>
          </ul>

          <h2 className="text-xl mt-8 md:text-2xl font-semibold mb-4 font-sans">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-5 space-y-2 font-opensans text-[18px] text-[#393939] font-medium leading-[30px]">
            <li>Assess Risks: Evaluate the specific risks associated with your
              industry and business activities.</li>
            <li>Legal Requirements: Check the mandatory insurance requirements in
              your region or industry.</li>
            <li>Budget Considerations: Balance coverage needs with affordability.</li>
            <li>Consult an Agent: Seek professional advice to tailor coverage to
              your business needs.</li>
          </ul>
        </div>

        {/* Form Section */}
        <div>
          <Form  />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
