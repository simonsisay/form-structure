import React from "react";
import { Container } from "./styles";

type Props = {
  label: string;
  name: string;
  type?: string;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
  required: boolean | undefined;
  register: any;
  disabled?: boolean;
  validate?: (value: string | number) => boolean;
  className?: string;
};

const Input = React.memo(
  ({
    label,
    name,
    type,
    hasError = false,
    errorMessage,
    placeholder,
    required,
    register,
    disabled,
    validate,
    className,
  }: Props) => {
    return (
      <Container hasError={hasError} className={`input ${className}`}>
        <div className="input-header">
          <p className="label">{label}</p>
          {hasError && <p className="error-message">{errorMessage}</p>}
        </div>
        <input
          disabled={disabled}
          placeholder={placeholder}
          className="input"
          name={name}
          type={type}
          ref={
            register &&
            register({
              required: required,
              validate: validate,
            })
          }
        />
      </Container>
    );
  }
);

export default Input;
