import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import AutoInsuranceForm from './AutoInsuranceForm';
import HomeInsuranceForm from './HomeInsuranceForm';

interface AutoInsuranceFormValues {
  drivers: {
    licenseNumber: string;
    dateOfBirth: string;
    workingIndustry: string;
    occupation: string;
    education: string;
    cellNumber: string;
    email: string;
  }[];
  numberOfDrivers: number;
  aaaMembership: 'yes' | 'no';
  aarMembership: 'yes' | 'no';
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
  maritalStatus: 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'SEPARATED' | 'WIDOWED' | 'DOMESTIC';
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
  fireplaceType: 'MASONRY' | 'PREFAB';
  smartHomeMonitoring: 'PARTICIPATING' | 'NONE_SELECTED';
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
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  insuranceType: 'AUTO' | 'HOME' | 'BOTH';
}

interface ApiError {
  status: number;
  error: string;
  message: string;
  field?: string;
}

const QuoteForm = () => {
  const [numberOfDrivers, setNumberOfDrivers] = useState<number>(1);
  const [submissionStatus, setSubmissionStatus] = useState<string>("");
  const [apiErrors, setApiErrors] = useState<Array<ApiError>>([]);
  const { register, handleSubmit, watch, reset, formState: { errors, isSubmitted } } = useForm<FormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange'
  });

  // Watch the insurance type value to conditionally render forms
  const selectedInsuranceType = watch('insuranceType');

  const validateDateOfBirth = (value: string) => {
    const date = new Date(value);
    const today = new Date();
    const minDate = new Date();
    minDate.setFullYear(today.getFullYear() - 100); // Maximum age of 100 years

    if (date > today) {
      return "Date of birth cannot be in the future";
    }
    if (date < minDate) {
      return "Date of birth cannot be more than 100 years ago";
    }
    return true;
  };

  const onSubmit = async (data: FormData) => {
    setSubmissionStatus("");
    setApiErrors([]);

    try {
      const formData = new FormData();

      // Add basic fields
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);

      if (data.insuranceType === 'AUTO') {
        // Handle auto insurance submission
        const autoFormData = new FormData();

        // Add all the auto insurance specific fields
        autoFormData.append('quote[firstName]', data.firstName);
        autoFormData.append('quote[lastName]', data.lastName);
        autoFormData.append('quote[email]', data.email);
        autoFormData.append('quote[dob]', data.dob);
        autoFormData.append('quote[gender]', data.gender);
        autoFormData.append('quote[cellPhone]', data.cell);
        autoFormData.append('quote[insuranceType]', data.insuranceType);
        autoFormData.append('autoInsurance[numberOfDrivers]', String(data.numberOfDrivers));
        autoFormData.append('autoInsurance[isAAAMember]', data.aaaMembership);
        autoFormData.append('autoInsurance[isAARPMember]', data.aarMembership); // AARP membership
        // autoFormData.append('autoInsurance[hasInsured]', data.hasInsured); 
        autoFormData.append('autoInsurance[vehicleOwnershipType]', data.vehicleOwnership);
        autoFormData.append('autoInsurance[hasClaimsInLast4Years]', data.hasClaims);
        autoFormData.append('autoInsurance[wantsTelematicsDiscount]', data.wantTelematics);
        autoFormData.append('autoInsurance[annualMileage]', String(data.annualMileage));

        // Add optional fields only if they exist
        if (data.priorCarrierYears) {
          autoFormData.append('autoInsurance[yearsWithPriorCarrier]', String(data.priorCarrierYears));
        }
        if (data.continuousCoverageYears) {
          autoFormData.append('autoInsurance[yearsWithContinuousCoverage]', String(data.continuousCoverageYears));
        }

        // Add drivers information
        if (data.drivers) {
          data.drivers.forEach((driver, index) => {
            Object.entries(driver).forEach(([key, value]) => {
              autoFormData.append(`autoInsurance[drivers][${index}][${key}]`, String(value));
            });
          });
        }

        // Handle documents
        if (data.documents) {
          Array.from(data.documents).forEach((file) => {
            autoFormData.append('driverLicenses', file);
          });
        }

        console.log("inside submit");


        // Send to auto insurance endpoint
        const autoResponse = await fetch('https://primeinsuranceserver.elitceler.com/api/v1/auto-insurance-quote', {
          method: 'POST',
          body: autoFormData,
        });

        if (!autoResponse.ok) {
          const errorData = await autoResponse.json();
          if (errorData.status === 409 && errorData.error === "Unique constraint violation") {
            setSubmissionStatus(errorData.message);
          } else {
            setSubmissionStatus(errorData.error || 'Auto insurance quote submission failed');
          }
          return;
        }
        if (autoResponse.ok) {
          setSubmissionStatus("Thank you! Your quote request has been received. We'll get back to you soon.");
          reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      if (data.insuranceType === 'HOME') {
        // Handle home insurance submission
        const homeFormData = new FormData();

        // Add basic quote information
        homeFormData.append('quote[firstName]', data.firstName);
        homeFormData.append('quote[lastName]', data.lastName);
        homeFormData.append('quote[email]', data.email);
        homeFormData.append('quote[cellPhone]', data.cell);
        homeFormData.append('quote[dob]', data.dob);
        homeFormData.append('quote[gender]', data.gender);
        homeFormData.append('quote[insuranceType]', data.insuranceType);

        // Add home insurance specific fields
        homeFormData.append('homeInsurance[maritalStatus]', data.maritalStatus.toUpperCase());

        // Applicant Information
        homeFormData.append('homeInsurance[dateOfBirth]', data.applicant.dob);
        homeFormData.append('homeInsurance[workIndustry]', data.applicant.workIndustry);
        homeFormData.append('homeInsurance[occupation]', data.applicant.occupation);
        homeFormData.append('homeInsurance[education]', data.applicant.education);
        homeFormData.append('homeInsurance[cellNumber]', data.cell.replace(/\D/g, ''));
        homeFormData.append('homeInsurance[yearsWithPriorCarrier]', String(data.priorCarrierYears));
        homeFormData.append('homeInsurance[yearsWithContinuousCoverage]', String(data.continuousCoverageYears));

        // Spouse Information (if exists)
        if (data.spouse) {
          homeFormData.append('homeInsurance[spouseDateOfBirth]', data.spouse.dob);
          homeFormData.append('homeInsurance[spouseWorkIndustry]', data.spouse.workIndustry);
          homeFormData.append('homeInsurance[spouseOccupation]', data.spouse.occupation);
          homeFormData.append('homeInsurance[spouseEducation]', data.spouse.education);
          homeFormData.append('homeInsurance[spouseCellNumber]', data.spouse.cell);
        }

        // Property Information
        homeFormData.append('homeInsurance[address]', data.address);
        homeFormData.append('homeInsurance[yearsAtResidence]', String(data.yearsAtResidence));
        homeFormData.append('homeInsurance[yearBuilt]', String(data.yearBuilt));
        homeFormData.append('homeInsurance[purchaseDate]', data.purchaseDate);
        homeFormData.append('homeInsurance[squareFootage]', String(data.squareFootage));
        homeFormData.append('homeInsurance[numberOfStories]', String(data.numberOfStories));
        homeFormData.append('homeInsurance[withinCityLimits]', data.withinCityLimits === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[distanceToFireHydrant]', String(data.distanceToHydrant));
        homeFormData.append('homeInsurance[residenceType]', data.residenceType);
        homeFormData.append('homeInsurance[numberOfFamilies]', String(data.numberOfFamilies));
        homeFormData.append('homeInsurance[numberOfOccupants]', String(data.numberOfOccupants));
        homeFormData.append('homeInsurance[numberOfFullBaths]', String(data.fullBaths));
        homeFormData.append('homeInsurance[numberOfHalfBaths]', String(data.halfBaths));
        homeFormData.append('homeInsurance[foundationType]', data.foundationType);

        // Safety Features
        homeFormData.append('homeInsurance[hasAlternateHeatSource]', data.hasAlternateHeat === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasElectricCircuitBreaker]', data.hasCircuitBreaker === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasBusiness]', data.conductsBusiness === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[mortgageType]', data.mortgagee);
        homeFormData.append('homeInsurance[hasSwimmingPool]', data.hasPool === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasTrampoline]', data.hasTrampoline === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasSmokeDetectors]', data.hasSmokeDetectors === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasFireExtinguisher]', data.hasFireExtinguisher === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasIndoorSprinkler]', data.hasFireSprinkler === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasBurglarAlarm]', data.hasBurglarAlarm === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[hasDeadbolt]', data.hasDeadbolt === 'yes' ? 'true' : 'false');
        homeFormData.append('homeInsurance[isGatedCommunity]', data.isGatedCommunity === 'yes' ? 'true' : 'false');

        // Protection Systems
        homeFormData.append('homeInsurance[smokeDetectorType]', data.smokeProtection);
        homeFormData.append('homeInsurance[temperatureMonitorType]', data.tempProtection);
        homeFormData.append('homeInsurance[burglarAlarmType]', data.burgProtection);
        homeFormData.append('homeInsurance[fireplaceType]', data.fireplaceType);
        homeFormData.append('homeInsurance[smartHomeMonitoring]', data.smartHomeMonitoring);

        // Updates
        if (data.roofUpdateYear) {
          homeFormData.append('homeInsurance[roofUpdateYear]', data.roofUpdateYear);
        }
        if (data.plumbingUpdateYear) {
          homeFormData.append('homeInsurance[plumbingUpdateYear]', data.plumbingUpdateYear);
        }
        if (data.electricalUpdateYear) {
          homeFormData.append('homeInsurance[electricalUpdateYear]', data.electricalUpdateYear);
        }
        if (data.heatingUpdateYear) {
          homeFormData.append('homeInsurance[heatingUpdateYear]', data.heatingUpdateYear);
        }

        // Insurance History
        homeFormData.append('homeInsurance[hasInsuranceBeenCancelled]', data.insuranceCancelled === 'yes' ? 'true' : 'false');

        // Handle declaration page documents
        if (data.declarationPage) {
          Array.from(data.declarationPage).forEach((file) => {
            homeFormData.append('declarationPages', file);
          });
        }

        // Send to home insurance endpoint
        const homeResponse = await fetch('https://primeinsuranceserver.elitceler.com/api/v1/home-insurance-quote', {
          method: 'POST',
          body: homeFormData,
        });

        if (!homeResponse.ok) {
          const errorData = await homeResponse.json();
          if (errorData.status === 409 && errorData.error === "Unique constraint violation") {
            setSubmissionStatus(errorData.message);
          } else {
            setSubmissionStatus(errorData.error || 'Home insurance quote submission failed');
          }
          return;
        }
        if (homeResponse.ok) {
          setSubmissionStatus("Thank you! Your quote request has been received. We'll get back to you soon.");
          reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        setSubmissionStatus(error.message);
      } else {
        setSubmissionStatus("There was an error submitting your form. Please try again.");
      }
    }

    
    
    
    
    
    if (data.insuranceType === 'BOTH') {
      const bothFormData = new FormData();
      bothFormData.append('quote[firstName]', data.firstName);
      bothFormData.append('quote[lastName]', data.lastName);
      bothFormData.append('quote[email]', data.email);
      bothFormData.append('quote[cellPhone]', data.cell);
      bothFormData.append('quote[dob]', data.dob);
      bothFormData.append('quote[gender]', data.gender);
      bothFormData.append('quote[insuranceType]', data.insuranceType);
  
      // Auto Insurance
      bothFormData.append('autoInsurance[numberOfDrivers]', String(data.numberOfDrivers));
      bothFormData.append('autoInsurance[isAAAMember]', data.aaaMembership);
      bothFormData.append('autoInsurance[isAARPMember]', data.aarMembership); // AARP membership
      // autoFormData.append('autoInsurance[hasInsured]', data.hasInsured); 
      bothFormData.append('autoInsurance[vehicleOwnershipType]', data.vehicleOwnership);
      bothFormData.append('autoInsurance[hasClaimsInLast4Years]', data.hasClaims);
      bothFormData.append('autoInsurance[wantsTelematicsDiscount]', data.wantTelematics);
      bothFormData.append('autoInsurance[annualMileage]', String(data.annualMileage));
  
      // Add drivers information
      if (data.drivers) {
        data.drivers.forEach((driver, index) => {
          Object.entries(driver).forEach(([key, value]) => {
            if (key === 'cellNumber') {
              // Remove non-digits from phone numbers
              const cleanedNumber = String(value).replace(/\D/g, '');
              bothFormData.append(`autoInsurance[drivers][${index}][${key}]`, cleanedNumber);
            } else {
              bothFormData.append(`autoInsurance[drivers][${index}][${key}]`, String(value));
            }
          });
        });
      }
      if (data.documents) {
        Array.from(data.documents).forEach((file) => {
          bothFormData.append('driverLicenses', file);
        });
      }
  
      bothFormData.append('homeInsurance[maritalStatus]', data.maritalStatus.toUpperCase());
  
        // Applicant Information
        bothFormData.append('homeInsurance[dateOfBirth]', data.applicant.dob);
        bothFormData.append('homeInsurance[workIndustry]', data.applicant.workIndustry);
        bothFormData.append('homeInsurance[occupation]', data.applicant.occupation);
        bothFormData.append('homeInsurance[education]', data.applicant.education);
        bothFormData.append('homeInsurance[cellNumber]', data.cell.replace(/\D/g, ''));
  
        // Spouse Information (if exists)
        if (data.spouse) {
          bothFormData.append('homeInsurance[spouseDateOfBirth]', data.spouse.dob);
          bothFormData.append('homeInsurance[spouseWorkIndustry]', data.spouse.workIndustry);
          bothFormData.append('homeInsurance[spouseOccupation]', data.spouse.occupation);
          bothFormData.append('homeInsurance[spouseEducation]', data.spouse.education);
          bothFormData.append('homeInsurance[spouseCellNumber]', data.spouse.cell);
        }
  
        // Property Information
        bothFormData.append('homeInsurance[address]', data.address);
        bothFormData.append('homeInsurance[yearsAtResidence]', String(data.yearsAtResidence));
        bothFormData.append('homeInsurance[yearBuilt]', String(data.yearBuilt));
        bothFormData.append('homeInsurance[purchaseDate]', data.purchaseDate);
        bothFormData.append('homeInsurance[squareFootage]', String(data.squareFootage));
        bothFormData.append('homeInsurance[numberOfStories]', String(data.numberOfStories));
        bothFormData.append('homeInsurance[withinCityLimits]', data.withinCityLimits === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[distanceToFireHydrant]', String(data.distanceToHydrant));
        bothFormData.append('homeInsurance[residenceType]', data.residenceType);
        bothFormData.append('homeInsurance[numberOfFamilies]', String(data.numberOfFamilies));
        bothFormData.append('homeInsurance[numberOfOccupants]', String(data.numberOfOccupants));
        bothFormData.append('homeInsurance[numberOfFullBaths]', String(data.fullBaths));
        bothFormData.append('homeInsurance[numberOfHalfBaths]', String(data.halfBaths));
        bothFormData.append('homeInsurance[foundationType]', data.foundationType);
  
        // Safety Features
        bothFormData.append('homeInsurance[hasAlternateHeatSource]', data.hasAlternateHeat === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasElectricCircuitBreaker]', data.hasCircuitBreaker === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasBusiness]', data.conductsBusiness === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[mortgageType]', data.mortgagee);
        bothFormData.append('homeInsurance[hasSwimmingPool]', data.hasPool === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasTrampoline]', data.hasTrampoline === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasSmokeDetectors]', data.hasSmokeDetectors === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasFireExtinguisher]', data.hasFireExtinguisher === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasIndoorSprinkler]', data.hasFireSprinkler === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasBurglarAlarm]', data.hasBurglarAlarm === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[hasDeadbolt]', data.hasDeadbolt === 'yes' ? 'true' : 'false');
        bothFormData.append('homeInsurance[isGatedCommunity]', data.isGatedCommunity === 'yes' ? 'true' : 'false');
  
        // Protection Systems
        bothFormData.append('homeInsurance[smokeDetectorType]', data.smokeProtection);
        bothFormData.append('homeInsurance[temperatureMonitorType]', data.tempProtection);
        bothFormData.append('homeInsurance[burglarAlarmType]', data.burgProtection);
        bothFormData.append('homeInsurance[fireplaceType]', data.fireplaceType);
        bothFormData.append('homeInsurance[smartHomeMonitoring]', data.smartHomeMonitoring);
  
        // Updates
        if (data.roofUpdateYear) {
          bothFormData.append('homeInsurance[roofUpdateYear]', data.roofUpdateYear);
        }
        if (data.plumbingUpdateYear) {
          bothFormData.append('homeInsurance[plumbingUpdateYear]', data.plumbingUpdateYear);
        }
        if (data.electricalUpdateYear) {
          bothFormData.append('homeInsurance[electricalUpdateYear]', data.electricalUpdateYear);
        }
        if (data.heatingUpdateYear) {
          bothFormData.append('homeInsurance[heatingUpdateYear]', data.heatingUpdateYear);
        }
  
        // Insurance History
        bothFormData.append('homeInsurance[hasInsuranceBeenCancelled]', data.insuranceCancelled === 'yes' ? 'true' : 'false');
  
        // Handle declaration page documents
        if (data.declarationPage) {
          Array.from(data.declarationPage).forEach((file) => {
            bothFormData.append('homeDeclarationPages', file);
          });
        }

        // Add prior carrier and continuous coverage years for home insurance
        bothFormData.append('homeInsurance[yearsWithPriorCarrier]', String(data.priorCarrierYears || 0));
        bothFormData.append('homeInsurance[yearsWithContinuousCoverage]', String(data.continuousCoverageYears || 0));

        // Add the same fields for auto insurance
        bothFormData.append('autoInsurance[yearsWithPriorCarrier]', String(data.priorCarrierYears || 0));
        bothFormData.append('autoInsurance[yearsWithContinuousCoverage]', String(data.continuousCoverageYears || 0));

        const bothResponseData = await fetch('https://primeinsuranceserver.elitceler.com/api/v1/both-insurance-quote', {
          method: 'POST',
          body: bothFormData,
        });
        if (bothResponseData.ok) {
          setSubmissionStatus("Thank you! Your quote request has been received. We'll get back to you soon.");
          reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const errorData = await bothResponseData.json();
          setSubmissionStatus(`Error: ${errorData.error || 'Something went wrong'}`);
        }

  }
  
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Display API Errors */}
      {apiErrors.length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-300">
          <h3 className="font-semibold mb-2">{submissionStatus}</h3>
          <ul className="list-disc pl-5 space-y-1">
            {apiErrors.map((error, index) => (
              <li key={index}>{error.message}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Form Validation Errors */}
      {Object.keys(errors).length > 0 && (
        <div className="mb-6 p-4 rounded-lg bg-red-50 text-red-800 border border-red-300">
          <h3 className="font-semibold mb-2">Please correct the following errors:</h3>
          <ul className="list-disc pl-5 space-y-1">
            {errors.insuranceType && (
              <li>Please select an insurance type (Auto, Home, or Both)</li>
            )}
            {errors.firstName && <li>{errors.firstName.message}</li>}
            {errors.lastName && <li>{errors.lastName.message}</li>}
            {errors.cell && <li>{errors.cell.message}</li>}
            {errors.email && <li>{errors.email.message}</li>}
            {errors.dob && <li>{errors.dob.message}</li>}
            {errors.gender && <li>{errors.gender.message}</li>}
          </ul>
        </div>
      )}

      <h2 className="text-2xl font-bold text-[#11193B] mb-6">Get Your Insurance Quote</h2>

      {/* Submission Status Message */}
      {submissionStatus && !apiErrors.length && (
        <div className={`mb-6 p-4 rounded-lg ${submissionStatus.includes("Thank you")
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
            <label className="block text-sm font-medium text-gray-700 mb-1">
              First Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('firstName', { 
                required: "First name is required",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 characters"
                }
              })}
              className={`w-full px-3 py-2 border ${errors.firstName ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
            {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Name<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('lastName', { 
                required: "Last name is required",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 characters"
                }
              })}
              className={`w-full px-3 py-2 border ${errors.lastName ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
            {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cell Phone<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              {...register('cell', { 
                required: "Cell phone is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number"
                }
              })}
              className={`w-full px-3 py-2 border ${errors.cell ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
            {errors.cell && <span className="text-red-500 text-xs">{errors.cell.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              {...register('email', { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address"
                }
              })}
              className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date of Birth<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              {...register('dob', { 
                required: "Date of Birth is required",
                validate: validateDateOfBirth
              })}
              className={`w-full px-3 py-2 border ${errors.dob ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
            {errors.dob && <span className="text-red-500 text-xs">{errors.dob.message}</span>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender<span className="text-red-500 ml-1">*</span>
            </label>
            <select
              {...register('gender', { required: "Gender is required" })}
              className={`w-full px-3 py-2 border ${errors.gender ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            >
              <option value="">Select Gender</option>
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
              <option value="OTHER">Other</option>
            </select>
            {errors.gender && <span className="text-red-500 text-xs">{errors.gender.message}</span>}
          </div>
        </div>

        {/* Insurance Type Selection */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Insurance Type<span className="text-red-500 ml-1">*</span>
          </label>
          <div className={`flex space-x-4 ${errors.insuranceType ? 'text-red-500' : ''}`}>
            <label className={`inline-flex items-center ${errors.insuranceType ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                value="AUTO"
                {...register('insuranceType', {
                  required: "Please select an insurance type"
                })}
                className={`form-radio h-4 w-4 ${errors.insuranceType ? 'text-red-500' : 'text-[#536AAE]'}`}
              />
              <span className="ml-2">Auto</span>
            </label>
            <label className={`inline-flex items-center ${errors.insuranceType ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                value="HOME"
                {...register('insuranceType', {
                  required: "Please select an insurance type"
                })}
                className={`form-radio h-4 w-4 ${errors.insuranceType ? 'text-red-500' : 'text-[#536AAE]'}`}
              />
              <span className="ml-2">Home</span>
            </label>
            <label className={`inline-flex items-center ${errors.insuranceType ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                value="BOTH"
                {...register('insuranceType', {
                  required: "Please select an insurance type"
                })}
                className={`form-radio h-4 w-4 ${errors.insuranceType ? 'text-red-500' : 'text-[#536AAE]'}`}
              />
              <span className="ml-2">Both (Auto & Home)</span>
            </label>
          </div>
          {errors.insuranceType && (
            <span className="text-red-500 text-xs">{errors.insuranceType.message}</span>
          )}
        </div>

        {/* Conditional Rendering based on Insurance Type */}
        {(selectedInsuranceType === 'AUTO' || selectedInsuranceType === 'BOTH') && (
          <AutoInsuranceForm
            numberOfDrivers={numberOfDrivers}
            setNumberOfDrivers={setNumberOfDrivers}
            register={register}
            watch={watch}
            errors={errors}
            isSubmitted={isSubmitted}
          />
        )}

        {(selectedInsuranceType === 'HOME' || selectedInsuranceType === 'BOTH') && (
          <HomeInsuranceForm
            register={register}
            watch={watch}
            errors={errors}
            isSubmitted={isSubmitted}
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