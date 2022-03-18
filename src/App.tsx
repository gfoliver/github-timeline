import React from 'react';

import Home from './pages/Home';
import Global from './styles/Global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Global />
      <Home />
    </div>
  );
}

export default App;