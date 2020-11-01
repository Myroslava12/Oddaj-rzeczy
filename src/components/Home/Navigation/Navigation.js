import React from "react";
import {NavLink, HashRouter as Router} from 'react-router-dom';
import {Link} from "react-scroll";

const Navigation = () => {
    return (
        <nav className="nav--box">
            <ul className="nav--links">
                <li><NavLink exact to="/login">Zaloguj</NavLink></li>
                <li><NavLink to="/register" ClassName="active--link">Załóż konto</NavLink></li>
            </ul>
            <ul className="nav--links">
                <li><Link to="home" smooth={true} duration={100}>Start</Link></li>
                <li><Link to="description" smooth={true} duration={300}>O co chodzi?</Link></li>
                <li><Link to="aboutUs" smooth={true} duration={500}>O nas</Link></li>
                <li><Link to="organizations" smooth={true} duration={600}>Fundacja i organizacje</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Kontact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;