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
  
  return (
    <div className="space-y-6 border-t pt-6">
      <h3 className="text-xl font-semibold text-[#11193B]">Home Insurance Details</h3>
      
      {/* Marital Status and Personal Information */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select
            {...register('maritalStatus', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          >
            <option value="">Select Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="separated">Separated</option>
            <option value="widowed">Widowed</option>
            <option value="domestic">Domestic Partner</option>
          </select>
        </div>

        {/* Personal Information Table */}
        <div className="border rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Details</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Applicant/Insured</th>
                {(maritalStatus === 'married' || maritalStatus === 'domestic') && (
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Spouse</th>
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
                  <td className="px-4 py-3 text-sm text-gray-700">{item.label}</td>
                  <td className="px-4 py-3">
                    <input
                      type={item.type}
                      {...register(`applicant.${item.field}` as keyof FormData, { required: true })}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                    />
                  </td>
                  {(maritalStatus === 'married' || maritalStatus === 'domestic') && (
                    <td className="px-4 py-3">
                      <input
                        type={item.type}
                        {...register(`spouse.${item.field}` as keyof FormData)}
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
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              {...register('address', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Years at Residence</label>
            <input
              type="number"
              min="0"
              {...register('yearsAtResidence', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          {yearsAtResidence < 3 && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700">Previous Address</label>
                <input
                  type="text"
                  {...register('previousAddress', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Years at Previous Address</label>
                <input
                  type="number"
                  min="0"
                  {...register('yearsAtPreviousAddress', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
            </>
          )}
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Year Built</label>
            <input
              type="number"
              {...register('yearBuilt', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Purchase Date</label>
            <input
              type="date"
              {...register('purchaseDate', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Square Footage</label>
            <input
              type="number"
              {...register('squareFootage', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Stories</label>
            <input
              type="number"
              {...register('numberOfStories', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Property Location and Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Within City Limits?</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('withinCityLimits', { required: true })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('withinCityLimits', { required: true })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Distance to Fire Hydrant (feet)</label>
            <input
              type="number"
              {...register('distanceToHydrant', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Residence Type and Occupancy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Residence Type</label>
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
            <label className="block text-sm font-medium text-gray-700">Number of Families</label>
            <input
              type="number"
              {...register('numberOfFamilies', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Occupants</label>
            <input
              type="number"
              {...register('numberOfOccupants', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Bathroom Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Full Baths</label>
            <input
              type="number"
              {...register('fullBaths', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number of Half Baths</label>
            <input
              type="number"
              {...register('halfBaths', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
        </div>

        {/* Foundation Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Foundation Type</label>
          <select
            {...register('foundationType', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
          >
            <option value="">Select Foundation Type</option>
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
              Do you have an alternate source of heat other than a fireplace?
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('hasAlternateHeat', { required: true })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('hasAlternateHeat', { required: true })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {hasAlternateHeat === 'yes' && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Secondary Heating Source Type</label>
              <select
                {...register('secondaryHeatingType', { required: true })}
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
          <label className="block text-sm font-medium text-gray-700">Does this home have an electric circuit breaker?</label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCircuitBreaker', { required: true })}
                value="yes"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('hasCircuitBreaker', { required: true })}
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
              Do you conduct any type of business on this property?
            </label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('conductsBusiness', { required: true })}
                  value="yes"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  {...register('conductsBusiness', { required: true })}
                  value="no"
                  className="form-radio text-[#536AAE]"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {conductsBusiness === 'yes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input
                  type="text"
                  {...register('businessName', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Class</label>
                <input
                  type="text"
                  {...register('businessClass', { required: true })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Mortgagee */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Mortgagee</label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: true })}
                value="first"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">First</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: true })}
                value="second"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Second</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('mortgagee', { required: true })}
                value="third"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Third</span>
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
              <label className="block text-sm font-medium text-gray-700">{item.label}</label>
              <div className="flex space-x-4 mt-1">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register(item.field as keyof FormData, { required: true })}
                    value="yes"
                    className="form-radio text-[#536AAE]"
                  />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    {...register(item.field as keyof FormData, { required: true })}
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
            <label className="block text-sm font-medium text-gray-700">Years with Prior Carrier</label>
            <input
              type="number"
              min="0"
              {...register('priorCarrierYears', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Years with Continuous Coverage</label>
            <input
              type="number"
              min="0"
              {...register('continuousCoverageYears', { required: true })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
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
              <label className="block text-sm font-medium text-gray-700">{item.label}</label>
              <select
                {...register(item.field as keyof FormData, { required: true })}
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
          <label className="block text-sm font-medium text-gray-700">Fireplace Type</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('fireplaceType', { required: true })}
                value="masonry"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Masonry</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('fireplaceType', { required: true })}
                value="prefab"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Prefab</span>
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
          <label className="block text-sm font-medium text-gray-700">Smart Home Monitoring</label>
          <div className="flex space-x-4 mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('smartHomeMonitoring', { required: true })}
                value="participating"
                className="form-radio text-[#536AAE]"
              />
              <span className="ml-2">Participating</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...register('smartHomeMonitoring', { required: true })}
                value="none"
                className="form-radio text-[#536AAE]"
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
              {[
                { label: 'Roof', field: 'roof' },
                { label: 'Plumbing', field: 'plumbing' },
                { label: 'Electrical', field: 'electrical' },
                { label: 'Heating', field: 'heating' }
              ].map((item) => (
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
                    {...register(`${item.field}UpdateYear` as keyof FormData)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#536AAE] focus:ring-[#536AAE]"
                    disabled={watch(`${item.field}Updated` as keyof FormData) !== 'yes'}
                  />
                </td>
              </tr>
            ))}
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