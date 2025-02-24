"use client"
import NavSection from "@/components/nav-section/nav";
import {
  Car,
  Umbrella,
  House,
  Bike,
  Briefcase,
  Sailboat,
  User,
  ShieldCheck,
  Building2,
  Truck,
  Mail,
} from "lucide-react";

const AppointmentsPage = () => {


  const insuranceOptions = [
    { name: "Auto Insurance", icon: <Car />, path: "autoinsurance" },
    { name: "Home Insurance", icon: <House />, path: "homeinsurance" },
    { name: "Life Insurance", icon: <Umbrella />, path: "lifeInsurance" },
    {
      name: "Commercial Insurance",
      icon: <Briefcase />,
      path: "businessInsurance",
    },
    {
      name: "Motorcycle Insurance",
      icon: <Bike />,
      path: "motorcycleInsurance",
    },
    { name: "Boat Insurance", icon: <Sailboat />, path: "boatInsurance" },
    { name: "Personal Insurance", icon: <User />, path: "personalInsurance" },
    {
      name: "Cyber & EPIL",
      icon: <ShieldCheck />,
      path: "cyberInsurance",
    },
    {
      name: "Umbrella Insurance",
      icon: <Umbrella />,
      path: "umbrellaInsurance",
    },
    {
      name: "Renters Insurance",
      icon: <Building2 />,
      path: "rentersInsurance",
    },
    {
      name: "Transportational Insurance",
      icon: <Truck />,
      path: "transportationalInsurance",
    },
    { name: "Condo Insurance", icon: <Mail />, path: "condoInsurance" },
  ];

  return (
    <>
      <NavSection />

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Insurance Options</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
          {insuranceOptions.map((option) => (
            <li 
              key={option.path} 
              className="flex flex-col items-center space-y-2 text-gray-700 hover:text-red-600 cursor-pointer"
            >
              {option.icon}
              <span className="text-sm font-medium">{option.name}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex justify-center items-center min-h-screen">
        <iframe
          src="https://calendly.com/samit-elitceler/30min"
          className="w-full h-[600px]"
          frameBorder="0"
        ></iframe>
      </div>
    </>
  );
};

export default AppointmentsPage;
