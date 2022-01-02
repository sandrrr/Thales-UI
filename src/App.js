import React from 'react';
import Header from './components/Header';
import Program from './components/Program';
import "@awsui/global-styles/index.css";
import { AppLayout } from "@awsui/components-react";
import { Provider } from 'react-redux';
import { store } from './utils/redux';

function App() {
  return (
    <Provider store={store}>
      <AppLayout
        navigationHide={true}
        toolsHide={true}
        contentHeader={<Header/>}
        content={<Program/>}
      />
    </Provider>
  );
}

export default App;
