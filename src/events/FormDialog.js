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
import firebase from "firebase";
import configs from "../configs/dbConfigs";

export default function FormDialog({ open, handleClose }) {
  const [selection, setSelection] = useState("Interactive");
  const [data, setData] = useState({});

  let dataSubmit = {};

  let form = null;

  switch (selection) {
    case "Interactive":
      dataSubmit = { type: "Interactive" };
      form = (
        <>
          <Radio />
          <Checkbox
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, e };
            }}
          />
          <Textfill
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, e };
            }}
          />
        </>
      );
      break;

    case "Information":
      dataSubmit = { type: "Information" };
      form = (
        <>
          <Radio />
          <Textfill
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, e };
            }}
          />
        </>
      );
      break;

    default:
      dataSubmit = { type: "Event" };
      form = (
        <>
          <Radio handleChange={(e) => setSelection(e)} />
          <Textfill1
            handleChange={(e) => {
              dataSubmit = { ...dataSubmit, e };
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
      <DialogContent>{form}</DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Post
        </Button>
      </DialogActions>
    </Dialog>
  );
}
