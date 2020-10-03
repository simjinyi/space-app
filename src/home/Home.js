import { Box, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  });

  return (
    <Box display="flex" flexDirection="column">
      <Box
        display="flex"
        flexGrow={1}
        p={1}
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h1">60 Cents Space Hub</Typography>
          <Button variant="contained" color="primary" style={{ margin: 5 }}>
            <Link to="/test">Community Event ... :)</Link>
          </Button>
          <Button variant="contained" color="primary" style={{ margin: 5 }}>
            Astronomical Facts!
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
            onClick={() => {
              alert("Earth is not flat, stop dreaming!!");
            }}
          >
            For Flat Earthers
          </Button>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 5 }}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            {counter}
          </Button>
        </Box>
      </Box>
      <Box display="flex" p={1}>
        Daily Pluto status updates: Not a planet
      </Box>
    </Box>
  );
}
