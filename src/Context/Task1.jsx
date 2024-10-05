import React, { createContext, useContext, useState } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    client: "",
    newClients: [],
    startDate: "",
    endDate: "",
    notes: "",
    hourlyRate: "12678.00",
    budgetAlert: "80",
    budgetResets: false,
    sendEmailAlert: false,
    selectedTab: "time_and_materials",
    selectedView: "",
    permission: "",
    selectedTasks: [],
    selectedMembers: [],
  });

  const [Step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const updateFormData = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    localStorage.setItem("project", JSON.stringify(formData));
  };
  const ResetProject = () => {
    setFormData({
      projectName: "",
      client: "",
      newClients: [],
      startDate: "",
      endDate: "",
      notes: "",
      hourlyRate: "12678.00",
      budgetAlert: "80",
      budgetResets: false,
      sendEmailAlert: false,
      selectedTab: "time_and_materials",
      selectedView: "",
      permission: "",
      selectedTasks: [],
      selectedMembers: [],
    });
    setStep(1);
    localStorage.removeItem("project");
    localStorage.removeItem("Step");
  };
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        updateFormData,
        Step,
        setStep,
        ResetProject,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
