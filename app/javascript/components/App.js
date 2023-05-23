import React from 'react';
import Greeting from './Greeting';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Greeting />} />
    </Routes>
  );
};

export default App;
