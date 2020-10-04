import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButtonsGroup({ handleChange, value }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Category</FormLabel>
      <RadioGroup
        aria-label="Category"
        name="cat1"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <FormControlLabel
          value="Interactive"
          control={<Radio />}
          label="Interactive"
        />
        <FormControlLabel
          value="Information"
          control={<Radio />}
          label="Information"
        />
        <FormControlLabel value="Event" control={<Radio />} label="Event" />
      </RadioGroup>
    </FormControl>
  );
}
