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
          <Typography variant="h1">60 Cents</Typography>
          <Button variant="contained" color="primary" style={{ margin: 5 }}>
            Test Button 1
          </Button>
          <Button variant="contained" color="primary" style={{ margin: 5 }}>
            Test Button 2
          </Button>
        </Box>
      </Box>
      <Box display="flex" p={1}>
        {"I'm a flexbox container!"}
      </Box>
    </Box>
  );
}
