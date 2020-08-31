import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLoanRequestForm } from "../../context/LoanRequestProvider";
import RenderFormField from "../RenderFormField";
import { getProperty } from "../../utils";

const Form = styled.form``;

type LoanFormInputType = {
  loanType: string;
  amount: number;
};

const Step3 = () => {
  const { form } = useLoanRequestForm();
  const { register, handleSubmit, errors } = useForm<LoanFormInputType>();

  const onSubmit = (data: LoanFormInputType) => {
    console.log(data);
  };

  return (
    <Form>
      {form.step3.map((field) => (
        <RenderFormField
          hasError={getProperty(errors, field.name as any) ? true : false}
          register={register}
          field={field}
        />
      ))}
      <button onClick={handleSubmit(onSubmit)}>Next</button>
    </Form>
  );
};

export default Step3;
