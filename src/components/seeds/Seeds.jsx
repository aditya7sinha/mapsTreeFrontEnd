import PropTypes from 'prop-types'
import React, { useState } from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ReactMapGL from 'react-map-gl'
export default function Seeds() {

  const [viewPort, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100%',
    heigth: '100%',
    zoom: 10,
    // style: 'mapbox://styles/aditya7sinha/cl7nao01z008914nfs7qre72e'
  })


  return (
  <div className='container'>
  <div className="row"> <div className="col"><h4>Create Event</h4></div></div>
  <div className="row">
       <div className="col-4 border border-success">
         <Form>
          <Form.Group className="mb-3" controlId="formEventName">
             <Form.Label>Event Name</Form.Label>
            <Form.Control type="string" placeholder="Enter Event Name" />
           </Form.Group>

           <Form.Group className="mb-3" controlId="formEventDescription">
             <Form.Label>Event Description</Form.Label>
             <Form.Control as="textarea" placeholder="Event Description" />
           </Form.Group>

          <Form.Group className="mb-3" controlId="formEventLocation">
             <Form.Label>Event Location</Form.Label>
             <Form.Control type="text" placeholder="Latitude" />
             <Form.Control type="text" placeholder="Longitude" />
           </Form.Group>

           <Button variant="primary" type="submit">
             Create Event
           </Button>
         </Form>
       </div>
       <div className="col-8 border border-warning" style={{height:"400px", width:"100%"}}>
         <ReactMapGL  {...viewPort} mapboxAccessToken={'pk.eyJ1IjoiYWRpdHlhN3NpbmhhIiwiYSI6ImNsN24yczQxZjBoNWUzd28wZmgzMGI5ZngifQ.C8aGnAI2yvD3B_-x62zrJQ'} 
  mapStyle="mapbox://styles/aditya7sinha/cl7nao01z008914nfs7qre72e"> </ReactMapGL>
  </div>
  </div>
  </div>
  )
}
