import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Nav from './Components/Nav';
import MainContent from './Components/MainContent';

class App extends React.Component {
  render() {
    return (
      <div className = 'container'>
        <Nav />
        <MainContent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));