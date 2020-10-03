import { Box, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import "./form.css";

export default function Form() {
  const [eventType, setEventType] = useState(0);

  if (eventType == 0) {
    return (
      <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Event Type</FormLabel>
        <RadioGroup aria-label="eventType" name="eventType" onChange={(event) => { 
          setEventType(event.target.value);
         }}>
          <FormControlLabel value="0" control={<Radio />} label="Interactive" />
          <FormControlLabel value="1" control={<Radio />} label="Information" />
          <FormControlLabel value="2" control={<Radio />} label="Events" />
        </RadioGroup>
      </FormControl>
      <form>
        <h1>Type 1</h1>
        <input type="checkbox" id="vehicle1" name="vehicle1" />
      <label for="vehicle1"> Museum</label><br/>
      <input type="checkbox" id="vehicle2" name="vehicle2" />
      <label for="vehicle2"> Observatory</label><br/>
      <input type="checkbox" id="vehicle3" name="vehicle3" />
      <label for="vehicle3"> Society</label><br/>
      <input type="checkbox" id="vehicle3" name="vehicle3" />
      <label for="vehicle3"> Shop</label><br/>
      <input type="checkbox" id="vehicle3" name="vehicle3" />
      <label for="vehicle3"> Institution</label><br/>
      </form>
      </>
    );
  } else if (eventType == 1) {
    return (<>
      <FormControl component="fieldset">
        <FormLabel component="legend">Event Type</FormLabel>
        <RadioGroup aria-label="eventType" name="eventType" onChange={(event) => { 
          setEventType(event.target.value);
         }}>
          <FormControlLabel value="0" control={<Radio />} label="Interactive" />
          <FormControlLabel value="1" control={<Radio />} label="Information" />
          <FormControlLabel value="2" control={<Radio />} label="Events" />
        </RadioGroup>
      </FormControl>
      <form>
        <h1>Type 2</h1>
        <label for="fname">Title:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Description:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>

        <label for="lname">Time:</label><br/>
        <input type="text" id="lname" name="lname"/>
        &nbsp;
        to
        &nbsp;
        <input type="text" id="lname" name="lname"/><br/>

        <label for="lname">Location:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
      </form>
      </>);
  } else {
    return (<>
      <FormControl component="fieldset">
        <FormLabel component="legend">Event Type</FormLabel>
        <RadioGroup aria-label="eventType" name="eventType" onChange={(event) => { 
          setEventType(event.target.value);
         }}>
          <FormControlLabel value="0" control={<Radio />} label="Interactive" />
          <FormControlLabel value="1" control={<Radio />} label="Information" />
          <FormControlLabel value="2" control={<Radio />} label="Events" />
        </RadioGroup>
      </FormControl>
      <form>
        <h1>Type 3</h1>
        <label for="fname">Event name:</label><br/>
        <input type="text" id="fname" name="fname"/><br/>
        <label for="lname">Event description:</label><br/>
        <input type="text" id="lname" name="lname"/><br/>
        <label for="lname">Date:</label><br/>
        <input type="text" id="lname" name="lname"/>
        &nbsp;
        to
        &nbsp;
        <input type="text" id="lname" name="lname"/><br/>
        <label for="lname">Time:</label><br/>
        <input type="text" id="lname" name="lname"/>
        &nbsp;
        to
        &nbsp;
        <input type="text" id="lname" name="lname"/><br/>
      </form>
      </>);
  }
}
