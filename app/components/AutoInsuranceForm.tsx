import { UseFormRegister, UseFormWatch, FieldErrors } from "react-hook-form";
import { FormData } from './QuoteForm';  // Add this import

interface AutoInsuranceFormProps {
    numberOfDrivers: number;
    setNumberOfDrivers: (number: number) => void;
    register: UseFormRegister<FormData>;
    watch: UseFormWatch<FormData>;
    errors: FieldErrors<FormData>;
    isSubmitted: boolean;
}

const AutoInsuranceForm = ({ numberOfDrivers, setNumberOfDrivers, register, errors, isSubmitted }: AutoInsuranceFormProps) => {
  const getErrorClass = (field: keyof FormData): string => {
    const error = errors[field];
    if (error && isSubmitted) {
      return 'border-red-500 text-red-500';
    }
    return 'border-black text-gray-700';
  };

  const getRadioErrorClass = (field: keyof FormData): string => {
    const error = errors[field];
    if (error && isSubmitted) {
      return 'text-red-500 border-red-500';
    }
    return '';
  };

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

  return (
    <div className="space-y-6 border-t pt-6">
      <h3 className="text-xl font-semibold text-[#11193B]">Auto Insurance Details</h3>
      
      {/* Number of Drivers Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Number of Drivers<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            {...register('numberOfDrivers', { required: "Selecting no of drivers is required" })}
            onChange={(e) => setNumberOfDrivers(parseInt(e.target.value))}
            className={`w-full px-3 py-2 border ${getErrorClass('numberOfDrivers')} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
          {errors.numberOfDrivers && <span className="text-red-500 text-xs">{errors.numberOfDrivers.message}</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vehicle Ownership<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            {...register('vehicleOwnership', { required: "Vehicle ownership is required" })}
            className={`w-full px-3 py-2 border ${getErrorClass('vehicleOwnership')} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
          >
            <option value="">Select Type</option>
            <option value="own">Own</option>
            <option value="lease">Lease</option>
          </select>
          {errors.vehicleOwnership && <span className="text-red-500 text-xs">{errors.vehicleOwnership.message}</span>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years with Prior Carrier
            </label>
            <input
              type="number"
              min="0"
              {...register('priorCarrierYears')}
              className={`w-full px-3 py-2 border ${getErrorClass('priorCarrierYears')} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years with Continuous Coverage
            </label>
            <input
              type="number"
              min="0"
              {...register('continuousCoverageYears')}
              className={`w-full px-3 py-2 border ${getErrorClass('continuousCoverageYears')} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
            />
          </div>
        </div>

      {/* Driver Details */}
      {Array.from({ length: numberOfDrivers }).map((_, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-4">
          <h4 className="font-semibold text-lg text-[#11193B] mb-4">Driver {index + 1} Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Driver&apos;s License Number<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                {...register(`drivers.${index}.licenseNumber`, { required: `Driver ${index + 1} License Number is required` })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.licenseNumber ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              />
              {errors.drivers?.[index]?.licenseNumber && <span className="text-red-500 text-xs">{errors.drivers[index].licenseNumber.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="date"
                {...register(`drivers.${index}.dateOfBirth`, { 
                  required: `Driver ${index + 1} Date of Birth is required`,
                  validate: validateDateOfBirth
                })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.dateOfBirth ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              />
              {errors.drivers?.[index]?.dateOfBirth && <span className="text-red-500 text-xs">{errors.drivers[index].dateOfBirth.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Working Industry<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                {...register(`drivers.${index}.workingIndustry`, { required: `Driver ${index + 1} Working Industry is required` })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.workingIndustry ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              >
                <option value="">Select Industry</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Construction">Construction</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Transportation">Transportation</option>
                <option value="Other">Other</option>
              </select>
              {errors.drivers?.[index]?.workingIndustry && <span className="text-red-500 text-xs">{errors.drivers[index].workingIndustry.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Occupation<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                {...register(`drivers.${index}.occupation`, { required: `Driver ${index + 1} Occupation is required` })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.occupation ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              >
                <option value="">Select Occupation</option>
                <option value="Accountant">Accountant</option>
                <option value="Architect">Architect</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Engineer">Engineer</option>
                <option value="Healthcare Professional">Healthcare Professional</option>
                <option value="IT Professional">IT Professional</option>
                <option value="Manager">Manager</option>
                <option value="Sales Representative">Sales Representative</option>
                <option value="Teacher">Teacher</option>
                <option value="Other">Other</option>
              </select>
              {errors.drivers?.[index]?.occupation && <span className="text-red-500 text-xs">{errors.drivers[index].occupation.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                {...register(`drivers.${index}.education`, { required: `Driver ${index + 1} Education is required` })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.education ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              >
                <option value="">Select Education</option>
                <option value="High School">High School</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor Degree">Bachelor Degree</option>
                <option value="Master Degree">Master Degree</option>
                <option value="Doctorate">Doctorate</option>
                <option value="Professional Certification">Professional Certification</option>
                <option value="Other">Other</option>
              </select>
              {errors.drivers?.[index]?.education && <span className="text-red-500 text-xs">{errors.drivers[index].education.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cell Number<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="tel"
                {...register(`drivers.${index}.cellNumber`, { 
                  required: `Driver ${index + 1} Cell Number is required`,
                  minLength: {
                    value: 10,
                    message: "Valid cell number is required"
                  }
                })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.cellNumber ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              />
              {errors.drivers?.[index]?.cellNumber && <span className="text-red-500 text-xs">{errors.drivers[index].cellNumber.message}</span>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email<span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                {...register(`drivers.${index}.email`, { required: `Driver ${index + 1} Email is required` })}
                className={`w-full px-3 py-2 border ${errors.drivers?.[index]?.email ? 'border-red-500' : 'border-black'} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
              />
              {errors.drivers?.[index]?.email && <span className="text-red-500 text-xs">{errors.drivers[index].email.message}</span>}
            </div>
          </div>
        </div>
      ))}

      {/* Additional Auto Insurance Fields */}
      <div className="space-y-6">
        {/* AAA and AARP Membership */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AAA Membership<span className="text-red-500 ml-1">*</span>
            </label>
            <div className={`flex space-x-4 ${getRadioErrorClass('aaaMembership')}`}>
              <label className={`inline-flex items-center ${errors.aaaMembership && isSubmitted ? 'text-red-500' : ''}`}>
                <input
                  type="radio"
                  {...register('aaaMembership', { required: "AAA membership is required" })}
                  value="yes"
                  className={`form-radio h-4 w-4 ${getErrorClass('aaaMembership')}`}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className={`inline-flex items-center ${errors.aaaMembership && isSubmitted ? 'text-red-500' : ''}`}>
                <input
                  type="radio"
                  {...register('aaaMembership', { required: "AAA membership is required" })}
                  value="no"
                  className={`form-radio h-4 w-4 ${getErrorClass('aaaMembership')}`}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.aaaMembership && isSubmitted && (
              <span className="text-red-500 text-xs">Please select AAA membership status</span>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              AARP Membership<span className="text-red-500 ml-1">*</span>
            </label>
            <div className={`flex space-x-4 ${getRadioErrorClass('aarMembership')}`}>
              <label className={`inline-flex items-center ${errors.aarMembership && isSubmitted ? 'text-red-500' : ''}`}>
                <input
                  type="radio"
                  {...register('aarMembership', { required: "AARP membership is required" })}
                  value="yes"
                  className={`form-radio h-4 w-4 ${getErrorClass('aarMembership')}`}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className={`inline-flex items-center ${errors.aarMembership && isSubmitted ? 'text-red-500' : ''}`}>
                <input
                  type="radio"
                  {...register('aarMembership', { required: "AAR membership is required" })}
                  value="no"
                  className={`form-radio h-4 w-4 ${getErrorClass('aarMembership')}`}
                />
                <span className="ml-2">No</span>
              </label>
            </div>
            {errors.aarMembership && isSubmitted && (
              <span className="text-red-500 text-xs">Please select AARP membership status</span>
            )}
          </div>
        </div>

  

        {/* Claims History - simplified */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you have any claims in last 4 Years?<span className="text-red-500 ml-1">*</span>
          </label>
          <div className={`flex space-x-4 ${getRadioErrorClass('hasClaims')}`}>
            <label className={`inline-flex items-center ${errors.hasClaims && isSubmitted ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                {...register('hasClaims', { required: "Claims information is required" })}
                value="yes"
                className={`form-radio h-4 w-4 ${getErrorClass('hasClaims')}`}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className={`inline-flex items-center ${errors.hasClaims && isSubmitted ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                {...register('hasClaims', { required: "Claims information is required" })}
                value="no"
                className={`form-radio h-4 w-4 ${getErrorClass('hasClaims')}`}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.hasClaims && isSubmitted && (
            <span className="text-red-500 text-xs">Please select if you have any claims in the last 4 years</span>
          )}
        </div>

        {/* Telematics Option */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Do you want us to put Driver telematics/smart ride/right track discount?<span className="text-red-500 ml-1">*</span>
            <span className="text-xs text-gray-500 block mt-1">
              Learn more about <a href="https://www.travelers.com/car-insurance/intellidrive-programs" target="_blank" rel="noopener noreferrer" className="text-[#536AAE] hover:underline">telematics programs</a>
            </span>
          </label>
          <div className={`flex space-x-4 mt-2 ${getRadioErrorClass('wantTelematics')}`}>
            <label className={`inline-flex items-center ${errors.wantTelematics && isSubmitted ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                {...register('wantTelematics', { required: "Telematics choice is required" })}
                value="yes"
                className={`form-radio h-4 w-4 ${getErrorClass('wantTelematics')}`}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className={`inline-flex items-center ${errors.wantTelematics && isSubmitted ? 'text-red-500' : ''}`}>
              <input
                type="radio"
                {...register('wantTelematics', { required: "Telematics choice is required" })}
                value="no"
                className={`form-radio h-4 w-4 ${getErrorClass('wantTelematics')}`}
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          {errors.wantTelematics && isSubmitted && (
            <span className="text-red-500 text-xs">Please select if you want telematics discount</span>
          )}
        </div>

        {/* Annual Mileage */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How many miles will the vehicle drive per year?<span className="text-red-500 ml-1">*</span>
          </label>
          <input
            type="number"
            min="0"
            max="999999"
            {...register('annualMileage', { 
              required: "Annual mileage is required",
              max: { value: 999999, message: "Please enter a valid mileage (max 999,999)" }
            })}
            className={`w-full px-3 py-2 border ${getErrorClass('annualMileage')} rounded-md shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]`}
          />
          {errors.annualMileage && <span className="text-red-500 text-xs">{errors.annualMileage.message}</span>}
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Upload Declaration Page and Driver Licenses
            <span className="text-xs text-gray-500 block mt-1">
              Upload your current declaration page and copies of all driver licenses to speed up the process
            </span>
          </label>
          <input
            type="file"
            multiple
            accept=".pdf,.jpg,.jpeg,.png"
            {...register('documents')}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-[#11193B] file:text-white
              hover:file:bg-[#536AAE]
              cursor-pointer
            "
          />
        </div>
      </div>
    </div>
  );
};

export default AutoInsuranceForm; 