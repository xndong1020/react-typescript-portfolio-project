import React from "react";
import { LoginForm } from "../forms/LoginForm";
import { SecondaryLayout } from "../layouts/SecondaryLayout";

export const LoginPage = () => {
  return (
    <>
      <SecondaryLayout>
        <LoginForm />
      </SecondaryLayout>
    </>
  );
};
