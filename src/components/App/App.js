import React from 'react';
import useStyles from './App.styles'

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      Hello world
    </div>
  );
}

export default App;
