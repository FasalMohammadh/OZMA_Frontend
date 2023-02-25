import { useRef, useState } from "react";

import MainLayout from "@/Components/Layouts/MainLayout";

import FormContext, { FormTypes } from "@/Context/FormContext";

import Welcome from "@/Page/Welcome";
import PersonalDetails, {
  type PersonalDetailsInputs,
} from "@/Page/PersonalDetails";
import Otp from "@/Page/Otp";
import AccountDetails from "@/Page/AccountDetails";
import MembershipCard from "@/Page/MembershipCard";

type keys = keyof typeof FormTypes;

const lookUpFormStep: {
  [k in keys]: () => JSX.Element;
} = {
  WELCOME: Welcome,
  PERSONAL_DETAILS: PersonalDetails,
  MEMBERSHIP_CARD: MembershipCard,
  ACCOUNT_DETAILS: AccountDetails,
  // [FormTypes.OTP]: Otp,
};

const App = () => {
  const [formStep, setFormStep] = useState<keyof typeof FormTypes>(
    FormTypes.WELCOME
  );
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsInputs>(
    {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      whatsAppNumber: "",
      email: "",
    }
  );

  const store = useRef({ nic: "", imageUrl: "" }).current;

  const FormStep = lookUpFormStep[formStep];

  return (
    <MainLayout>
      <FormContext.Provider
        value={{
          formStep,
          setFormStep,
          personalDetails,
          setPersonalDetails,
          store,
        }}
      >
        <FormStep />
      </FormContext.Provider>
    </MainLayout>
  );
};

export default App;
