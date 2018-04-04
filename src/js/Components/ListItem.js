import React from 'react';
import ReactDOM from 'react-dom';
import WordDetails from './WordDetails';


class ListItem extends React.Component {
  constructor(props){
      super(props)
      
      this.state = {
          detailsVisible: false
      }
      
      this.showMore = this.showMore.bind(this)
  }  
    
  showMore(){
      this.setState({
          detailsVisible: !this.state.detailsVisible
      })
  }    
    
  render() {
      const meaningsPL = this.props.word.data.tuc.filter((meaning) => {
          if(meaning.hasOwnProperty('phrase')){
              return meaning
          } 
      })
      
      const liClass = ((this.props.index % 2 === 0) ? 'odd' : 'even')
      
      const meaningsOnList = meaningsPL.map((meaning) => {
          return meaning.phrase.text
      })
      
      if(this.props.word === null){
          return null;
      } else if (!this.state.detailsVisible){
        return(
            <li className = {liClass}>
                <div className = "clicked-word" onClick = {this.showMore}>
                    {this.props.word.clickedWord}
                    <i className = "icon-angle-down"></i>
                </div>
            </li>  
        )
      } else if (this.state.detailsVisible){
           return(
            <li className = {liClass}>
                <div className = "clicked-word" onClick = {this.showMore}>
                    {this.props.word.clickedWord}
                    <i className = "icon-angle-up"></i>
                </div>
                <WordDetails wordDetails = {meaningsOnList}/>
            </li>  
        )
          
      }
      
     
  }
}

export default ListItem;