import React, { useState } from 'react';
import { Marker } from 'react-map-gl';
import meteorImg from '../asteroid.png'
import styled from 'styled-components';
import Popup from './Popup'
import { ImgWrapper } from './core/styled'

export default function MarkerComp({latitude, longitude, name}) {
    const [ popupOpen, togglePopup ] = useState(false);

    function toggle() {
        if(popupOpen) {
        togglePopup(false);
        } else {
        togglePopup(true);
        }
    }

    return (
        <>
        <Marker latitude={latitude} longitude={longitude} >
            <ImgWrapper onClick={toggle}>
              <img src={meteorImg} alt="" style={{width: '10px', height: 10}}  />
            </ImgWrapper>
        </Marker>
        {popupOpen &&<Popup latitude={latitude} longitude={longitude} name={name} togglePopup={togglePopup} /> }
        </>
    )
}
