import NavSection from "@/components/nav-section/nav";
import React from "react";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Form from "@/components/form/Form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import cyberInsure from '@/public/images/cyberSecurity.jpg';
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
       <div className="absolute inset-0  flex items-center pl-8 lg:pl-16">
          <div className="text-white max-w-lg">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-4 text-left">Get a Quote Instantly</h1>
            <Button className="bg-red-600 font-bold w-72 text-white px-6 py-3 text-lg text-left">Start Quote</Button>
          </div>
        </div>
        </div>
        {/* Information Section */}
        <div className="p-4 md:p-8 text-xs md:text-sm">
        <h2 className="text-xl md:text-2xl text-red-600 font-semibold">Cyber and EPLI Insurance</h2>
          <h2 className="font-semibold mb-2 mt-6">
            Cyber & Employee Practice Liability Insurance
          </h2>
          <p className="mb-4">
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

          <h2 className="font-semibold mb-2">
            Cyber Liability: Protection From Data Breaches
          </h2>
          <p className="mb-4">
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

          <h2 className="font-semibold mb-2">
            EPLI: Protection From Legal Right Violation Claims
          </h2>
          <p className="mb-4">
            Your employees have rights. And one of those rights is to file a
            claim against you should they feel discriminated against, harassed
            or wrongfully terminated. Employee Practice Liability Insurance
            (EPLI) helps you recoup losses associated with a claim such as
            attorney&apos;s fees and fines. Some of the claims covered under an EPLI
            policy include:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Discrimination</li>
            <li>Wrongful termination or discipline</li>
            <li>Sexual harassment</li>
            <li>Breach of Contract</li>
          </ul>

          <h2 className="font-semibold mb-2">
            How to Choose the Right Insurance?
          </h2>
          <ul className="list-disc list-inside mb-4">
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
        <div className="bg-red-700 p-6 md:p-10 text-white mt-12 mb-12">
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessInsurance;
