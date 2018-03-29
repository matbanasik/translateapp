import React from 'react';
import ReactDOM from 'react-dom';


class NavItem extends React.Component {
  constructor(props){
    super();

  }    

  render() {
    return (
        <li className = 'nav-item'>
            <a href="#">{this.props.value}</a>
        </li>
    );
  }
}

export default NavItem;