import type React from "react";
import { createContext } from "react";

import { type PersonalDetailsInputs } from "@/Page/PersonalDetails";

enum FormTypes {
  // OTP = "OTP",
  WELCOME = "WELCOME",
  ACCOUNT_DETAILS = "ACCOUNT_DETAILS",
  PERSONAL_DETAILS = "PERSONAL_DETAILS",
  MEMBERSHIP_CARD = "MEMBERSHIP_CARD",
}

interface FormContextType {
  formStep: keyof typeof FormTypes;
  setFormStep: React.Dispatch<React.SetStateAction<keyof typeof FormTypes>>;
  personalDetails: PersonalDetailsInputs;
  setPersonalDetails: React.Dispatch<
    React.SetStateAction<PersonalDetailsInputs>
  >;
  store: { nic: string; imageUrl: string };
}

const FormContext = createContext<FormContextType>({} as FormContextType);

export default FormContext;
export { FormTypes };
export type { FormContextType };
