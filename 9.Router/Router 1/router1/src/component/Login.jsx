import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  let navigate = useNavigate()
  return (
    <div>
      <h2>Login</h2>
      <Formik
        initialValues={{
          account: '',
          password: ''
        }}
        onSubmit={(values) => {
          if (values.account === "admin@gmail.com" && values.password === "letmein") {
            alert("Successfully")
            navigate("/home")
          } else {
            alert("No")
          }
        }}
      >
        <Form>
          <Field name="account" type="email" placeholder="Email"/>
          <Field name="password" type="password" placeholder="Password"/>
          <button>Login</button>
        </Form>
      </Formik>
    </div >
  )
}
