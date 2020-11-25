import React, { useState } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import MainRouter from './router/MainRouter';


function App() {
  return (
    <div className="App">
      <ReduxProvider store={configureStore()}>
        <MainRouter />
      </ReduxProvider>
    </div>
  );
}

export default App;

