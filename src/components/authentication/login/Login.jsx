import React from 'react'
import './Login.css'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';

function Login() {
  return (
    <div class="container-fluid bg-*">
    <div class="row justify-content-center">
      <div class="left-side col-5">
      <p class="h2">Bring the change</p>
      </div>
      <div class="right-side col-5">
      <Formik
        initialValues={{
          userName: '',
          password: '' 
            }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          console.log(JSON.stringify(values))
         console.log(values.userName)
         console.log(values.password)
         }}
      >
        <Form>
          <div class="row">
          <p class="h2">Check out the new seeds and events</p>
          </div>
        <div class="row form-group mt-3">
          <label htmlFor="userName" class="col-sm">UserName</label>
          <Field id="userName" name="userName" placeholder="Jane" class="col form-control"/>
          </div>
          <div class="row form-group mt-3" >
          <label htmlFor="password" class="col-sm col-form-label">Password</label>
          <Field
            id="password"
            name="password"
            type="password" class="col form-control"
          />
          </div>
           <div class="form-group mt-3  d-flex justify-content-end">
          <Button type="reset" class="btn btn-warning">Reset</Button>
          <Button type="submit" class="btn btn-dark">Login</Button>
          <Button type="signup" class="btn btn-light">SignUp</Button>
          </div>
        </Form>
      </Formik>
      </div>
    </div>
  </div>
  )
}

export default Login