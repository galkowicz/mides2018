import React from "react";
import { Link } from 'react-router-dom';

class AppMenu extends React.Component {
    render() {
        return (<ul>
            <i className='fas fa-bars'></i>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
        </ul>);
    }
}

export default AppMenu;