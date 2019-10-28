import React from 'react';
import useStyles from './App.styles'
import Picker from 'components/Picker';
import Swatch from 'components/Swatch';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Picker/>
      <Swatch />
    </div>
  );
}

export default App;
