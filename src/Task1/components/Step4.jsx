import React, { useEffect, useState } from "react";
import { useFormContext } from "../../Context/Task1"; 
import Navigation from "../../components/Navigation";

const Step4 = ({ onNext, onBack, Step }) => {
  const { formData, updateFormData } = useFormContext();
  const [selectedOption, setSelectedOption] = useState(
    formData.permission || "admins"
  ); 
  const [error, setError] = useState(""); 

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    updateFormData("permission", option); 
    setError(""); 
  };

  useEffect(() => {
   
    setSelectedOption(formData.permission);
  }, [formData.permission]);

  const handleNext = () => {

    if (!selectedOption) {
      setError("Please select an option.");
      return; 
    }
    onNext(); 
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 max-w-full lg:h-[600px] sm:max-w-md w-full flex flex-col justify-between">
        <div className="flex-grow">
          <h2 className="text-center text-xl sm:text-2xl font-bold mb-6">
            Who can manage projects
          </h2>
          <p className="text-center text-gray-500 mb-6">
            Don’t panic — You can also customize these permissions in settings.
          </p>
          <div className="space-y-4 mb-6">
         
            <div
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedOption === "everyone"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionChange("everyone")}
            >
              <h3 className="font-medium text-gray-800">Everyone</h3>
              <p className="text-gray-500">
                All users can see it, but guests cannot access the projects.
              </p>
            </div>
        
            <div
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedOption === "admins"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionChange("admins")}
            >
              <h3 className="font-medium text-gray-800">Only Admins</h3>
              <p className="text-gray-500">
                Only admins can manage everything.
              </p>
            </div>
          
            <div
              className={`p-4 border rounded-lg cursor-pointer ${
                selectedOption === "specific"
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
              onClick={() => handleOptionChange("specific")}
            >
              <h3 className="font-medium text-gray-800">
                Only Specific People
              </h3>
              <p className="text-gray-500">
                Only some specific people can see it.
              </p>
            </div>
          </div>
       
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}{" "}
  
        <Navigation onNext={handleNext} onBack={onBack} Step={Step} />
      </div>
    </div>
  );
};

export default Step4;
