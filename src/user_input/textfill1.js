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
  const [host, setHost] = React.useState("");
  const [eventType, setEventType] = React.useState("");
  const [eventTime, setEventTime] = React.useState("");
  const [location, setLocation] = React.useState("");
  const classes = useStyles();

  useEffect(() => {
    handleChange({ title, description, host, eventType, eventTime, location });
  }, [title, description, host, eventType, eventTime, location]);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Event Title</InputLabel>
          <Input
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Event Description</InputLabel>
          <Input
            onChange={(e) => setDescription(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Tell people what your event is and why you are holding this event!
          </FormHelperText>
        </FormControl>
      </Box>
      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Hosted by</InputLabel>
          <Input
            onChange={(e) => setHost(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Describe a little about youself!
          </FormHelperText>
        </FormControl>
      </Box>

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Event Type</InputLabel>
          <Input
            onChange={(e) => setEventType(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text">
            Public/Private/Who can join etc
          </FormHelperText>
        </FormControl>
      </Box>
      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Event Time</InputLabel>
          <Input
            onChange={(e) => setEventTime(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>

      <Box display="flex" flexdirection="column">
        <FormControl fullWidth>
          <InputLabel htmlFor="component-helper">Event Location</InputLabel>
          <Input
            onChange={(e) => setLocation(e.target.value)}
            aria-describedby="component-helper-text"
          />
          <FormHelperText id="component-helper-text"></FormHelperText>
        </FormControl>
      </Box>
    </form>
  );
}
