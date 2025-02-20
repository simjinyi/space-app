import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FilledInput from "@material-ui/core/FilledInput";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ComposedTextField({ handleChange }) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [operatingHours, setOperatingHours] = React.useState("");
  const [location, setLocation] = React.useState("");
  const classes = useStyles();

  useEffect(() => {
    handleChange({ title, description, operatingHours, location });
  }, [title, description, operatingHours, location]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {/* <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper"></InputLabel>
          <Input
            id="component-helper"
            value={name}
            onChange={handleChange}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Where is the lamb sauce?
          </FormHelperText>
        </FormControl>
      </Box> */}

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Title</InputLabel>
          <Input
            id="component-helper"
            // value={name}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>
      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Description</InputLabel>
          <Input
            id="component-helper"
            // value={name}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Tell people more about it!
          </FormHelperText>
        </FormControl>
      </Box>

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">
            Operating / Opening hours
          </InputLabel>
          <Input
            id="component-helper"
            // value={name}
            onChange={(e) => {
              setOperatingHours(e.target.value);
            }}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Location</InputLabel>
          <Input
            id="component-helper"
            // value={name}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>
    </form>
  );
}
