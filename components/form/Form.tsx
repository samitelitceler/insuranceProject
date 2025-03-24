import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Form() {
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSmsConsentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSmsConsent(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("");

    const response = await fetch("https://formspree.io/f/xgvaezgl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, smsConsent }),
    });

    if (response.ok) {
      setSubmissionStatus("Thank You! Your submission has been received.");
      setFormData({ firstName: "", lastName: "", email: "", phone: "", comments: "" });
      setSmsConsent(false);
    } else {
      setSubmissionStatus("There was an error submitting your form. Please try again.");
    }
  };

  return (
    <div id="form" className="p-4 md:p-8 max-w-5xl mx-auto font-sans">
      <h2 className="text-xl md:text-4xl text-[#11193B] font-bold text-center mb-6">
        Get a Quote
      </h2>

      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                  
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  />
                  
                  <textarea
                    name="comments"
                    placeholder="Comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    className="p-3 rounded-md border border-gray-300 w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-400"
                    required
                  ></textarea>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="smsConsent"
                      checked={smsConsent}
                      onChange={handleSmsConsentChange}
                      className="mr-2"
                      required
                    />
                    <label htmlFor="smsConsent"  className="text-sm font-sans">
                      By checking this box, I consent to receive SMS from Prime Insurance Services. I may receive messages in regards to appointment reminders, billing inquiries, follow-up messages, and promotional offers. Reply STOP to opt-out; For assistance Reply HELP; Message and data rates may apply; Messaging frequency may vary. Visit our <a href="/privacyandpolicy" className="text-blue-500 underline">Privacy Policy</a> and <a href="/termsandconditions" className="text-blue-500 underline">Terms and Conditions</a>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#11193B] hover:bg-[#536AAE] text-white px-6 py-3 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
          </form>

          {submissionStatus && (
                <div className="mt-4 text-green-600 font-semibold">
                  {submissionStatus}
                </div>
              )}
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/2 bg-[#f8f8f8] p-6 md:p-10">
          <h3 className="text-2xl font-bold text-[#11193B] mb-6">Prime Insurance Services</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-[#11193B] mt-1" />
              <p className="text-[#11193B] text-lg">
                3440 Toringdon Way, Suite 205<br />
                Office 254, Charlotte NC 28277
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#11193B] mt-1" />
              <p className="text-[#11193B] text-lg">980-297-9827</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#11193B] mt-1" />
              <p className="text-[#11193B] text-lg">info@primeinsurancellc.com</p>
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
      {/* <Carriers /> */}
    </div>
  );
}

export default Form;
