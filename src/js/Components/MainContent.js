import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import EditField from './EditField';
import Input from './Input';
import Start from './Start';

class MainContent extends React.Component {
        
  constructor(){
      super();
  }

    
  render() {
    return (
        <Start />
    );
  }
}

export default MainContent;