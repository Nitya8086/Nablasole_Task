import React, { useEffect, useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Step5 from "./components/Step5";
import Step6 from "./components/Step6";
import { useFormContext } from "../Context/Task1";

function index() {
  const { Step, setStep } = useFormContext();

  const onNext = () => {
    setStep((prev) => prev + 1);
  };

  const onBack = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      {Step === 1 && <Step1 onNext={onNext} Step={Step} />}
      {Step === 2 && <Step2 onNext={onNext} onBack={onBack} Step={Step} />}
      {Step === 3 && <Step3 onNext={onNext} onBack={onBack} Step={Step} />}
      {Step === 4 && <Step4 onNext={onNext} onBack={onBack} Step={Step} />}
      {Step === 5 && <Step5 onNext={onNext} onBack={onBack} Step={Step} />}
      {Step === 6 && <Step6 onBack={onBack} Step={Step} />}
    </>
  );
}

export default index;
