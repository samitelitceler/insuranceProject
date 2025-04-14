import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormData } from './QuoteForm';  // Add this import

interface AutoInsuranceFormProps {
    numberOfDrivers: number;
    setNumberOfDrivers: (number: number) => void;
    register: UseFormRegister<FormData>;
    watch: UseFormWatch<FormData>;
  }

const AutoInsuranceForm = ({ numberOfDrivers, setNumberOfDrivers, register, watch }: AutoInsuranceFormProps) => {
  const hasClaims = watch('hasClaims');

  return (
    <div className="space-y-6 border-t pt-6">
      <h3 className="text-xl font-semibold text-[#11193B]">Auto Insurance Details</h3>
      
      {/* Number of Drivers Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Number of Drivers</label>
        <select
          onChange={(e) => setNumberOfDrivers(parseInt(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </div>

      {/* Driver Details */}
      {Array.from({ length: numberOfDrivers }).map((_, index) => (
        <div key={index} className="border p-4 rounded-lg space-y-4">
          <h4 className="font-semibold text-lg text-[#11193B] mb-4">Driver {index + 1} Details</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Driver&apos;s License Number</label>
              <input
                type="text"
                {...register(`drivers.${index}.dlNumber`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                {...register(`drivers.${index}.dob`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Working Industry</label>
              <input
                type="text"
                {...register(`drivers.${index}.industry`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Occupation</label>
              <input
                type="text"
                {...register(`drivers.${index}.occupation`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Education</label>
              <input
                type="text"
                {...register(`drivers.${index}.education`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cell Number</label>
              <input
                type="tel"
                {...register(`drivers.${index}.cell`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                {...register(`drivers.${index}.email`, { required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Additional Auto Insurance Fields */}
      <div className="space-y-6">
        {/* AAA Membership */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">AAA Membership</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('aaaMembership', { required: true })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('aaaMembership', { required: true })}
                value="no"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* Vehicle Ownership */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Vehicle Ownership</label>
          <select
            {...register('vehicleOwnership', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          >
            <option value="">Select Ownership Type</option>
            <option value="own">Own</option>
            <option value="lease">Lease</option>
          </select>
        </div>

        {/* Prior Carrier Years */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Years with Prior Carrier</label>
          <input
            type="number"
            min="0"
            {...register('priorCarrierYears', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          />
        </div>

        {/* Continuous Coverage Years */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Years with Continuous Coverage</label>
          <input
            type="number"
            min="0"
            {...register('continuousCoverageYears', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          />
        </div>

        {/* Claims History */}
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">Do you have any claims in last 4 Years?</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasClaims', { required: true })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasClaims', { required: true })}
                value="no"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">No</span>
            </label>
          </div>

          {/* Conditional Claims Details */}
          {hasClaims === 'yes' && (
            <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">Incident Date</label>
                <input
                  type="date"
                  {...register('claimDetails.incidentDate', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cause of Loss</label>
                <input
                  type="text"
                  {...register('claimDetails.causeOfLoss', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Claim Amount</label>
                <input
                  type="number"
                  {...register('claimDetails.claimAmount', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">At Fault?</label>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      {...register('claimDetails.atFault', { required: true })}
                      value="yes"
                      className="form-radio text-[#536AAE]"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      {...register('claimDetails.atFault', { required: true })}
                      value="no"
                      className="form-radio text-[#536AAE]"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Comments/Details</label>
                <textarea
                  {...register('claimDetails.comments')}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Telematics Option */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Do you want us to put Driver telematics/smart ride/right track discount?
            <span className="text-xs text-gray-500 block mt-1">
              Learn more about <a href="https://www.travelers.com/car-insurance/intellidrive-programs" target="_blank" rel="noopener noreferrer" className="text-[#536AAE] hover:underline">telematics programs</a>
            </span>
          </label>
          <div className="flex space-x-4 mt-2">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('wantTelematics', { required: true })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('wantTelematics', { required: true })}
                value="no"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* Annual Mileage */}
        <div>
          <label className="block text-sm font-medium text-gray-700">How many miles will the vehicle drive per year?</label>
          <input
            type="number"
            min="0"
            {...register('annualMileage', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
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