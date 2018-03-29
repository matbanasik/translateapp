import React from 'react';
import ReactDOM from 'react-dom';
import Meaning from './Meaning';


class WordDetails extends React.Component {
  constructor(props){
      super(props)
  }

render() {
    const meanings = this.props.wordDetails.map((meaning, index) => {
        return <Meaning index = {index} key = {index} meaning = {meaning}/>
    })

    return (
        <div className = "word-details">
            <ul className = "word-meanings">
                {meanings}
            </ul>
        </div>
    );
  }
}


export default WordDetails;