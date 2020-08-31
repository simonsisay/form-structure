import React from "react";
import Input from "../Input";
import { FieldType } from "../../types";
import CurrencyInput from "../CurrencyInput";

type Props = {
  field: FieldType;
  register: any;
  hasError: boolean;
};

const RenderFormField = React.memo(({ field, register, hasError }: Props) => {
  if (field.type === "text") {
    return (
      <Input
        hasError={hasError}
        type={field.type}
        name={field.name}
        label={field.label}
        className={field.className}
        register={register}
        required={field.validation?.required}
        errorMessage={field.validation?.errorMessage}
        validate={field.validation?.validate}
      />
    );
  } else if (field.type === "money") {
    return <CurrencyInput value={0} onValueChange={() => {}} />;
  } else {
    throw new Error("Invalid field type.");
  }
});

export default RenderFormField;
