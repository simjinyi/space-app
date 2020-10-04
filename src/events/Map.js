import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import { Box, Card, Paper, TextField } from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import axios from "axios";

export default function Map() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  const [data, setData] = useState([]);
  const mapContainerRef = useRef(null);
  let map = null;
  const ACCESS_TOKEN =
    "pk.eyJ1Ijoic2ltamlueWkiLCJhIjoiY2tmdGZ5azh5MGh0ajJzcXEydGUyYzhhaCJ9.CyiAKk9np2yG6S3TE60joA";

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("test").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc, idx) => ({ key: idx, ...doc.data() })));
    });

    mapboxgl.accessToken = ACCESS_TOKEN;

    map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [100.209709, 5.438184],
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

  setTimeout(() => {
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/Penang.json?access_token=${ACCESS_TOKEN}`
      )
      .then((res) => {
        console.log(res.data.features);
        let marker = new mapboxgl.Marker()
          .setLngLat(res.data.features[1].geometry.coordinates)
          .addTo(map);

        map.center = res.data.features[1].geometry.coordinates;
      })
      .catch((err) => {
        console.log(err);
      });
  }, 1000);

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
        <Box
          display="flex"
          position="absolute"
          style={{
            height: "100%",
            overflowY: "scroll",
            zIndex: 999,
            scrollbarWidth: 0,
          }}
        >
          <Paper
            display="flex"
            flex={1}
            flexDirection="column"
            alignItems="center"
          >
            <form noValidate autoComplete="off" style={{ paddingTop: 20 }}>
              <Box display="flex" flex={1} justifyContent="center">
                <TextField display="flex" flex={1} label="Search" />
              </Box>
            </form>
            {/* <Card style={{ width: 200, margin: 20 }}>
              <p>Testing</p>
            </Card>
            <Card style={{ width: 200, margin: 20 }}>
              <p>Testing</p>
            </Card>
            <Card style={{ width: 200, margin: 20 }}>
              <p>Testing</p>
            </Card>
            <Card style={{ width: 200, margin: 20 }}>
              <p>Testing</p>
            </Card> */}
          </Paper>
        </Box>
      </Box>
    </>
  );
}
