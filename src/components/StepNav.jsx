import React, { useState } from "react";
import { useFormContext } from "../Context/Task1";

const steps = [
  { id: 1, label: "Your Profile" },
  { id: 2, label: "Business Information" },
  { id: 3, label: "Additional Users" },
];

function StepNav() {
  const { currentStep } = useFormContext();

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <div className="flex justify-center mt-4 items-center bg-gray-200 rounded-tl-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`py-3 px-1 sm:px-6 transition-all flex-1 duration-300 flex gap-2 items-center justify-center text-center text-xs lg:text-lg ${
              currentStep >= step.id
                ? "bg-blue-400 text-white"
                : "bg-gray-200 text-gray-500"
            } ${
              step.id === currentStep && currentStep != 3
                ? "rounded-r-full"
                : ""
            } ${step.id === 1 ? "rounded-tl-full py-4" : ""} `}
          >
            <span
              className={`p-1 sm:p-1 px-2 sm:px-3 rounded-full  font-bold flex items-center justify-center ${
                currentStep >= step.id
                  ? "bg-white text-black"
                  : "bg-gray-300 text-white"
              }`}
            >
              {step.id}
            </span>
            <span className="">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepNav;
