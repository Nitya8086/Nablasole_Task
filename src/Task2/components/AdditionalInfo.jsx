import React from "react";
import StepNav from "../../components/StepNav";

const AdditionalInfo = () => {
  return (
    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto sm:px-4 lg:px-4 ">
      <StepNav />
      <div className="w-full max-w-5xl p-4 sm:p-8 bg-white shadow-md rounded-b-lg">
        <div className="">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-400">
            Step 3
          </h2>
          <p className="text-center text-gray-500 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
            Additional Information
          </p>
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:px-12 lg:px-56">
            Please provide additional information to complete your profile.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-2 lg:px-20 md:grid-cols-2 gap-4 md:pb-10">
            {/* Address */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Address*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter Your Address"
              />
            </div>

            {/* City */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                City*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter Your City"
              />
            </div>

            {/* State */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                State/Province*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter Your State/Province"
              />
            </div>

            {/* Country */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Country*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Enter Your Country"
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Date of Birth*
              </label>
              <input
                type="date"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
              />
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Gender*
              </label>
              <select className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Hobbies */}
            <div className="flex flex-col col-span-2">
              <label className="text-gray-600 text-sm sm:text-base">
                Hobbies/Interests
              </label>
              <textarea
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                rows="4"
                placeholder="Share your hobbies or interests"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfo;
