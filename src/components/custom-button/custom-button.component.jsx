import React from 'react';
import chroma from 'chroma-js'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { ThemeContext } from '../../contexts/theme.context'

const StyledButton = withStyles({
  root: {
    background: props => props.color,
    color: props =>  chroma(props.color).luminance() >= 0.7 ? "black": "white",
  },
})(({ classes, color, ...other }) => {
    // console.log(other)
    return (
        <Button className={classes.root} {...other} />
    )
});

export default function DynamicCSS() {
  const {currentPalette} = React.useContext(ThemeContext)

  return (
      <StyledButton color={currentPalette.element} x="x">Dynamic CSS</StyledButton>
  );
}