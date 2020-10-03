import { Box, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Facts.css";

export default function Facts() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${counter} times!`;
  });

  return (
    
    <h3><p>Table of astronomical locations</p>
    <table className = "Table1">
  <tr>
    <th>Name</th>
    <th>Location</th>
    <th>Type</th>
  </tr>
  <tr>
    <td>Astronomical Society of Penang</td>
    <td>Bayan Lepas</td>
    <td><a href="https://astronomicalsocietyofpenang.com/">Click Here</a></td>
  </tr>
  <tr>
    <td>Sheikh Tahir Astronomical Center</td>
    <td>Balik Pulau</td>
    <td>Astronomical Center</td>
  </tr>
  <tr>
    <td>Tech Dome</td>
    <td>George Town</td>
    <td>Musuem</td>
  </tr>
</table>
</h3>
  );
}
