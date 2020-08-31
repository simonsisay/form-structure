import { StepsType } from "../../types";

export const steps: StepsType[] = [
  {
    number: "01",
    title: "Loan",
    description:
      "Tell us about the loan you’re looking for. Your enquiry will not affect your credit score.",
  },
  {
    number: "02",
    title: "Profile",
    description:
      "This information will be used to pull a credit report. Your enquiry will not affect your credit score.",
  },
  {
    number: "03",
    title: "Income",
    description: "We need to learn more about your income",
    additionalDetail: `<p>
        This is the final step so please{" "}
        <span className="highlight"> review </span> all your information before
        submitting.
      </p>`,
  },
];
