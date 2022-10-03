import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <>
      <div className="info-map">
        Hennadii Bondarenko
        <br />
        1312 12 Avenue SW, <br />
        Calgary, Alberta. Canada <br />
        <span>hennadiibondarenko@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer
          center={[51.04242883759489, -114.09167981022881]}
          zoom={13}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[51.04242883759489, -114.09167981022881]}>
            <Popup>Hennadii lives here, come over for a cup of coffee</Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}

export default Map
