import React from 'react';
import useStyles from './App.styles'
import Picker from 'components/Picker';
import Swatch from 'components/Swatch';
import ColorInput from 'components/ColorInput';
import useColorPicker from 'helpers/useColorPicker';

function App() {
  const classes = useStyles();
  const [color, changeColor] = useColorPicker();
  console.log(color)
  return (
    <div className={classes.App}>
      <Picker setColor={changeColor} />
      <div>
      <ColorInput/>
      <Swatch color={color} />
      </div>
    </div>
  );
}

export default App;
