import React, { useState } from "react";
import Navigation from "../../components/Navigation";
import { useFormContext } from "../../Context/Task1";

const Step3 = ({ onNext, onBack, Step }) => {
  const { formData, updateFormData } = useFormContext();
  const [errors, setErrors] = useState({});

  // Validation function to check required fields
  const validateFields = () => {
    const newErrors = {};
    let valid = true;

    if (!formData.selectedView) {
      newErrors.selectedView = "Please select a view.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleNext = () => {
    if (validateFields()) {
      onNext();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 mx-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md lg:h-[600px] h-[500px] flex flex-col justify-between">
        <div className="h-[500px]">
          <h2 className="text-lg font-bold text-center mb-4">Select a View</h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            You can also customize this view in settings.
          </p>

          {/* Options for List and Board View */}
          <div className="flex justify-around mb-6 gap-2">
            {["list", "board"].map((view) => (
              <div
                key={view}
                className={`w-1/2 flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer ${
                  formData.selectedView === view
                    ? "border-blue-500 bg-blue-100"
                    : "border-gray-300 bg-gray-100"
                }`}
                onClick={() => updateFormData("selectedView", view)}
              >
                <div className="w-12 h-12 bg-gray-200 flex items-center justify-center mb-2">
                  {/* Placeholder for List/Board Icon */}
                  {view === "list" ? (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h5v12H4zm6 0h5v12h-5zm6 0h5v12h-5z"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-gray-700">
                  {view.charAt(0).toUpperCase() + view.slice(1)}
                </span>
              </div>
            ))}
          </div>
          {errors.selectedView && (
            <p className="text-red-500 text-sm text-center">
              {errors.selectedView}
            </p>
          )}
        </div>

        {/* Navigation Buttons */}
        <Navigation onNext={handleNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step3;
