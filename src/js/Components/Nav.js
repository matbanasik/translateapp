import React from 'react';
import ReactDOM from 'react-dom';
import NavItem from './NavItem'

class Nav extends React.Component {
      
  render() {
    return (
      <div className = 'navbar'>
        <ul>
            <NavItem value = 'item1' />
            <NavItem value = 'item2' />
            <NavItem value = 'item3' />
        </ul>
      </div>
    );
  }
}

export default Nav;