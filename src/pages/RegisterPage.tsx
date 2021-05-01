import React from "react";
import { RegisterForm } from "../forms/RegisterForm";
import { SecondaryLayout } from "../layouts/SecondaryLayout";

export const RegisterPage = () => {
  return (
    <>
      <SecondaryLayout>
        <RegisterForm />
      </SecondaryLayout>
    </>
  );
};
