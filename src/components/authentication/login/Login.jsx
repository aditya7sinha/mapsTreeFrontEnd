import React from 'react'
import './Login.css'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import mainimg from '../main.png'
function Login() {
  return (
    <div class="container-fluid bg-* mt-5">
    <div class="row justify-content-center">
      <div class="left-side col-5">
      <p class="h2">Bring the change</p>
      <img src={mainimg} width="340" height="340" />
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
          <button type="reset" class="btn btn-warning">Reset</button>
          <button type="submit" class="btn btn-dark">Login</button>
          <button type="signup" class="btn btn-light">SignUp</button>
          </div>
        </Form>
      </Formik>
      </div>
    </div>
  </div>
  )
}

export default Login