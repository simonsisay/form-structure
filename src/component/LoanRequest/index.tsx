import React from "react";
import Stepper from "../Stepper";
import { steps } from "./data";
import { useLoanRequestForm } from "../../context/LoanRequestProvider";
import { default as LoanForm } from "./Step1";
import { default as ProfileForm } from "./Step2";
import { default as IncomeForm } from "./Step3";

const LoanRequestForm = () => {
  const { currentStep } = useLoanRequestForm();
  // step1, step2, step3
  // const formSteps = Object.keys(form) as Array<keyof typeof form>;

  return (
    <div>
      <Stepper steps={steps} onReset={() => {}} currentStep={currentStep}>
        <LoanForm />
        <ProfileForm />
        <IncomeForm />
      </Stepper>
    </div>
  );
};

export default LoanRequestForm;
