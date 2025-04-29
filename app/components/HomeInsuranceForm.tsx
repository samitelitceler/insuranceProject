import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { FormData } from './QuoteForm';  // Add this import

interface HomeInsuranceFormProps {
    register: UseFormRegister<FormData>;
    watch: UseFormWatch<FormData>;
}
  
const HomeInsuranceForm = ({ register, watch }: HomeInsuranceFormProps) => {
  const maritalStatus = watch('maritalStatus');
  const yearsAtResidence = watch('yearsAtResidence');
  const hasAlternateHeat = watch('hasAlternateHeat');
  const conductsBusiness = watch('conductsBusiness');
  
  // Helper function to check if spouse fields are required
  const isSpouseRequired = maritalStatus === 'MARRIED' || maritalStatus === 'DOMESTIC';
  // Helper function to check if previous address is required
  const isPreviousAddressRequired = yearsAtResidence < 3;
  // Helper function to check if secondary heating is required
  const isSecondaryHeatingRequired = hasAlternateHeat === 'yes';
  // Helper function to check if business name is required
  const isBusinessNameRequired = conductsBusiness === 'yes';

  return (
    <div className="space-y-6 border-t pt-6">
      <h3 className="text-xl font-semibold text-[#11193B]">Home Insurance Details</h3>
      
      {/* Marital Status and Personal Information */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Marital Status<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            {...register('maritalStatus', { required: "Marital status is required" })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          >
            <option value="">Select Status</option>
            <option value="SINGLE">Single</option>
            <option value="MARRIED">Married</option>
            <option value="DIVORCED">Divorced</option>
            <option value="SEPARATED">Separated</option>
            <option value="WIDOWED">Widowed</option>
            <option value="DOMESTIC">Domestic Partner</option>
          </select>
        </div>

        {/* Personal Information Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Details</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                  Applicant/Insured<span className="text-red-500 ml-1">*</span>
                </th>
                {(maritalStatus === 'MARRIED' || maritalStatus === 'DOMESTIC') && (
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">
                    Spouse<span className="text-red-500 ml-1">*</span>
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { label: 'Date of Birth', field: 'dob', type: 'date' },
                { label: 'Work Industry', field: 'workIndustry', type: 'text' },
                { label: 'Occupation', field: 'occupation', type: 'text' },
                { label: 'Education', field: 'education', type: 'text' },
                { label: 'Cell Number', field: 'cell', type: 'tel' }
              ].map((item) => (
                <tr key={item.field}>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.label}<span className="text-red-500 ml-1">*</span>
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type={item.type}
                      {...register(`applicant.${item.field}` as keyof FormData, { required: `${item.label} is required`, minLength: { value: 10, message: "Valid phone number is required" } })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                    />
                  </td>
                  {(maritalStatus === 'MARRIED' || maritalStatus === 'DOMESTIC') && (
                    <td className="px-4 py-3">
                      <input
                        type={item.type}
                        {...register(`spouse.${item.field}` as keyof FormData, { required: isSpouseRequired ? `Spouse ${item.label} is required` : false, minLength: { value: 10, message: "Valid phone number is required" } })}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Property Address and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              {...register('address', { required: "Address is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years at Residence<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              min="0"
              {...register('yearsAtResidence', { required: "Years at residence is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          {isPreviousAddressRequired && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Previous Address<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  {...register('previousAddress', { required: isPreviousAddressRequired ? "Previous address is required" : false })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Years at Previous Address<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  {...register('yearsAtPreviousAddress', { required: isPreviousAddressRequired ? "Years at previous address is required" : false, valueAsNumber: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
            </>
          )}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year Built<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('yearBuilt', { required: "Year built is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purchase Date<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              {...register('purchaseDate', { required: "Purchase date is required" })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Square Footage<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('squareFootage', { required: "Square footage is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Stories<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('numberOfStories', { required: "Number of stories is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Property Location and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Within City Limits?<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('withinCityLimits', { required: "City limits information is required" })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('withinCityLimits', { required: "City limits information is required" })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Distance to Fire Hydrant (feet)<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('distanceToHydrant', { required: "Distance to hydrant is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Residence Type and Occupancy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Residence Type<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('residenceType', { required: true })}
                  value="primary"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Primary</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('residenceType', { required: true })}
                  value="secondary"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Secondary</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('residenceType', { required: true })}
                  value="investment"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Investment</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Families<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('numberOfFamilies', { required: "Number of families is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Occupants<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('numberOfOccupants', { required: "Number of occupants is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Bathroom Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Full Baths<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('fullBaths', { required: "Number of full baths is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Half Baths<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('halfBaths', { required: "Number of half baths is required", valueAsNumber: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Foundation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Foundation Type<span className="text-red-500 ml-1">*</span>
          </label>
          <select
            {...register('foundationType', { required: "Foundation type is required" })}
            className="mt-1 block w-48 rounded-md border-black shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          >
            <option value="">Select Type</option>
            <option value="basement-finished">Basement Finished</option>
            <option value="basement-unfinished">Basement Unfinished</option>
            <option value="basement-partially-finished">Basement Partially Finished</option>
            <option value="basement-walkout">Basement Walkout</option>
            <option value="crawl-space-enclosed">Crawl Space - Enclosed</option>
            <option value="crawl-space-open">Crawl Space - Open</option>
            <option value="daylight-basement-finished">Daylight Basement Finished</option>
            <option value="daylight-basement-partially">Daylight Basement Partially Finished</option>
            <option value="daylight-basement-unfinished">Daylight Basement Unfinished</option>
            <option value="hillside">Hillside Foundation</option>
            <option value="piers">Piers</option>
            <option value="pilings-stilts">Pilings-Stilts</option>
            <option value="slab">Slab</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Heating System */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you have an alternate source of heat other than a fireplace?<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('hasAlternateHeat', { required: "Alternate heat source information is required" })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('hasAlternateHeat', { required: "Alternate heat source information is required" })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {isSecondaryHeatingRequired && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Secondary Heating Source Type<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                {...register('secondaryHeatingType', { required: isSecondaryHeatingRequired ? "Secondary heating type is required" : false })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              >
                <option value="">Select Heating Type</option>
                <option value="coal-nonprof">Coal (Non-Professionally Installed)</option>
                <option value="coal-prof">Coal (Professionally Installed)</option>
                <option value="electric-portable">Electric Portable Heater</option>
                <option value="electric">Electric</option>
                <option value="kerosene-portable">Kerosene Portable Heater</option>
                <option value="kerosene">Kerosene</option>
                <option value="propane-portable">Liquid Propane Portable Heater</option>
                <option value="propane">Liquid Propane</option>
                <option value="natural-gas">Natural Gas</option>
                <option value="oil">Oil</option>
                <option value="solar-nonprof">Solar (Non-Professionally Installed)</option>
                <option value="solar-prof">Solar (Professionally Installed)</option>
                <option value="wood-nonprof">Wood (Non-Professionally Installed)</option>
                <option value="wood-prof">Wood (Professionally Installed)</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}
        </div>

        {/* Electric Circuit Breaker */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Does this home have an electric circuit breaker?<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCircuitBreaker', { required: "Circuit breaker information is required" })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCircuitBreaker', { required: "Circuit breaker information is required" })}
                value="no"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* Business on Property */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you conduct any type of business on this property?<span className="text-red-500 ml-1">*</span>
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('conductsBusiness', { required: "Business conduction information is required" })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('conductsBusiness', { required: "Business conduction information is required" })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {isBusinessNameRequired && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  {...register('businessName', { required: isBusinessNameRequired ? "Business name is required" : false })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Class</label>
                <input
                  type="text"
                  {...register('businessClass')} // Not specified as required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mortgagee */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mortgagee<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex flex-wrap gap-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="first"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">First</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="second"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Second</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="third"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Third</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="cosigner"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Cosigner</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="equity"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Equity Line of Credit</span>
            </label>
          </div>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Swimming Pool', field: 'hasPool' },
            { label: 'Trampoline', field: 'hasTrampoline' },
            { label: 'Smoke Detectors', field: 'hasSmokeDetectors' },
            { label: 'Fire Extinguisher', field: 'hasFireExtinguisher' },
            { label: 'Indoor Fire Sprinkler', field: 'hasFireSprinkler' },
            { label: 'Burglar Alarm', field: 'hasBurglarAlarm' },
            { label: 'Deadbolt', field: 'hasDeadbolt' },
            { label: 'Gated Community', field: 'isGatedCommunity' }
          ].map((item) => (
            <div key={item.field}>
              <label className="block text-sm font-medium text-gray-700">
                {item.label}<span className="text-red-500 ml-1">*</span>
              </label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register(item.field as keyof FormData, { required: `${item.label} information is required` })}
                    value="yes"
                    className="form-radio text-[#536AAE]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register(item.field as keyof FormData, { required: `${item.label} information is required` })}
                    value="no"
                    className="form-radio text-[#536AAE]"
                  />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Insurance History */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years with Prior Carrier
            </label>
            <input
              type="number"
              min="0"
              {...register('priorCarrierYears', { valueAsNumber: true, min: 0 })}
              className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Years with Continuous Coverage
            </label>
            <input
              type="number"
              min="0"
              {...register('continuousCoverageYears', { valueAsNumber: true, min: 0 })}
              className="mt-1 block w-full rounded-md border-black shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Protection Devices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'Protection Device Type (Smoke)', field: 'smokeProtection' },
            { label: 'Protection Device Type (Temp)', field: 'tempProtection' },
            { label: 'Protection Device Type (Burg)', field: 'burgProtection' }
          ].map((item) => (
            <div key={item.field}>
              <label className="block text-sm font-medium text-gray-700">
                {item.label}<span className="text-red-500 ml-1">*</span>
              </label>
              <select
                {...register(item.field as keyof FormData, { required: `${item.label} is required` })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
              >
                <option value="">Select Type</option>
                <option value="central">Central</option>
                <option value="local">Local</option>
                <option value="direct">Direct</option>
              </select>
            </div>
          ))}
        </div>

        {/* Fireplace Type */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Fireplace Type<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="space-x-4 flex">
            <label className="inline-flex items-center">
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="MASONRY" className="form-radio text-[#536AAE]" />
              <span className="ml-2">Masonry</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="PREFAB" className="form-radio text-[#536AAE]" />
              <span className="ml-2">Prefab</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="NONE" className="form-radio text-[#536AAE]" />
              <span className="ml-2">None</span>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1">
            Prefabricated (prefab) fireplaces are factory-built, metal units designed for easy installation,
            while masonry fireplaces are built on-site with brick or stone,
            offering a more traditional aesthetic and structural integration.
          </p>
        </div>

        {/* Smart Home Monitoring */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Smart Home Monitoring<span className="text-red-500 ml-1">*</span>
          </label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('smartHomeMonitoring', { required: "Smart home monitoring choice is required" })}
                value="PARTICIPATING"
                className="form-radio text-[#536AAE]"
              />
              
              <span className="ml-2">Participating</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('smartHomeMonitoring', { required: "Smart home monitoring choice is required" })}
                value="NONE_SELECTED"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">None Selected</span>
            </label>
          </div>
        </div>

        {/* Updates Table with Header */}
        <div className="border rounded-lg overflow-hidden">
          <h4 className="text-lg font-medium text-gray-900 p-4 bg-gray-50 border-b">
            Please fill below details for All Updates:
          </h4>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Update Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Updated?</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Update Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { label: 'Roof', field: 'roof' },
                { label: 'Plumbing', field: 'plumbing' },
                { label: 'Electrical', field: 'electrical' },
                { label: 'Heating', field: 'heating' }
              ].map((item) => {
                const updatedValue = watch(`${item.field}Updated` as keyof FormData);
                const updateYearError = [`${item.field}UpdateYear` as keyof FormData];
                return (
                  <tr key={item.field}>
                    <td className="px-4 py-3 text-sm text-gray-700">{item.label}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register(`${item.field}Updated` as keyof FormData, { required: true })}
                            value="yes"
                            className="form-radio text-[#536AAE]"
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register(`${item.field}Updated` as keyof FormData, { required: true })}
                            value="no"
                            className="form-radio text-[#536AAE]"
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="date"
                        {...register(`${item.field}UpdateYear` as keyof FormData, {
                          required: updatedValue === 'yes' ? `${item.label} update year is required when updated is Yes` : false
                        })}
                        className={`block w-full rounded-md border shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE] 
                          ${updatedValue === 'yes' && updateYearError && !watch(`${item.field}UpdateYear` as keyof FormData) ? 'border-red-500' : 'border-black'}`}
                        disabled={updatedValue !== 'yes'}
                      />
                      {updateYearError && updatedValue === 'yes' && !watch(`${item.field}UpdateYear` as keyof FormData) && (
                        <span className="text-red-500 text-xs">Required</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Insurance History */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Has property insurance been cancelled, declined or non-renewed in the last 5 years?
          </label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('insuranceCancelled', { required: true })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('insuranceCancelled', { required: true })}
                value="no"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        {/* File Upload */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Declaration Page (HOI)
            <span className="text-xs text-gray-500 block mt-1">
              Upload your current declaration page to speed up the process
            </span>
          </label>
          <input
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            {...register('declarationPage')}
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

        {/* Error Messages Section */}
        <div className="text-sm text-red-600 space-y-1">
          {/* Add error messages here if needed */}
        </div>
      </div>
    </div>
  );
};

export default HomeInsuranceForm;