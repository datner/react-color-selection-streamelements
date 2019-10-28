import React from 'react';
import useStyles from './App.styles'
import Picker from 'components/Picker';

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Picker/>
    </div>
  );
}

export default App;
