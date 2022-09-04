import React from 'react'
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';
import mainimg from '../main.png'
import './SignUp.css';
import axios from 'axios';

const api= axios.create({
  baseURL: `http://localhost:8081/user/register`})

function SignUp() {

    return (
    <>
    <div class="container-fluid mt-2">
  <div class="row justify-content-center">
    <div class="left-side2 col-4">
    <p class="h2">Join us today!! Create, Meet like minded people, support </p>
    <img src={mainimg} width="340" height="340" />
    </div>
    <div class="right-side2 col-4">
    <Formik
      initialValues={{
        userName: '',
        password: '',
        age: '',
        phoneNumber: '',
        latitude: '',
        longitude: '',
        country: '',
        email: ''
          }}
      onSubmit= { async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        let response = await axios.post("/",{ values })
       console.log(response)
       console.log(JSON.stringify(values))
       console.log(values.userName)
       console.log(values.password)
       console.log(values.age)
       console.log(values.country)
       console.log(values.phoneNumber)
       console.log(values.latitude)
       console.log(values.longitude)
       console.log(values.email)
      }}
    >
      <Form>
        <div class="row">
        <p class="h2 font-color-red">Join Today and be part of our community</p>
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
         <div class="row form-group mt-3">
        <label htmlFor="email" class="col-sm">Email</label>
        <Field id="email" name="email" placeholder="Jane@gmail.com" class="col form-control"/>
        </div>
         <div class="row form-group mt-3" >
        <label htmlFor="age" class="col-sm col-form-label">Age</label>
        <Field
          id="age"
          name="age"
          type="number" class="col form-control"
        />
         </div>
         <div class="row form-group mt-3" >
        <label htmlFor="phoneNumber" class="col-sm col-form-label">Phone Number</label>
        <Field
          id="phoneNumber"
          name="phoneNumber"
          type="number" class="col form-control"
        />
         </div>
         <div class="row form-group mt-3" >
        <label htmlFor="latitude" class="col-sm col-form-label">Latitude</label>
        <Field
          id="latitude"
          name="latitude"
          type="number" class="col form-control"
        />
         </div>
         <div class="row form-group mt-3" >
        <label htmlFor="longitude" class="col-sm col-form-label">Longitude</label>
        <Field
          id="longitude"
          name="longitude"
          type="number" class="col form-control"
        />
         </div>
         <div class="row form-group mt-3" >
        <label htmlFor="age" class="col-sm col-form-label">Age</label>
        <Field
          id="age"
          name="age"
          type="number" class="col form-control"
        />
         </div>
         <div class="row form-group mt-3" >
        <label htmlFor="country" class="col-sm col-form-label">Country</label>
        <Field
          id="country"
          name="country"
          class="col form-control"
        />
         </div>
         <div class="form-group mt-3  d-flex justify-content-end">
        <button type="reset" class="btn btn-secondary">Cancel</button>
        <button type="signup" class="btn btn-success">SignUp</button>
        </div>
      </Form>
    </Formik>
    </div>
  </div>
</div>
</>
  )
}

export default SignUp