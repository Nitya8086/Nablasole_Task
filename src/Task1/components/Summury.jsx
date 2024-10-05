import React, { useEffect } from "react";
import { useFormContext } from "../../Context/Task1";
import "aos/dist/aos.css";
import AOS from "aos";
import { useNavigate } from "react-router";
import { PiPen } from "react-icons/pi";

const Summary = () => {
  const { formData, ResetProject, setStep } = useFormContext();
  const navigate = useNavigate();

  const ReturnHandler = () => {
    ResetProject();
    navigate("/");
  };

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const formatDate = (date) => {
    if (!date) return "Not Set";
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div
        className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 w-full max-w-3xl"
        data-aos="fade-up"
      >
        <p className="flex justify-between text-xs text-blue-500 ">
          <span
            className="text-white font-bold cursor-pointer flex items-center gap-1 bg-blue-500 p-2 rounded"
            onClick={() => (setStep(1), navigate("/task1"))}
          >
            <PiPen />
            Edit
          </span>
          <span className="cursor-pointer" onClick={ReturnHandler}>
            Return to Dashboard
          </span>
        </p>
        <h2
          className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 sm:mb-8 "
          data-aos="zoom-in"
        >
          Project Summary
        </h2>

        {/* Project Information */}
        <div className="mb-8" data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Project Info
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li className="flex justify-between border-b pb-2">
              <span>Project Name:</span>{" "}
              <span>{formData.projectName || "Not Set"}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Client:</span> <span>{formData.client || "Not Set"}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Start Date:</span>{" "}
              <span>{formatDate(formData.startDate)}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>End Date:</span> <span>{formatDate(formData.endDate)}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Notes:</span> <span>{formData.notes || "Not Set"}</span>
            </li>
          </ul>
        </div>

        {/* Budget Information */}
        <div className="mb-8" data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Budget Info
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li className="flex justify-between border-b pb-2">
              <span>Hourly Rate:</span> <span>${formData.hourlyRate}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Budget Alert:</span> <span>{formData.budgetAlert}%</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Budget Resets:</span>{" "}
              <span>{formData.budgetResets ? "Yes" : "No"}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>Send Email Alert:</span>{" "}
              <span>{formData.sendEmailAlert ? "Yes" : "No"}</span>
            </li>
          </ul>
        </div>

        {/* Task List */}
        <div className="mb-8" data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">Tasks</h3>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            {formData.selectedTasks.length > 0 ? (
              formData.selectedTasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center justify-between px-4 py-2 bg-blue-50 rounded-lg shadow-sm"
                  data-aos="zoom-in"
                >
                  {task.name}
                </li>
              ))
            ) : (
              <li>No tasks selected</li>
            )}
          </ul>
        </div>

        {/* Team Members */}
        <div className="mb-8" data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Team Members
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            {formData.selectedMembers.length > 0 ? (
              formData.selectedMembers.map((member) => (
                <li
                  key={member.id}
                  className="flex items-center justify-between px-4 py-2 bg-green-50 rounded-lg shadow-sm"
                  data-aos="zoom-in"
                >
                  {member.name}
                </li>
              ))
            ) : (
              <li>No team members selected</li>
            )}
          </ul>
        </div>

        {/* Permission Information */}
        <div className="mb-8" data-aos="fade-right">
          <h3 className="text-xl font-semibold mb-4 text-blue-500">
            Permission
          </h3>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base md:text-lg">
            <li className="flex justify-between border-b pb-2">
              <span>Permission:</span>{" "}
              <span>{formData.permission || "Not Set"}</span>
            </li>
            <li className="flex justify-between border-b pb-2">
              <span>View Type:</span>{" "}
              <span>{formData.selectedView || "Not Set"}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
