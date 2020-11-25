import React from 'react';
import { Popup } from 'react-map-gl';

export default function PopupComp({latitude, longitude, name, togglePopup}) {
    
    return (
    <Popup latitude={latitude} longitude={longitude} onClose={togglePopup}>   
        <div style={{fontWeight: 800}}> Name: {name}</div>
        <div> Latitude: {latitude}</div>
        <div> Longitude: {longitude}</div>
    </Popup> 
    )
}