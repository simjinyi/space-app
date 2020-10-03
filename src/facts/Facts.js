import { Box, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import configs from "../configs/dbConfigs";
import "./Facts.css";

export default function Facts() {

  if (!firebase.apps.length) {
    firebase.initializeApp(configs);
  }

  const db = firebase.firestore();

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  });



  db.collection("test").add({
    name: "test",
    email: "test@test.com",
  });

  return (
    
    <h3><p>Table of astronomical locations</p></h3>
  );
}
