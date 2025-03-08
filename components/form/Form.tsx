import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Form() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto font-sans">
      <h2 className="text-xl md:text-4xl text-gray-800 font-bold text-center mb-6">
        Get a Quote
      </h2>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <form action="https://formspree.io/f/mwpvaqdv" method="POST" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            
            <textarea
              name="comments"
              placeholder="Comments"
              className="p-3 rounded-md border border-gray-300 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 bg-[#f8f8f8] p-6 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Prime Insurance Agency</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-gray-800 mt-1" />
              <p className="text-gray-700 text-lg">
                3440 Toringdon Way, Suite 205<br />
                Office 254, Charlotte NC 28277
              </p>
            </div>
            <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-gray-800 mt-1" />
              <p className="text-gray-700 text-lg">980-297-9827</p>
            </div>
            <div className="flex items-center gap-3">
            <FaEnvelope className="text-gray-800 mt-1" />
              <p className="text-gray-700 text-lg">info@primeinsurancellc.com</p>
            </div>
            <div className="border-4 border-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.536614201292!2d-80.84008732386392!3d35.06206997297264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541ff03c8d47df%3A0x4eaf6b4dfb3018ff!2s3440%20Toringdon%20Way%2C%20Charlotte%2C%20NC%2028277%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                className="w-full h-full "
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
