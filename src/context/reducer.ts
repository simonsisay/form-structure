type State = {
  currentStep: number;
  isSubmitting: boolean;
  isUpdating: boolean;
  form: any; // for now
};

type Action =
  | {
      type: "ON_INPUT_CHANGE";
      payload: { name: string; value: string | number };
    }
  | { type: "SET_UPDATING" }
  | { type: "ON_NEXT" }
  | { type: "ON_PREV" };

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ON_NEXT":
      return {
        ...state,
        currentStep:
          state.currentStep === 3 ? state.currentStep : state.currentStep + 1,
      };
    default:
      return state;
  }
};
