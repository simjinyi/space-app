import React, { Fragment, useEffect, useRef, useState } from "react";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Fab,
  TextField,
  Typography,
} from "@material-ui/core";
import mapboxgl from "mapbox-gl";
import axios from "axios";

export default function Map() {
  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  let markers = [];

  const [eventType, setEventType] = useState(0);
  const [data, setData] = useState([]);
  const [inputSearchLocation, setInputSearchLocation] = useState(null);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [searchState, setSearchState] = useState(false);

  const mapContainerRef = useRef(null);
  let map = null;

  const ACCESS_TOKEN =
    "pk.eyJ1Ijoic2ltamlueWkiLCJhIjoiY2tmdGZ5azh5MGh0ajJzcXEydGUyYzhhaCJ9.CyiAKk9np2yG6S3TE60joA";

  useEffect(() => {
    const db = firebase.firestore();
    db.collection("test").onSnapshot((snapshot) => {
      setData(snapshot.docs.map((doc, idx) => ({ key: idx, ...doc.data() })));
    });
  }, []);

  useEffect(() => {
    mapboxgl.accessToken = ACCESS_TOKEN;

    map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      center: [100.209709, 5.438184],
      zoom: 10,
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

    for (let i = 0; i < markers.length; i++) markers.remove();
    markers = [];

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${inputSearchLocation}.json?access_token=${ACCESS_TOKEN}`
      )
      .then((res) => {
        let marker = new mapboxgl.Marker()
          .setLngLat(res.data.features[1].geometry.coordinates)
          .addTo(map);

        map.flyTo({ center: res.data.features[1].geometry.coordinates });
        markers.push(marker);
      })
      .catch((err) => {
        console.log(err);
      });

    // clean up on unmount
    return () => map.remove();
  }, [searchState]);

  let someValue = null;

  // if (eventType == 0) {
  //   someValue = (
  //     <>
  //       <form>
  //         <h1>Interactive</h1>
  //         <input type="checkbox" id="vehicle1" name="vehicle1" />
  //         <label for="vehicle1"> Museum</label>
  //         <br />
  //         <input type="checkbox" id="vehicle2" name="vehicle2" />
  //         <label for="vehicle2"> Observatory</label>
  //         <br />
  //         <input type="checkbox" id="vehicle3" name="vehicle3" />
  //         <label for="vehicle3"> Society</label>
  //         <br />
  //         <input type="checkbox" id="vehicle3" name="vehicle3" />
  //         <label for="vehicle3"> Shop</label>
  //         <br />
  //         <input type="checkbox" id="vehicle3" name="vehicle3" />
  //         <label for="vehicle3"> Institution</label>
  //         <br />

  //         <br />
  //         <input type="submit" value="Submit" />
  //       </form>
  //     </>
  //   );
  // } else if (eventType == 1) {
  //   someValue = (
  //     <>
  //       <FormControl component="fieldset">
  //         <FormLabel component="legend">Event Type</FormLabel>
  //         <RadioGroup
  //           aria-label="eventType"
  //           name="eventType"
  //           onChange={(event) => {
  //             setEventType(event.target.value);
  //           }}
  //         >
  //           <FormControlLabel
  //             value="0"
  //             control={<Radio />}
  //             label="Interactive"
  //           />
  //           <FormControlLabel
  //             value="1"
  //             control={<Radio />}
  //             label="Information"
  //           />
  //           <FormControlLabel value="2" control={<Radio />} label="Events" />
  //         </RadioGroup>
  //       </FormControl>
  //       <form>
  //         <h1>Type 2</h1>
  //         <label for="fname">Title:</label>
  //         <br />
  //         <input type="text" id="fname" name="fname" />
  //         <br />
  //         <label for="lname">Description:</label>
  //         <br />
  //         <input type="text" id="lname" name="lname" />
  //         <br />
  //         <label for="lname">Time:</label>
  //         <br />
  //         <input type="text" id="lname" name="lname" />
  //         &nbsp; to &nbsp;
  //         <input type="text" id="lname" name="lname" />
  //         <br />
  //         <label for="lname">City:</label>
  //         <br />
  //         <input type="text" id="cityName" name="lname" />
  //         <br />
  //         <label for="lname">Country:</label>
  //         <br />
  //         <input type="text" id="countryName" name="lname" />
  //         <br />
  //         <input type="submit" value="Search Location" />
  //         <br />
  //         <br />
  //         <input type="submit" value="Submit" />
  //       </form>
  //     </>
  //   );
  // } else {
  //   someValue = (
  //     <>
  //       <form>
  //         <h1>Type 3</h1>
  //         <label for="fname">Event name:</label>
  //         <br />
  //         <input type="text" id="fname" name="fname" />
  //         <br />
  //         <label for="lname">Event description:</label>
  //         <br />
  //         <input type="text" id="lname" name="lname" />
  //         <br />
  //         <label for="lname">Date:</label>
  //         <br />
  //         <input type="text" id="lname" name="lname" />
  //         &nbsp; to &nbsp;
  //         <input type="text" id="lname" name="lname" />
  //         <br />
  //         <label for="lname">Time:</label>
  //         <br />
  //         <input type="text" id="lname" name="lname" />
  //         &nbsp; to &nbsp;
  //         <input type="text" id="lname" name="lname" />
  //         <br />
  //         <label for="fname">Participant number:</label>
  //         <br />
  //         <input type="text" id="fname" name="fname" />
  //         <br />
  //         <label for="fname">Participation fee:</label>
  //         <br />
  //         <input type="text" id="fname" name="fname" />
  //         <br />
  //         <label for="fname">Targeted audience:</label>
  //         <br />
  //         <input type="text" id="fname" name="fname" />
  //         <br />
  //         <br />
  //         <input type="submit" value="Submit" />
  //       </form>
  //     </>
  //   );
  // }

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
        <Fab
          variant="extended"
          onClick={() => setDrawerOpened(true)}
          color="primary"
          aria-label="add"
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            zIndex: 999,
          }}
        >
          <p>Add Item</p>
        </Fab>
        <Drawer
          anchor="right"
          open={drawerOpened}
          onClose={() => setDrawerOpened(false)}
        >
          <Box
            display="flex"
            flex={1}
            style={{ padding: 20 }}
            flexDirection="column"
          >
            <Box display="flex" justifyContent="center">
              <Typography variant="h4" component="h2">
                Search
              </Typography>
            </Box>
            <Box display="flex" flex={1}>
              <form
                display="flex"
                flex={1}
                noValidate
                autoComplete="off"
                style={{ paddingTop: 20 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearchState(!searchState);
                }}
              >
                <TextField
                  margin="dense"
                  fullWidth={true}
                  label="Location"
                  onChange={(e) => setInputSearchLocation(e.target.value)}
                />
                <Button
                  variant="contained"
                  fullWidth={true}
                  onClick={(e) => {
                    setSearchState(!searchState);
                  }}
                >
                  Search
                </Button>
                <Divider />
                {someValue}
              </form>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
