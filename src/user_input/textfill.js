import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box'; 


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function ComposedTextField() {
  const [name, setName] = React.useState('');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
   <Box display = "flex" flexdirection = "column">

      <FormControl>

        <InputLabel htmlFor="component-helper">Blank1</InputLabel>
        <Input
          id="component-helper"
          value={name}
          onChange={handleChange}
          aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Where is the lamb sauce?</FormHelperText>
      </FormControl>
    </Box>

    <Box display = "flex" flexdirection = "column">
      <FormControl>

        <InputLabel htmlFor="component-helper">Blank2</InputLabel>
        <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Where is the lamb sauce?</FormHelperText>
       </FormControl>
       </Box>
      <Box display = "flex" flexdirection = "column">
      <FormControl>

        <InputLabel htmlFor="component-helper">Blank3</InputLabel>
        <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Where is the lamb sauce?</FormHelperText>
       </FormControl>
       </Box>

      <Box display = "flex" flexdirection = "column">
      <FormControl>

        <InputLabel htmlFor="component-helper">Blank4</InputLabel>
        <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
        />
        <FormHelperText id="component-helper-text">Where is the lamb sauce?</FormHelperText>
       </FormControl>
       </Box>
    </form>
  );
}
