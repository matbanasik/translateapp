import React from 'react';
import ReactDOM from 'react-dom';

class Tooltip extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tooltipVisible: this.props.tooltipVisible
        }
    }
   
    
    componentWillReceiveProps(nextProps){
        this.setState({
            tooltipVisible: nextProps.tooltipVisible
        })
    }
    
    
  render() {
      const tooltipClass = this.state.tooltipVisible ? "tooltip" : "tooltip hidden";

        return (
            <div className = {tooltipClass}>
               <div className = "tooltip-first">
               </div>
                <div className = "tooltip-second">
               </div>
               <div className = "tooltip-down">
                  Kliknij słowo, aby dodać je do listy
               </div>
            </div>
        );


  }
}

export default Tooltip;