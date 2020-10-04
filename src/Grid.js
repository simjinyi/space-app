import React from 'react';
import RecipeReviewCard from "./Card";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Events from './Events';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container direction="column" justify="center"  alignItems="flex-start" spacing={0}>
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <Events />
            </Grid>
            <Grid item>
                <Events />
            </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <Events />
            </Grid>
        </Grid>
        <Grid container direction="row" justify="flex-start" alignItems="center">
            <Grid item>
                <Events />
            </Grid>
        </Grid>
    </Grid>
  )
}

