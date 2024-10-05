import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { useFormContext } from "../../Context/Task1";

const Step2 = ({ onNext, onBack, Step }) => {
  const { formData, updateFormData } = useFormContext();
  const [errors, setErrors] = useState({});

  
  const validateFields = () => {
    const newErrors = {};

   
    if (!formData.projectHourlyRate)
      newErrors.projectHourlyRate = "Please select a project hourly rate.";

  
    if (!formData.hourlyRate) newErrors.hourlyRate = "Hourly rate is required.";
    else if (isNaN(parseFloat(formData.hourlyRate)))
      newErrors.hourlyRate = "Please enter a valid number.";

    if (!formData.budgetType)
      newErrors.budgetType = "Please select a budget type.";

   
    if (formData.sendEmailAlert) {
      if (!formData.budgetAlert)
        newErrors.budgetAlert = "Budget alert is required.";
      else if (isNaN(parseInt(formData.budgetAlert)))
        newErrors.budgetAlert = "Please enter a valid percentage.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Project Type</h2>
        <p className="text-center text-sm text-gray-600 mb-6">
          Don’t panic — You can also customize this type in settings.
        </p>


        <div className="flex flex-col sm:flex-row justify-around mb-6">
          {["time_and_materials", "fixed_fee", "non_billable"].map((tab) => (
            <button
              key={tab}
              className={`w-full sm:w-1/3 py-2 rounded text-sm mb-2 sm:mb-0 p-1 ${
                formData.selectedTab === tab
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => updateFormData("selectedTab", tab)}
            >
              {tab.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
            </button>
          ))}
        </div>

      
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Hourly Rate</label>
          <p className="text-sm text-gray-500 mb-2">
            We need hourly rates to track your project's billable amount.
          </p>
          <div className="flex flex-col sm:flex-row items-center w-full">
            <select
              className={`border border-gray-300 rounded-l p-2 mb-2 sm:mb-0 sm:mr-2 w-full md:w-1/2 focus:outline-none focus:ring focus:ring-blue-200 ${
                errors.projectHourlyRate ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.projectHourlyRate}
              onChange={(e) =>
                updateFormData("projectHourlyRate", e.target.value)
              }
            >
              <option value="">Select Project Hourly Rate</option>
              <option value="project_hourly_rate_1">Rate 1</option>
              <option value="project_hourly_rate_2">Rate 2</option>
            </select>

            <input
              type="text"
              value={formData.hourlyRate}
              onChange={(e) => updateFormData("hourlyRate", e.target.value)}
              className={`border p-2 w-full md:w-1/4 rounded ${
                errors.hourlyRate ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {errors.hourlyRate && (
              <p className="text-red-500 text-sm mt-1">{errors.hourlyRate}</p>
            )}
          </div>
          {errors.projectHourlyRate && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectHourlyRate}
            </p>
          )}
        </div>

    
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Budget</label>
          <p className="text-sm text-gray-500 mb-2">
            We need hourly rates to track your project's billable amount.
          </p>
          <select
            className={`border border-gray-300 rounded p-2 md:w-1/2 focus:outline-none focus:ring focus:ring-blue-200 ${
              errors.budgetType ? "border-red-500" : "border-gray-300"
            }`}
            value={formData.budgetType}
            onChange={(e) => updateFormData("budgetType", e.target.value)}
          >
            <option value="">Select Budget Type</option>
            <option value="hours_per_person">Hours per Person</option>
            <option value="total_hours">Total Hours</option>
            <option value="fixed_budget">Fixed Budget</option>
          </select>
          {errors.budgetType && (
            <p className="text-red-500 text-sm mt-1">{errors.budgetType}</p>
          )}
        </div>

      
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={formData.budgetResets}
              onChange={(e) => updateFormData("budgetResets", e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200"
            />
            <span className="ml-2 text-sm text-gray-700">
              Budget resets every month
            </span>
          </label>
        </div>

  
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
  
            <label className="inline-flex items-center text-sm text-gray-700 mb-2 sm:mb-0">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-200 mr-2"
                checked={formData.sendEmailAlert}
                onChange={(e) =>
                  updateFormData("sendEmailAlert", e.target.checked)
                }
              />
              <div>
                Send email alerts if project exceeds
                <input
                  type="text"
                  value={formData.budgetAlert}
                  onChange={(e) =>
                    updateFormData("budgetAlert", e.target.value)
                  }
                  className={`w-16 text-center border p-1 mx-2 rounded ${
                    errors.budgetAlert ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring focus:ring-blue-200`}
                />
                <span className="text-sm ml-1"> % of budget</span>
              </div>
            </label>
            {errors.budgetAlert && (
              <p className="text-red-500 text-sm mt-1">{errors.budgetAlert}</p>
            )}
          </div>
        </div>

        <Navigation onNext={handleNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step2;
