import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Map.module.css";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFyb3VrMiIsImEiOiJjbGJpbWQ0NngwcDA1M3BtbzFqbnBxeWRmIn0.vSbdGW0XBeAXUvfQGg3qOQ";

import { useSelector } from "react-redux";
import Link from "next/link";

const map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(25.109734500000002);
  const [lat, setLat] = useState(60.3069735);
  const [zoom, setZoom] = useState(20);
  const ameneties = useSelector((state: any) => state.handleAmeneties);

  useEffect(() => {
    if (
      ameneties !== null &&
      ameneties[0] !== undefined &&
      ameneties !== "default"
    ) {
      setLng(ameneties[0].node.place.lon);
      setLat(ameneties[0].node.place.lat);
    }

    const map = new mapboxgl.Map({
      container: mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: 20,
    });

    if (
      ameneties !== null &&
      ameneties[0] !== undefined &&
      ameneties !== "default"
    ) {
      ameneties.map((amenetie: any) =>
        new mapboxgl.Marker()
          .setLngLat([amenetie.node.place.lon, amenetie.node.place.lat])
          .addTo(map)
      );
    }

    map.addControl(new mapboxgl.NavigationControl(), "top-right");
  }, [lng]);

  return (
    <div>
      <div
        ref={mapContainer}
        className="map-container"
        style={{ height: "100vh" }}
      />
      <Link href="/">
        <button className={styles.btn}>Go Back</button>
      </Link>
    </div>
  );
};

export default map;
