import { Box, Typography, Button } from "@material-ui/core";
import React from "react";
import "./Home.css";

export default function Home() {
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
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
          >
            Community Event ... :)
          </Button>
          <Button variant="contained" color="primary" style={{ margin: 5 }}>
            Astronomical Facts !
          </Button>
          <Button
            variant="contained"
            color="primary"
            style={{ margin: 5 }}
            onClick={() => {
              alert("Earth is not flat, stop dreaming !!");
            }}
          >
            For Flat Earthers 
          </Button>
        </Box>
      </Box>
      <Box display="flex" p={1}>
        Daily Pluto status updates: Not a planet
      </Box>
    </Box>
  );
}
