import { UseFormRegister, UseFormWatch, FieldErrors, FieldError } from "react-hook-form";
import { FormData } from './QuoteForm';  // Add this import

interface HomeInsuranceFormProps {
    register: UseFormRegister<FormData>;
    watch: UseFormWatch<FormData>;
    errors: FieldErrors<FormData>;
}

interface FormField {
  label: string;
  field: string;
  type: 'date' | 'select' | 'tel';
  options?: string[];
}


interface FormErrors extends FieldErrors<FormData> {
  [key: string]: FieldError | undefined | Record<string, FieldError | undefined> | FieldError[] | (Record<string, Partial<{ type: string | number; message: string }>> & Partial<{ type: string | number; message: string }>);
  applicant?: Record<string, FieldError | undefined>;
  spouse?: Record<string, FieldError | undefined>;
  drivers?: FieldError[];
  claimDetails?: Record<string, FieldError | undefined>;
  root?: Record<string, Partial<{ type: string | number; message: string }>> & Partial<{ type: string | number; message: string }>;
}
  
const HomeInsuranceForm = ({ register, watch, errors }: HomeInsuranceFormProps) => {
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

  const typedErrors = errors as FormErrors;

  const getErrorClass = (field: string): string => {
    const error = typedErrors[field];
    return error ? 'border-red-500' : 'border-black';
  };

  const getNestedErrorClass = (parent: string, field: string): string => {
    const parentError = typedErrors[parent] as Record<string, FieldError | undefined>;
    return parentError?.[field] ? 'border-red-500' : 'border-black';
  };

  const getErrorMessage = (field: string): string => {
    const error = typedErrors[field];
    if (typeof error === 'string') {
      return error;
    }
    if (error && typeof error === 'object' && 'message' in error) {
      return (error as FieldError).message || 'This field is required';
    }
    return 'This field is required';
  };

  return (
    <div className="space-y-6 border-t pt-6">
      <h3 className="text-xl font-semibold text-[#11193B]">Home Insurance Details</h3>
      
      {/* Marital Status and Personal Information */}
      <div className="space-y-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <select
            {...register('maritalStatus', { required: true })}
            className={`w-full px-3 py-2 border ${getErrorClass('maritalStatus')} rounded-md`}
          >
            <option value="">Select Marital Status</option>
            <option value="SINGLE">Single</option>
            <option value="MARRIED">Married</option>
            <option value="DIVORCED">Divorced</option>
            <option value="WIDOWED">Widowed</option>
            <option value="DOMESTIC">Domestic Partner</option>
          </select>
          {typedErrors.maritalStatus && (
            <p className="mt-1 text-sm text-red-500">Marital status is required</p>
          )}
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
                { label: 'Date of Birth', field: 'dob', type: 'date' } as FormField,
                { label: 'Work Industry', field: 'workIndustry', type: 'select', options: [
                  'Agriculture', 'Construction', 'Education', 'Finance', 'Healthcare', 
                  'Information Technology', 'Manufacturing', 'Retail', 'Transportation', 'Other'
                ] } as FormField,
                { label: 'Occupation', field: 'occupation', type: 'select', options: [
                  'Accountant', 'Architect', 'Business Owner', 'Engineer', 'Healthcare Professional',
                  'IT Professional', 'Manager', 'Sales Representative', 'Teacher', 'Other'
                ] } as FormField,
                { label: 'Education', field: 'education', type: 'select', options: [
                  'High School', 'Associate Degree', 'Bachelor Degree', 'Master Degree', 
                  'Doctorate', 'Professional Certification', 'Other'
                ] } as FormField,
                { label: 'Cell Number', field: 'cell', type: 'tel' } as FormField
              ].map((item) => (
                <tr key={item.field}>
                  <td className="px-4 py-3 text-sm text-gray-700">
                    {item.label}<span className="text-red-500 ml-1">*</span>
                  </td>
                  <td className="px-4 py-3">
                    {item.type === 'select' ? (
                      <select
                        {...register(`applicant.${item.field}` as keyof FormData, { required: `${item.label} is required` })}
                        className={`w-full px-3 py-2 border ${getNestedErrorClass('applicant', item.field)} rounded-md`}
                      >
                        <option value="">Select {item.label}</option>
                        {item.options?.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={item.type}
                        {...register(`applicant.${item.field}` as keyof FormData, { 
                          required: `${item.label} is required`, 
                          minLength: item.type === 'tel' ? { value: 10, message: "Valid phone number is required" } : undefined 
                        })}
                        className={`w-full px-3 py-2 border ${getNestedErrorClass('applicant', item.field)} rounded-md`}
                      />
                    )}
                    {typedErrors.applicant?.[item.field] && (
                      <span className="text-red-500 text-xs">{typedErrors.applicant[item.field]?.message}</span>
                    )}
                  </td>
                  {(maritalStatus === 'MARRIED' || maritalStatus === 'DOMESTIC') && (
                    <td className="px-4 py-3">
                      {item.type === 'select' ? (
                        <select
                          {...register(`spouse.${item.field}` as keyof FormData, { required: isSpouseRequired ? `Spouse ${item.label} is required` : false })}
                          className={`w-full px-3 py-2 border ${getNestedErrorClass('spouse', item.field)} rounded-md`}
                        >
                          <option value="">Select {item.label}</option>
                          {item.options?.map(option => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={item.type}
                          {...register(`spouse.${item.field}` as keyof FormData, { 
                            required: isSpouseRequired ? `Spouse ${item.label} is required` : false,
                            minLength: item.type === 'tel' ? { value: 10, message: "Valid phone number is required" } : undefined 
                          })}
                          className={`w-full px-3 py-2 border ${getNestedErrorClass('spouse', item.field)} rounded-md`}
                        />
                      )}
                      {typedErrors.spouse?.[item.field] && (
                        <span className="text-red-500 text-xs">{typedErrors.spouse[item.field]?.message}</span>
                      )}
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
              className={`w-full px-3 py-2 border ${getErrorClass('address')} rounded-md`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('yearsAtResidence')} rounded-md`}
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
                  className={`w-full px-3 py-2 border ${getErrorClass('previousAddress')} rounded-md`}
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
                  className={`w-full px-3 py-2 border ${getErrorClass('yearsAtPreviousAddress')} rounded-md`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('yearBuilt')} rounded-md`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purchase Date<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="date"
              {...register('purchaseDate', { required: "Purchase date is required" })}
              className={`w-full px-3 py-2 border ${getErrorClass('purchaseDate')} rounded-md`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Square Footage<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('squareFootage', { required: "Square footage is required", valueAsNumber: true })}
              className={`w-full px-3 py-2 border ${getErrorClass('squareFootage')} rounded-md`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Stories<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('numberOfStories', { required: "Number of stories is required", valueAsNumber: true })}
              className={`w-full px-3 py-2 border ${getErrorClass('numberOfStories')} rounded-md`}
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
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('withinCityLimits')}`}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('withinCityLimits', { required: "City limits information is required" })}
                  value="no"
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('withinCityLimits')}`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('distanceToHydrant')} rounded-md`}
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
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('residenceType')}`}
                />
                <span className="ml-2">Primary</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('residenceType', { required: true })}
                  value="secondary"
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('residenceType')}`}
                />
                <span className="ml-2">Secondary</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('residenceType', { required: true })}
                  value="investment"
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('residenceType')}`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('numberOfFamilies')} rounded-md`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Occupants<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('numberOfOccupants', { required: "Number of occupants is required", valueAsNumber: true })}
              className={`w-full px-3 py-2 border ${getErrorClass('numberOfOccupants')} rounded-md`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('fullBaths')} rounded-md`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number of Half Baths<span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="number"
              {...register('halfBaths', { required: "Number of half baths is required", valueAsNumber: true })}
              className={`w-full px-3 py-2 border ${getErrorClass('halfBaths')} rounded-md`}
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
            className={`w-full px-3 py-2 border ${getErrorClass('foundationType')} rounded-md`}
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
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('hasAlternateHeat')}`}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('hasAlternateHeat', { required: "Alternate heat source information is required" })}
                  value="no"
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('hasAlternateHeat')}`}
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
                className={`w-full px-3 py-2 border ${getErrorClass('secondaryHeatingType')} rounded-md`}
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
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('hasCircuitBreaker')}`}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCircuitBreaker', { required: "Circuit breaker information is required" })}
                value="no"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('hasCircuitBreaker')}`}
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
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('conductsBusiness')}`}
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('conductsBusiness', { required: "Business conduction information is required" })}
                  value="no"
                  className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('conductsBusiness')}`}
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
                  className={`w-full px-3 py-2 border ${getErrorClass('businessName')} rounded-md`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Class</label>
                <input
                  type="text"
                  {...register('businessClass')} // Not specified as required
                  className={`w-full px-3 py-2 border ${getErrorClass('businessClass')} rounded-md`}
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
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('mortgagee')}`}
              />
              <span className="ml-2">First</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="second"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('mortgagee')}`}
              />
              <span className="ml-2">Second</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="third"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('mortgagee')}`}
              />
              <span className="ml-2">Third</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="cosigner"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('mortgagee')}`}
              />
              <span className="ml-2">Cosigner</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: "Mortgagee information is required" })}
                value="equity"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('mortgagee')}`}
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
                    className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass(item.field)}`}
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register(item.field as keyof FormData, { required: `${item.label} information is required` })}
                    value="no"
                    className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass(item.field)}`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('priorCarrierYears')} rounded-md`}
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
              className={`w-full px-3 py-2 border ${getErrorClass('continuousCoverageYears')} rounded-md`}
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
                className={`w-full px-3 py-2 border ${getErrorClass(item.field)} rounded-md`}
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
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="MASONRY" className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('fireplaceType')}`} />
              <span className="ml-2">Masonry</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="PREFAB" className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('fireplaceType')}`} />
              <span className="ml-2">Prefab</span>
            </label>
            <label className="inline-flex items-center">
              <input type="radio" {...register('fireplaceType', { required: "Fireplace type is required" })} value="NONE" className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('fireplaceType')}`} />
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
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('smartHomeMonitoring')}`}
              />
              
              <span className="ml-2">Participating</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('smartHomeMonitoring', { required: "Smart home monitoring choice is required" })}
                value="NONE_SELECTED"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('smartHomeMonitoring')}`}
              />
              <span className="ml-2">None Selected</span>
            </label>
          </div>
        </div>

        {/* Updates Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Update Type</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Updated?</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Update Year</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {['Roof', 'Plumbing', 'Electrical', 'Heating'].map((type) => {
                const updatedField = `${type.toLowerCase()}Updated` as keyof FormData;
                const yearField = `${type.toLowerCase()}Year` as keyof FormData;
                const isUpdated = watch(updatedField) === 'yes';
                
                return (
                  <tr key={type}>
                    <td className="px-4 py-3 text-sm text-gray-700">{type}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register(updatedField, { required: true })}
                            value="yes"
                            className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass(updatedField)}`}
                          />
                          <span className="ml-2">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register(updatedField, { required: true })}
                            value="no"
                            className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass(updatedField)}`}
                          />
                          <span className="ml-2">No</span>
                        </label>
                      </div>
                      {typedErrors[updatedField] && (
                        <span className="text-red-500 text-xs">Please select if {type.toLowerCase()} has been updated</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="date"
                        {...register(yearField, { 
                          required: isUpdated ? `${type} update year is required` : false 
                        })}
                        className={`w-full px-3 py-2 border ${getErrorClass(yearField)} rounded-md`}
                        disabled={!isUpdated}
                      />
                      {typedErrors[yearField] && (
                        <span className="text-red-500 text-xs">
                          {getErrorMessage(yearField)}
                        </span>
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
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('insuranceCancelled')}`}
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('insuranceCancelled', { required: true })}
                value="no"
                className={`form-radio h-4 w-4 text-blue-600 ${getErrorClass('insuranceCancelled')}`}
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