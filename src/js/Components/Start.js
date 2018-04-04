import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';


class Start extends React.Component {
    
  constructor(props){
      super(props)
      
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
        
            <div className = "right-container">
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum auctor lorem, sit amet euismod enim. Cras posuere lacus eget odio ultricies iaculis.</p>

                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum auctor lorem, sit amet euismod enim. Cras posuere lacus eget odio ultricies iaculis.</p>

                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum auctor lorem, sit amet euismod enim. Cras posuere lacus eget odio ultricies iaculis.</p>
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