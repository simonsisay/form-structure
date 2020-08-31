import React, { ReactNode } from "react";
import { Container } from "./styles";
import { StepsType } from "../../types";

type Props = {
  steps: StepsType[];
  children: ReactNode;
  onReset?: () => void;
  currentStep: number;
};

const Stepper: React.FC<Props> = ({ steps, children, currentStep }) => {
  return (
    <Container>
      <div className="progress" />
      <div className="left-content">
        {steps.map((step, index) =>
          index + 1 === currentStep ? (
            <div>
              <h1 className="number">{step.number}</h1>
              <h2 className="title">{step.title}</h2>
              <p className="description">{step.description}</p>
            </div>
          ) : null
        )}
      </div>
      <div className="right-content">
        {React.Children.map(children, (child, index) => {
          return index + 1 === currentStep ? <span>{child}</span> : null;
        })}
      </div>
    </Container>
  );
};

export default Stepper;
