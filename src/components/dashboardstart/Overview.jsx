import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
function Overview() {
  const [viewPort, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100%',
    heigth: '100%',
    zoom: 15,
    // style: 'mapbox://styles/aditya7sinha/cl7nao01z008914nfs7qre72e'
  })

  return (
    <div className="container my-3">
      <div className="row border border-success" style={{height:"800px", width:"100%"}}>
      <ReactMapGL
      {...viewPort} mapboxAccessToken={'pk.eyJ1IjoiYWRpdHlhN3NpbmhhIiwiYSI6ImNsN24yczQxZjBoNWUzd28wZmgzMGI5ZngifQ.C8aGnAI2yvD3B_-x62zrJQ'} 
      mapStyle="mapbox://styles/aditya7sinha/cl7nao01z008914nfs7qre72e"> </ReactMapGL>
      </div>
      </div>
  )
}

export default Overview