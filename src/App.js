import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';


class App extends Component() {
render() {
  return (
    <div className="App">
    <Map
        id="myMap"
        options={{
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        }}
        onMapLoad={map => {
           let marker = new window.google.maps.Marker({
            position: { lat: 41.0082, lng: 28.9784 },
            map: map,
            title: 'Hello Istanbul!'
          });
          marker.addListener('click', e => {
            this.createInfoWindow(e, map)
          })
        }}
      />
    </div>
  );
}
}
export default App;
