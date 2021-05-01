import React from 'react'
import { LoginForm } from '../forms/LoginForm'
import { SecondaryLayout } from '../layouts/SecondaryLayout'

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <SecondaryLayout>
        <LoginForm />
      </SecondaryLayout>
    </>
  )
}
