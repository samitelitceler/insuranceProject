import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AutoInsuranceForm from './AutoInsuranceForm';
import HomeInsuranceForm from './HomeInsuranceForm';

interface AutoInsuranceFormValues {
  drivers: {
    dlNumber: string;
    dob: string;
    industry: string;
    occupation: string;
    education: string;
    cell: string;
    email: string;
  }[];
  aaaMembership: 'yes' | 'no';
  vehicleOwnership: 'own' | 'lease';
  priorCarrierYears: number;
  continuousCoverageYears: number;
  hasClaims: 'yes' | 'no';
  hasInsured: 'yes' | 'no';
  claimDetails?: {
    incidentDate: string;
    causeOfLoss: string;
    claimAmount: number;
    atFault: 'yes' | 'no';
    comments?: string;
  };
  wantTelematics: 'yes' | 'no';
  annualMileage: number;
  documents?: FileList;
}

interface HomeInsuranceFormValues {
  maritalStatus: 'single' | 'married' | 'divorced' | 'separated' | 'widowed' | 'domestic';
  applicant: {
    dob: string;
    workIndustry: string;
    occupation: string;
    education: string;
    cell: string;
  };
  spouse?: {
    dob: string;
    workIndustry: string;
    occupation: string;
    education: string;
    cell: string;
  };
  address: string;
  yearsAtResidence: number;
  previousAddress?: string;
  yearsAtPreviousAddress?: number;
  yearBuilt: number;
  purchaseDate: string;
  squareFootage: number;
  numberOfStories: number;
  withinCityLimits: 'yes' | 'no';
  distanceToHydrant: number;
  residenceType: 'primary' | 'secondary' | 'investment';
  numberOfFamilies: number;
  numberOfOccupants: number;
  fullBaths: number;
  halfBaths: number;
  foundationType: string;
  hasAlternateHeat: 'yes' | 'no';
  secondaryHeatingType?: string;
  hasCircuitBreaker: 'yes' | 'no';
  conductsBusiness: 'yes' | 'no';
  businessName?: string;
  businessClass?: string;
  mortgagee: 'first' | 'second' | 'third';
  hasPool: 'yes' | 'no';
  hasTrampoline: 'yes' | 'no';
  hasSmokeDetectors: 'yes' | 'no';
  hasFireExtinguisher: 'yes' | 'no';
  hasFireSprinkler: 'yes' | 'no';
  hasBurglarAlarm: 'yes' | 'no';
  hasDeadbolt: 'yes' | 'no';
  isGatedCommunity: 'yes' | 'no';
  priorCarrierYears: number;
  continuousCoverageYears: number;
  smokeProtection: 'central' | 'local' | 'direct';
  tempProtection: 'central' | 'local' | 'direct';
  burgProtection: 'central' | 'local' | 'direct';
  fireplaceType: 'masonry' | 'prefab';
  smartHomeMonitoring: 'participating' | 'none';
  roofUpdated: 'yes' | 'no';
  roofUpdateYear?: string;
  plumbingUpdated: 'yes' | 'no';
  plumbingUpdateYear?: string;
  electricalUpdated: 'yes' | 'no';
  electricalUpdateYear?: string;
  heatingUpdated: 'yes' | 'no';
  heatingUpdateYear?: string;
  insuranceCancelled: 'yes' | 'no';
  declarationPage?: FileList;
}

export interface FormData extends AutoInsuranceFormValues, HomeInsuranceFormValues {
  firstName: string;
  lastName: string;
  cell: string;
  email: string;
  dob: string;
  gender: 'male' | 'female' | 'other';
  insuranceType: 'auto' | 'home' | 'both';
}

const QuoteForm = () => {
  const [numberOfDrivers, setNumberOfDrivers] = useState<number>(1);
  const [submissionStatus, setSubmissionStatus] = useState<string>("");
  const { register, handleSubmit, watch, reset } = useForm<FormData>();
  
  // Watch the insurance type value to conditionally render forms
  const selectedInsuranceType = watch('insuranceType');

  const onSubmit = async (data: FormData) => {
    setSubmissionStatus("");
    
    try {
      // Create a FormData object
      const formData = new FormData();
      
      // Add all non-file fields
      Object.keys(data).forEach(key => {
        if (key !== 'declarationPage' && key !== 'documents') {
          formData.append(key, String(data[key as keyof typeof data]));
        }
      });
      
      // Add file fields
      if (data.declarationPage?.[0]) {
        formData.append('declarationPage', data.declarationPage[0]);
      }
      if (data.documents?.[0]) {
        formData.append('documents', data.documents[0]);
      }

      const response = await fetch("https://formspree.io/f/xgvaezgl", {
        method: "POST",
        // Remove the Content-Type header to let the browser set it with the boundary
        body: formData,
      });

      if (response.ok) {
        setSubmissionStatus("Thank you! Your quote request has been received. We'll get back to you soon.");
        reset();
        setNumberOfDrivers(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmissionStatus("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.log(error);
      setSubmissionStatus("There was an error submitting your form. Please check your internet connection and try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-[#11193B] mb-6">Get Your Insurance Quote</h2>
      
      {/* Submission Status Message */}
      {submissionStatus && (
        <div className={`mb-6 p-4 rounded-lg ${
          submissionStatus.includes("Thank you") 
            ? "bg-green-50 text-green-800" 
            : "bg-red-50 text-red-800"
        }`}>
          {submissionStatus}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register('firstName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('lastName')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cell Phone</label>
            <input
              type="tel"
              {...register('cell')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input
              type="date"
              {...register('dob')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              {...register('gender')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Insurance Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Insurance Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="auto"
                {...register('insuranceType', { 
                  required: "Please select an insurance type" 
                })}
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Auto</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="home"
                {...register('insuranceType', { 
                  required: "Please select an insurance type" 
                })}
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Home</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="both"
                {...register('insuranceType', { 
                  required: "Please select an insurance type" 
                })}
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Both (Auto & Home)</span>
            </label>
          </div>
        </div>

        {/* Conditional Rendering based on Insurance Type */}
        {(selectedInsuranceType === 'auto' || selectedInsuranceType === 'both') && (
          <AutoInsuranceForm 
            numberOfDrivers={numberOfDrivers} 
            setNumberOfDrivers={setNumberOfDrivers}
            register={register}
            watch={watch}
          />
        )}

        {(selectedInsuranceType === 'home' || selectedInsuranceType === 'both') && (
          <HomeInsuranceForm 
            register={register}
            watch={watch}
          />
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#11193B] text-white px-6 py-3 rounded-lg hover:bg-[#536AAE] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!!submissionStatus.includes("Thank you")}
        >
          Get Quote
        </button>
      </form>
    </div>
  );
}; 

export default QuoteForm; 