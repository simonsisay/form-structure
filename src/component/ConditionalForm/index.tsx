import React, { useEffect } from "react";
import { FieldType } from "../../types";
import { getProperty } from "../../utils";

type Props = {
  field: FieldType;
  unregister: any;
  register: any;
  values: any;
  children: React.ReactElement;
};

const Conditional: React.FC<Props> = ({
  field,
  children,
  unregister,
  register,
  values,
}) => {
  useEffect(() => {
    register({ name: field.name }, { ...field.validation });
    return () => {
      field.conditions?.forEach((condition) => {
        const fieldToBeUnregistered = getProperty(
          condition,
          condition.when as any
        );
        unregister(fieldToBeUnregistered);
      });
    };
  }, [register, unregister, field, values]);
  return children;
};

export default Conditional;
