import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import { Button } from "@material-ui/core";
import mapboxgl from "mapbox-gl";

export default function Test() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  const db = firebase.firestore();
  const [data, setData] = useState([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
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
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <div className="map-container" ref={mapContainerRef} />
      <ul>
        {data.map((item) => (
          <li key={item.key}>{item.name}</li>
        ))}
      </ul>
      <Button
        onClick={() => {
          db.collection("test").add({
            name: "test",
            email: "test@test.com",
          });
        }}
      >
        Click Me!
      </Button>
    </>
  );
}
