import React, { Component } from 'react';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util    //objects
} from "react-openlayers";


export default class Dashboard extends Component {
  render() {
    return (
      <div  class="bg-* mx-4 mt-4">
        <div class="row">
          <div class="col-2 bg-dark">Col1</div>
          <div class="col-10">
            <Map view={{center: [0, 0], zoom: 2}} >
                   
            </Map>
            </div>
        </div>
      </div>
    )
  }
}
