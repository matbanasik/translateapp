import React from 'react';
import ReactDOM from 'react-dom';
import WordDetails from './WordDetails';


class Meaning extends React.Component {
  constructor(props){
      super(props)
  }
    
  render() {
       return(
        <li className = "meaning">
            {this.props.index + 1}. {this.props.meaning}
        </li>  
    )

  }
}

export default Meaning;