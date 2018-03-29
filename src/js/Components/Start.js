import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';


class Start extends React.Component {
    
  constructor(){
      super()
      
      this.state = {
          isHidden: false
      }
      
      this.getTextarea = this.getTextarea.bind(this)
  }
    
  getTextarea(){
      this.setState({
          isHidden: true
      })
  }
      
  render() {
      
    if(!this.state.isHidden){ 
      
        return (
            <div className="main-content">
                <div className = "left-container">
                    <div className = "start-container">
                        <a className = "start-btn" onClick = {this.getTextarea}>
                            Zacznij
                        </a>
                    </div>
                </div>
            </div>
        );
    } else{
        return (
            <Input />
        )
    }
  }
}

export default Start;