import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './ListItem';

class EditField extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
          wordsToAdd: []
      }
  }

    
componentDidUpdate(prevProps, prevState){ 

    if(prevProps.words === null){
        this.setState({
            wordsToAdd: [...this.state.wordsToAdd.slice(), this.props.words]
        })
    } else if(prevProps.words.clickedWord !== this.props.words.clickedWord){
        this.setState({
            wordsToAdd: [...this.state.wordsToAdd.slice(), this.props.words]
        })
    }
}

render() {
    const listItems = this.state.wordsToAdd.map((word, index) => {
        return <ListItem index = {index} key = {index} word = {this.state.wordsToAdd[index]} />;
    })

    return (
        <div className = "edit-container">
            <ul className = "words-list">
                {listItems}
            </ul>
        </div>
    );
  }
}


export default EditField;