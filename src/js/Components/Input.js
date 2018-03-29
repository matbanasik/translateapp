import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import EditField from './EditField';
import Languages from './Languages';

class Input extends React.Component {
  
  constructor(){
      super()
      
      this.state = {
          isHidden: false,
          textToTranslate: null
      }
      
      this.getTextField = this.getTextField.bind(this)
  }
    
  getTextField(){
      this.setState({
          isHidden: true,
          textToTranslate: document.querySelector(".input-area").value
      })
  }
    
  
      
  render() {
      
    if (!this.state.isHidden){
        return (
            <div className="main-content">
                <div className = "left-container">
                    <div className = "input-container">
                        <textarea className = "input-area">
                        </textarea>
                        <a className = "save-btn" onClick = {this.getTextField}>
                            Zapisz
                        </a>
                    </div>
                </div>
            </div>
            
        );
        } else {
            return ( 
                <Text textToTranslate = {this.state.textToTranslate}/>
            )
        }
    }
}

export default Input;