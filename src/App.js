import React from 'react';
import Main from './components/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="nav navbar-expand-sm navbar-dark">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar"> <span className="navbar-toggler-icon"> </span> </button>
          <div className="navbar-brand">
                <a href="index.html"> cUstOM mADe mEmEs </a>
            </div>

              <ul className="collapse navbar-collapse" id="navbar">
                  <li className="nav-link"> <a href="thea10.github.io/portfolio.html">DEV PORTFOLIO</a></li>
                  <li className="nav-link"> <a href="https://github.com/Thea10" target="_blank">GITHUB</a></li>
              </ul>
        </nav>
        <Main />
      </header>
    </div>
  );
}

export default App;
