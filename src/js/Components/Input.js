import React from 'react';
import ReactDOM from 'react-dom';
import Text from './Text';
import EditField from './EditField';
import Languages from './Languages';
import Error from './Error';

class Input extends React.Component {
  
  constructor(props){
      super(props)
      
      this.state = {
          isHidden: false,
          textToTranslate: null,
          errorVisible: false,
          firstRender: true,
      }
      
      this.getTextField = this.getTextField.bind(this);
      this.hideError = this.hideError.bind(this);
  }
    
  getTextField(){
      if (document.querySelector(".input-area").value === ''){
        this.setState({
            firstRender: false,
            errorVisible: true,
        });
      }else{
        this.setState({
            isHidden: true,
            textToTranslate: document.querySelector(".input-area").value,
        })
      }
      
  };

  hideError(){
      this.setState({
        errorVisible: false,
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

                    <Error message="Wpisz lub wklej tekst..." errorVisible = {this.state.errorVisible} hideError = {this.hideError} firstRender = {this.state.firstRender}/>
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
        } else if(this.state.errorVisible !== true){
            return ( 
                <Text textToTranslate = {this.state.textToTranslate}/>
            )
        } else {
            return null;
        }
    }
}

export default Input;