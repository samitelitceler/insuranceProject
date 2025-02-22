import Footer from "@/components/footer/Footer";
import NavSection from "@/components/nav-section/nav";
import React from "react";

function ClientCenter() {
  return (
    <>
      <NavSection />
      <div className="bg-gray-100 min-h-screen p-8">
        <div className="container mx-auto">
          {/* Heading */}
          <div className="bg-[#dfdfdf] p-4">
            <h1 className="text-6xl font-bold text-gray-800 text-left">
              Client Center
            </h1>
            <p className="text-left text-gray-600 mt-2">Home » Client Center</p>
          </div>

          {/* Subheading */}
          <h2 className="text-5xl px-4 font-semibold text-gray-800 text-left mt-8">
            Client Center
          </h2>
          <p className="px-5 mt-2"> Please use our customer service center to view your insurance policies, print insurance ID cards, update your contact information, download documents, and more.</p>
        </div>

          <div className='mt-8'>
                <iframe
                    src="https://customerservice.agentinsure.com/EzLynxCustomerService/web/primei/account/login"
                    width="100%"
                    height="600px"
                    className="border rounded-md"
                />
                </div>
      </div>
      <Footer />
    </>
  );
}

export default ClientCenter;
