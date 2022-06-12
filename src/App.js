import React, {Fragment} from 'react';
import Home from './components/Home';
import {Provider} from 'react-redux';
import store from './Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Home />
      </Fragment>
    </Provider>
  );
};

export default App;
