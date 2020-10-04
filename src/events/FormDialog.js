import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Textfill from "../user_input/textfill";
import Textfill1 from "../user_input/textfill1";
import Checkbox from "../user_input/checkbox";
import Radio from "../user_input/radio";
import Submit from "../user_input/Submit_button";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import axios from "axios";
import AlertDialog from "./AlertDialog";

export default function FormDialog({ open, handleClose }) {
  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  const [opened, setOpened] = useState(false);
  const [selection, setSelection] = useState("Interactive");
  const [data, setData] = useState({});

  let dataSubmit = {};
  let form = null;

  const submit = () => {
    const ACCESS_TOKEN =
      "pk.eyJ1Ijoic2ltamlueWkiLCJhIjoiY2tmdGZ5azh5MGh0ajJzcXEydGUyYzhhaCJ9.CyiAKk9np2yG6S3TE60joA";

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${dataSubmit.location}.json?access_token=${ACCESS_TOKEN}`
      )
      .then((res) => {
        const db = firebase.firestore();
        db.collection("events").add({
          ...dataSubmit,
          coordinate: res.data.features[1].geometry.coordinates,
        });
        setOpened(true);
      })
      .catch((err) => {
        console.log(err);
        const db = firebase.firestore();
        db.collection("events").add({
          ...dataSubmit,
          coordinate: null,
        });
      });
  };

  switch (selection) {
    case "Interactive":
      dataSubmit = { type: "Interactive" };
      form = (
        <>
          <Radio
            handleChange={(e) => {
              setSelection(e);
            }}
          />
          <Checkbox
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, ...e };
            }}
          />
          <Textfill
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, ...e };
            }}
          />
        </>
      );
      break;

    case "Information":
      dataSubmit = { type: "Information" };
      form = (
        <>
          <Radio
            handleChange={(e) => {
              setSelection(e);
            }}
          />
          <Textfill
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, ...e };
            }}
          />
        </>
      );
      break;

    default:
      dataSubmit = { type: "Event" };
      form = (
        <>
          <Radio
            handleChange={(e) => {
              setSelection(e);
            }}
          />
          <Textfill1
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, ...e };
            }}
          />
        </>
      );
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      value={selection}
      aria-labelledby="form-dialog-title"
      fullScreen
    >
      <DialogTitle id="form-dialog-title">Post</DialogTitle>
      <DialogContent>
        {form}
        <Submit onClick={submit} />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
      <AlertDialog
        open={opened}
        handleClose={() => setOpened(false)}
        title="Success"
        description="Data Inserted Successfully"
        buttonText="Okay"
      />
    </Dialog>
  );
}
