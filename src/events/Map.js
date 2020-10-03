import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import { Box, Card } from "@material-ui/core";
import mapboxgl from "mapbox-gl";

export default function Map() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  const [data, setData] = useState([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("test").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc, idx) => ({ key: idx, ...doc.data() })));
    });

    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2ltamlueWkiLCJhIjoiY2tmdGZ5azh5MGh0ajJzcXEydGUyYzhhaCJ9.CyiAKk9np2yG6S3TE60joA";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
    );

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

    // clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
      />

      <Box display="flex">
        <Box
          display="flex"
          flex={1}
          className="map-container"
          ref={mapContainerRef}
        />
        <Box position="absolute"></Box>
      </Box>
    </>
  );
}
