import PropTypes from 'prop-types'
import React, { Component } from 'react'
import axios from 'axios'
const api= axios.create({
  baseURL: `http://localhost:8082/event/`
})

export default class Seeds extends Component {

  state ={
    
  }
  constructor(){
    super();
    api.get('/').then(res =>{
      // res.headers('Access-Control-Allow-Origin')
      console.log(res.data);
    })
  }

  
  render() {
    return (
      <div class="container bg-primary mt-3">
        <div class="row">
          <div class="col">col1</div>
          <div class="col">col2</div>
        </div>
      </div>
    )
  }
}
