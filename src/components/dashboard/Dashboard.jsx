import React, { Component } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

export default class Dashboard extends Component {
  render() {
    const position = [51.505, -0.09]
    return (
      <div  class="bg-* mx-4 mt-4">
        <div class="row">
          <div class="col-2 bg-dark">Col1</div>
          <div class="col-10">
            </div>
        </div>
      </div>
    )
  }
}
