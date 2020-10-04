import { Box, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import "./Home.css";
import backgroundVideo1 from "../videos/bg.mp4";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          right: 0,
          bottom: 0,
          minWidth: "100%",
          minHeight: "100%",
          zIndex: -999,
        }}
      >
        <source src={backgroundVideo1} type="video/mp4" />
      </video>
      <Box display="flex" flexDirection="column">
        <Box
          display="flex"
          flexGrow={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexDirection="column">
            <Typography variant="h1">60 Cents Space Hub</Typography>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                style={{ margin: 5 }}
              >
                Space Around You
              </Button>
            </Link>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth={true}
                style={{ margin: 5 }}
              >
                Quiz Minigame
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              style={{ margin: 5 }}
              fullWidth={true}
              onClick={() => {
                setOpen(true);
              }}
            >
              For Flat Earthers
            </Button>
          </Box>
        </Box>
        <Box display="flex">Daily Pluto status updates: Not a planet</Box>
      </Box>
      <AlertDialog
        open={open}
        handleClose={() => setOpen(false)}
        title="For Flat Earthers"
        description="Earth is not flat, stop dreaming!"
        buttonText="Understood"
      />
    </>
  );
}
