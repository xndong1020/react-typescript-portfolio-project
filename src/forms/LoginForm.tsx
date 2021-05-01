import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { LoginFormSchema } from './LoginFormSchema'
import { LoginUserAsync } from '../_actions/auth/actionCreators'
import { RootState } from '../_store/configureStore'
import { useHistory } from 'react-router-dom'

export const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { hasLoggedIn } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (hasLoggedIn) {
      history.push('/home')
    }
  }, [hasLoggedIn, history])

  const handleSubmit = (user: { email: string; password: string }) => {
    dispatch(LoginUserAsync(user))
  }

  const initialValues = { email: '', password: '' }

  return (
    <>
      <h1>Login Form</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginFormSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values)
          actions.setSubmitting(false)
        }}
        validateOnBlur
      >
        {({ errors, touched }) => (
          <Form>
            <label htmlFor='email'>Email</label>
            <div>
              <Field id='email' name='email' placeholder='email' type='email' />
            </div>
            <div>
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div>
              <Field
                id='password'
                name='password'
                placeholder='password'
                type='password'
              />
            </div>
            <div>
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </div>
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}
