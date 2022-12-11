import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoiZmFyb3VrMiIsImEiOiJjbGJpbWQ0NngwcDA1M3BtbzFqbnBxeWRmIn0.vSbdGW0XBeAXUvfQGg3qOQ';

const map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(25.109734500000002);
  const [lat, setLat] = useState(60.3069735);
  const [zoom, setZoom] = useState(13);
  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
<div>
<div ref={mapContainer} className="map-container" style={{height: '100vh'}} />
</div>
  )
}

export default map