import React from "react";
import StepNav from "../../components/StepNav";

const ProfileForm = () => {
  return (
    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto sm:px-4 lg:px-4 ">
      <StepNav />
      <div className="w-full max-w-5xl p-4 sm:p-8 bg-white shadow-md rounded-b-lg">
        <div className="">
          <h2 className="text-lg sm:text-xl font-semibold text-center text-gray-400">
            Step 1
          </h2>
          <p className="text-center text-gray-500 mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">
            Your Profile
          </p>
          <p className="text-center text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base md:px-12 lg:px-56">
            Enter the login information for your account. You will be able to
            create additional users after registering.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-1 lg:px-20 md:grid-cols-2 gap-4 md:pb-10">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                First Name*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your First Name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Last Name*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your Last Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Email*
              </label>
              <input
                type="email"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your Email"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Phone Number*
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Input Your Phone Number"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Password*
              </label>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Create Password"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-gray-600 text-sm sm:text-base">
                Confirm Password*
              </label>
              <input
                type="password"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                placeholder="Confirm Your Password"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileForm;
