import React from "react";
import StepNav from "../../components/StepNav";

const ProfileForm = () => {
  return (
    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-2 sm:px-4 lg:px-8">
      <StepNav />
      <div className="w-full p-4 sm:p-8 bg-white shadow-md rounded-b-lg">
        <div className="">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-400">
            Step 2
          </h2>
          <p className="text-center text-gray-500 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
            Business Information
          </p>
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:px-12 lg:px-56">
            Please, enter information about your company.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:px-20 md:pb-10">
            {/* Brand Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Brand Name*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your Brand Name"
              />
            </div>

            {/* Brand Type */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Brand Type*
              </label>
              <select className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base">
                <option>Select Type of Your Brand</option>
                <option>Local</option>
                <option>National</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Street Address*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your Street Address"
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
                placeholder="Input City"
              />
            </div>

            {/* Zip Code */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Zip Code*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Zip Code"
              />
            </div>

            {/* Tax ID Number */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Tax ID Number*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Tax ID Number"
              />
            </div>

            {/* Document Section */}
            <div className="col-span-2">
              <h3 className="text-blue-400 text-sm sm:text-base mb-2">
                Documents
              </h3>
              <p className="text-sm text-gray-500">
                Once the following documents are signed, you'll be ready to get
                started
              </p>

              <div className="mt-2">
                {/* Electronically Sign Agreement */}
                <div className="flex items-center border-2  p-2 rounded-lg">
                  <input type="checkbox" className="mr-2" />
                  <label>Electronically sign the agreement(s)</label>
                </div>
                <div className="flex items-center mt-2 border-2  p-2 rounded-lg">
                  <input type="checkbox" className="mr-2" />
                  <label>
                    Non-adult beverage Kroger market supplier waiver and release
                  </label>
                </div>
              </div>
            </div>

            {/* COI PDF Upload Section */}
            <div className="col-span-2">
              <h3 className="text-blue-400 text-sm sm:text-base mb-2">
                COI PDF Upload
              </h3>
              <p className="text-sm text-gray-500">
                Once the following documents are signed, you'll be ready to get
                started
              </p>

              <div className="mt-2">
                {/* Electronically Sign Agreement for COI */}
                <div className="flex items-center border-2  p-2 rounded-lg">
                  <input type="checkbox" className="mr-2" />
                  <label>Electronically sign the agreement(s)</label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
