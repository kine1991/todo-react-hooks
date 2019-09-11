import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const StyledButton = withStyles({
  root: {
    background: props => props.color,
  },
})(({ classes, color, ...other }) => <Button className={classes.root} {...other} />);

export default function DynamicCSS() {
  const [color, setColor] = React.useState('red');

  const handleChange = event => {
    setColor(event.target.checked ? 'blue' : 'default');
  };

  return (
    <React.Fragment>
      <FormControlLabel
        control={<Switch checked={color === 'blue'} onChange={handleChange} color="primary" value="dynamic-class-name"/>}
        label="Blue"
      />
      <StyledButton color={color}>Dynamic CSS</StyledButton>
    </React.Fragment>
  );
}