import React, { useState, useEffect } from 'react';
import ReactMapGl from 'react-map-gl';
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector, useDispatch, useStore } from 'react-redux';
import useWindowSize from '../utils/useWindowSize'
import Marker from './Marker';

import { usePosition } from 'use-position';


function MapWrapper() {
  const meteors = useSelector(store => store.mainReducer.meteors)
  const selectedMeteor = useSelector(store => store.mainReducer.selectedMeteor)
  const windowSize = useWindowSize();

  useEffect(()=>{
    if(windowSize){
      setViewport(viewport)
    }
  }, [windowSize])
 
  const [ viewport, setViewport ] = useState({
    latitude: 53.3498,
    longitude: -6.2603,
    width: "100%",
    height: "400px",
    margin: 'auto',
    zoom: 1
  });

  const {
    latitude,
    longitude,
    speed,
    timestamp,
    accuracy,
    error,
  } = usePosition();

  useEffect(() => {
    if(latitude && longitude) {
        //return an object with the 
        setViewport((prevState) => ({
          ...prevState,
          zoom: 1,
          latitude,
          longitude
        }));    
    }
  }, [latitude, longitude])

return (
    <ReactMapGl 
    {...viewport} 
    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    //to move map reset viewport
    onViewportChange={viewport => {
      setViewport(viewport)
    }}
    //choose map type here: https://studio.mapbox.com/
    mapStyle="mapbox://styles/greallra/ckh4yv72f0cc619p4btr5qlkf"
    >
    
    {/* Default - All meteors */}
    {!selectedMeteor && meteors.length > 0 && meteors.map((meteor,i)=>( <Marker latitude={meteor.geolocation.coordinates[1]} longitude={meteor.geolocation.coordinates[0]} name={meteor.name} key={i}/> ))}

    {/* Selected Meteor */}
    {selectedMeteor && 
        <Marker latitude={selectedMeteor.geolocation.coordinates[1]} longitude={selectedMeteor.geolocation.coordinates[0]} name={selectedMeteor.name}/>
    }
     
    {!latitude && !longitude && <ClipLoader size={20} color={"black"} loading={true} />}
    </ReactMapGl>  
  )
  
}

export default MapWrapper;