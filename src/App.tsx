import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Scanner from 'src/views/Scanner';
import Codes from 'src/views/Codes';
import Open from 'src/views/Open';

const fixVxDimensions = () => {  
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 100;
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 100;
    
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--vw', `${vw}px`);  
};

function App() {
  useEffect(() => {
    fixVxDimensions();
    window.addEventListener('load', fixVxDimensions);
    window.addEventListener('resize', fixVxDimensions);
    window.addEventListener('orientationchange', fixVxDimensions);

    return () => {
      window.removeEventListener('load', fixVxDimensions);
      window.removeEventListener('resize', fixVxDimensions);
      window.removeEventListener('orientationchange', fixVxDimensions);
    };
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/codes" component={Codes} />
        <Route path="/open/:gift" component={Open} />
        <Route path="/" component={Scanner} />
      </Switch>
    </Router>
  );
}

export default App;
