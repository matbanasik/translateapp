import React from 'react';
import ReactDOM from 'react-dom';

class Error extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            isVisible: this.props.errorVisible
        }

        // this.hideError = this.hideError.bind(this);
    };

    static getDerivedStateFromProps(nextProps, prevState){

        return {
            isVisible: nextProps
        }
        


        console.log(prevState)
    }

      
  render() {
    let boxClass;

    if (this.props.firstRender){
        boxClass = 'error-overlay'
    }else if(this.props.errorVisible && !this.props.firstRender){
        boxClass = 'error-overlay slide-down'
    }else if(!this.props.errorVisible && !this.props.firstRender){
        boxClass = 'error-overlay slide-up'
    };

    return (
        <div className = {boxClass} >
            <div className = 'error-box'>
                <p>{this.props.message}</p>
                <button onClick = {this.props.hideError}>Ok</button>
            </div>
        </div>

    );
  }
}

export default Error;