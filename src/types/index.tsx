import { ReactNode } from "react";

export type StepsType = {
  number: string;
  title: string;
  description: string;
  additionalDetail?: string | ReactNode;
};

type ConditionType = {
  when: string;
  is: string | number | boolean;
};

export type FieldType = {
  type: "text" | "number" | "money" | "select" | "radio" | "phone";
  name: string;
  label: string;
  value?: any;
  className?: string;
  defaultValue?: string | null;
  disabled?: boolean;
  isConditional?: boolean;
  conditions?: ConditionType[];
  options?: string[] | number[];
  validation?: {
    required: boolean;
    errorMessage?: string;
    validate?: (value: string | number) => boolean;
  };
};
