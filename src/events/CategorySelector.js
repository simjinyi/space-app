import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function CategorySelector({ onChangeCallback }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Event Type</FormLabel>
      <RadioGroup
        aria-label="eventType"
        name="eventType"
        onChange={(event) => {
          setEventType(event.target.value);
        }}
      >
        <FormControlLabel value="0" control={<Radio />} label="Interactive" />
        <FormControlLabel value="1" control={<Radio />} label="Information" />
        <FormControlLabel value="2" control={<Radio />} label="Events" />
      </RadioGroup>
    </FormControl>
  );
}
