import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Form() {
  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto">
      <h2 className="text-xl md:text-4xl text-red-600 font-bold text-center mb-6">
        Get a Quote
      </h2>

      {/* Flexbox Layout */}
      <div className="flex flex-col md:flex-row bg-gradient-to-b from-[#D2091D] to-[#880310] text-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <form action="https://formspree.io/f/mwpvaqdv" method="POST" id="form">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="p-2 rounded text-black w-full"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-2 rounded text-black w-full"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded text-black w-full"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="p-2 rounded text-black w-full"
              />
              <textarea
                name="comments"
                placeholder="Comments"
                className="w-full p-2 rounded text-black h-24 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 bg-[#880310] p-6 md:p-10 flex flex-col justify-center items-start space-y-6">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="text-sm opacity-90">
            Need assistance? Get in touch with us via phone, email, or visit our office.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-xl text-white" />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-white" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-xl text-white" />
              <span>3440 Toringdon Way, Suite 205, Charlotte, NC 28277</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
