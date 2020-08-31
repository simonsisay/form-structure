import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLoanRequestForm } from "../../context/LoanRequestProvider";
import RenderFormField from "../RenderFormField";
import { getProperty } from "../../utils";

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .input,
  button {
    grid-column: span 2;
    margin-bottom: 12px;
  }

  .input input {
    width: 100%;
  }

  .first-name,
  .last-name {
    grid-column: span 1;
  }
`;

type LoanFormInputType = {
  loanType: string;
  amount: number;
};

const Step2 = () => {
  const { form, onNext } = useLoanRequestForm();
  const { register, handleSubmit, errors } = useForm<LoanFormInputType>();

  const onSubmit = (data: LoanFormInputType) => {
    console.log(data);
    onNext();
  };

  return (
    <Form>
      {form.step2.map((field) => (
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

export default Step2;
