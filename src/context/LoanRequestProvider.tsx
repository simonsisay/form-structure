import React, { useReducer, useCallback, useContext } from "react";
import { reducer } from "./reducer";
import { formSchema } from "./formSchema";

const initialValues = {
  currentStep: 1,
  isSubmitting: false,
  isUpdating: false,
  setUpdating: () => {},
  handleFormChange: (step: number, name: string, value: any) => {},
  form: { ...formSchema },
  onNext: () => {},
};

const LoanRequestContext = React.createContext(initialValues);

const LoanRequestProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  const setUpdating = useCallback(() => {
    dispatch({ type: "SET_UPDATING" });
  }, [dispatch]);

  const onNext = useCallback(() => {
    dispatch({ type: "ON_NEXT" });
  }, [dispatch]);

  const handleFormChange = (step: number, name: string, value: any) => {};

  return (
    <LoanRequestContext.Provider
      value={{
        currentStep: state.currentStep,
        setUpdating,
        isUpdating: state.isUpdating,
        isSubmitting: state.isSubmitting,
        form: state.form,
        handleFormChange,
        onNext,
      }}
    >
      {children}
    </LoanRequestContext.Provider>
  );
};

export default LoanRequestProvider;

export const useLoanRequestForm = () => useContext(LoanRequestContext);
