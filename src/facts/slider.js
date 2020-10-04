import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function valuetext(value) {
  return `${value}$`;
}

export default function RangeSlider({callBack}) {
  const classes = useStyles();
  const [value, setValue] = React.useState([200, 800]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    callBack(newValue);
  };

  return (
    <div className={classes.root}>
      <Typography id="range-slider" gutterBottom>
        Reward Amount range (x 1000)
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={1000}
        step={10}
      />
    </div>
  );
}