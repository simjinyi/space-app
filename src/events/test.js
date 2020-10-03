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
  const [loc, setLoc] = useState({ lng: 5, lat: 34, zoom: 2 });

  useEffect(() => {
    db.collection("test").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc, idx) => ({ key: idx, ...doc.data() })));
    });
  }, []);

  const testMapRef = useRef(null);

  const map = new mapboxgl.Map({
    container: testMapRef.current,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [loc.lng, loc.lat],
    zoom: loc.zoom,
  });

  mapboxgl.accessToken = "MAPBOX_ACCESS_TOKEN";

  return (
    <>
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <div ref={(el) => (testMapRef = el)}></div>
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
