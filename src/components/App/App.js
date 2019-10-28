import React from 'react';
import useStyles from './App.styles'
import Picker from 'components/Picker';
import Swatch from 'components/Swatch';
import ColorInput from 'components/ColorInput';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Picker/>
      <div>
      <ColorInput/>
      <Swatch />
      </div>
    </div>
  );
}

export default App;
