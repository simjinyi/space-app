import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels({ handleChange }) {
  const [state, setState] = React.useState({
    Musuem: false,
    Observatory: false,
    Society: false,
    Shop: false,
    Institution: false,
  });

  const handleChange1 = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    handleChange(state);
  };

  return (
    <FormGroup column>
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="Musuem"
            onChange={handleChange1}
          />
        }
        label="Museum"
      />

      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="Observatory"
            onChange={handleChange1}
          />
        }
        label="Observatory"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="Society"
            onChange={handleChange1}
          />
        }
        label="Society"
      />

      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="Shop"
            onChange={handleChange1}
          />
        }
        label="Shop"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            name="Institution"
            onChange={handleChange1}
          />
        }
        label="Institution"
      />
    </FormGroup>
  );
}
