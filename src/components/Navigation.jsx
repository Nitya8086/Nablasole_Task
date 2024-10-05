import React from "react";
import { useFormContext } from "../Context/Task1";
import { useNavigate } from "react-router";

function Navigation({ onNext, onBack }) {
  const { formData, Step } = useFormContext();
  const navigate = useNavigate();

  const nextHandler = () => {
    onNext();
    // localStorage.setItem("project", JSON.stringify(formData));
  };

  return (
    <>
      <div className="flex justify-between items-center">
        {Step != 1 && (
          <button
            className={`text-blue-600 font-medium hover:text-blue-800`}
            onClick={onBack}
          >
            Back
          </button>
        )}
        {Step == 1 && (
          <button
            className={`text-blue-600 font-medium hover:text-blue-800 `}
            onClick={() => navigate("/")}
          >
            Back
          </button>
        )}
        {Step != 6 && (
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200`}
            onClick={nextHandler}
          >
            Next
          </button>
        )}
        {Step === 6 && (
          <button
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200`}
            onClick={nextHandler}
          >
            Create Project
          </button>
        )}
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {[1, 2, 3, 4, 5, 6].map((step) => (
          <div
            key={step}
            className={`h-2 w-2 rounded-full ${
              step === Step ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Navigation;
