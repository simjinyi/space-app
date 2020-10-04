import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup() {
  const [value, setValue] = React.useState('Interactive');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Category</FormLabel>
      <RadioGroup aria-label="Category" name="cat1" value={value} onChange={handleChange}>
        <FormControlLabel value="Interactive" control={<Radio />} label="Interactive" />
        <FormControlLabel value="Information" control={<Radio />} label="Information" />
        <FormControlLabel value="Event" control={<Radio />} label="Event" />
        <FormControlLabel value="Prefer not to say" control={<Radio />} label="Prefer not to say" />
      </RadioGroup>
    </FormControl>
  );
}
