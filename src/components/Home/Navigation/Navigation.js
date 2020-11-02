import React from "react";
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import {Link} from "react-scroll";

const Navigation = () => {
    return (
        <nav className="nav--box">
            <ul className="nav--links">
                <li><NavLink exact to={ROUTES.LOG_IN} className="link--auth">Zaloguj</NavLink></li>
                <li><NavLink to={ROUTES.REGISTER} className="link--auth link--auth--active" >Załóż konto</NavLink></li>
            </ul>
            <ul className="nav--links">
                <li><Link to="home" smooth={true} duration={100} className="link--home link--home--active" >Start</Link></li>
                <li><Link to="description" smooth={true} duration={300} className="link--home" >O co chodzi?</Link></li>
                <li><Link to="aboutUs" smooth={true} duration={500} className="link--home" >O nas</Link></li>
                <li><Link to="organizations" smooth={true} duration={600} className="link--home" >Fundacja i organizacje</Link></li>
                <li><Link to="contact" smooth={true} duration={1000} className="link--home" >Kontact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;