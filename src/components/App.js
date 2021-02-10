import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

calculate(1, 2, '-');

const App = () => (
  <>
    <Display />
    <ButtonPanel />
  </>
);

export default App;
