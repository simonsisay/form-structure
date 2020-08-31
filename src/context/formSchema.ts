import { FieldType } from "../types";

type SchemaType = {
  step1: FieldType[];
  step2: FieldType[];
  step3: FieldType[];
};

export const formSchema: SchemaType = {
  step1: [
    {
      name: "loanType",
      label: "Loan Type",
      type: "text",
      defaultValue: "",
      validation: {
        required: true,
      },
    },
    {
      name: "amount",
      type: "money",
      label: "Amount",
      validation: {
        required: true,
        errorMessage: "This field can not be blank",
        // validate: (value) => parseInt(value) > 10000,
      },
    },
  ],
  step2: [
    {
      name: "firstName",
      type: "text",
      label: "First name",
      className: "first-name",
      validation: {
        required: true,
        errorMessage: "This field can not be blank",
      },
    },
    {
      name: "lastName",
      label: "Last name",
      className: "last-name",
      type: "text",
      validation: {
        required: true,
        errorMessage: "This field can not be blank",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      validation: {
        required: true,
        errorMessage: "This field can not be blank",
      },
    },
  ],
  step3: [
    {
      name: "incomeAmount",
      label: "Income Amount",
      type: "text",
      validation: {
        required: true,
        errorMessage: "This field can not be blank",
      },
    },
  ],
};
