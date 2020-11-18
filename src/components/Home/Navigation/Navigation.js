import React, { useContext, useState} from "react";
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';
import {Link} from "react-scroll";
import {FirebaseUserLoggedIn} from "../../Firebase/context";
import {FirebaseContext} from "../../Firebase";
import cx from "classnames";


const Navigation = () => {
    const userLoggedIn = useContext(FirebaseUserLoggedIn);
    const firebase = useContext(FirebaseContext);
    const [isVisible, setIsVisible] = useState(false);

    const onClick = () => setIsVisible(!isVisible);

    return (
        <>
            <nav className="nav--box">
                {userLoggedIn ? <NavigationAuth email={userLoggedIn.email} firebase={firebase} /> : <NavigationNonAuth />}
                <ul className="nav--links">
                    <li><NavLink to={ROUTES.HOME} className="link--home link--home--active">Start</NavLink></li>
                    <li><Link to="description" smooth={true} duration={500} className="link--home" >O co chodzi?</Link></li>
                    <li><Link to="aboutUs" smooth={true} duration={800} className="link--home" >O nas</Link></li>
                    <li><Link to="organizations" smooth={true} duration={1200} className="link--home" >Fundacja i organizacje</Link></li>
                    <li><Link to="contact" smooth={true} duration={1000} className="link--home" >Kontact</Link></li>
                </ul>
            </nav>
            <nav className="navbar">
                <ul className={cx("navbar--links", {
                    "navbar--active": isVisible,
                })}>
                    <li><NavLink onClick={onClick} to={ROUTES.HOME} className="navbar--link link--home--active">Start</NavLink></li>
                    <li><Link onClick={onClick} to="description" smooth={true} duration={500} className="navbar--link" >O co chodzi?</Link></li>
                    <li><Link onClick={onClick} to="aboutUs" smooth={true} duration={800} className="navbar--link" >O nas</Link></li>
                    <li><Link onClick={onClick} to="organizations" smooth={true} duration={1200} className="navbar--link" >Fundacja i organizacje</Link></li>
                    <li><Link onClick={onClick} to="contact" smooth={true} duration={1000} className="navbar--link" >Kontact</Link></li>
                    {userLoggedIn ? <NavigationAuth 
                        email={userLoggedIn.email} 
                        firebase={firebase} 
                        isVisible={isVisible}
                        fn={onClick}
                    /> : <NavigationNonAuth isVisible={isVisible} />}
                </ul>
                {userLoggedIn && <p className="user--email--text">Cześć {userLoggedIn.email}</p>}
                <button className="navbar--btn" onClick={onClick}>
                    <span className={cx("btn--line", {"btn--line--x": isVisible})}></span>
                    <span className={cx("btn--line", {"btn--line--x": isVisible})}></span>
                    <span className={cx("btn--line", {"btn--line--x": isVisible})}></span>
                </button>
            </nav>
        </>
    )
}

const NavigationNonAuth = ({isVisible}) => {
    return (
        <ul className={cx("nav--links", {
            "active": isVisible,
        })}>
            <li><NavLink exact to={ROUTES.LOG_IN} className="link--auth navbar--link">Zaloguj</NavLink></li>
            <li><NavLink to={ROUTES.REGISTER} className="link--auth link--auth--active navbar--link" >Załóż konto</NavLink></li>
        </ul>
    )
}

export const NavigationAuth = ({email, firebase, isVisible, fn}) => {
    const onClick = firebase.doSignOut;
    
    return (
        <ul className={cx("nav--links", {
            "active": isVisible,
        })}>
            <p className="user--email--text">Cześć {email}</p>
            <li onClick={fn}><NavLink exact to={ROUTES.FORM} className="link--auth link--auth--active navbar--link">Oddaj rzeczy</NavLink></li>
            <li onClick={onClick}><NavLink exact to={ROUTES.LOG_OUT} className="link--auth navbar--link">Wyloguj</NavLink></li>
        </ul>
    )
}

export default Navigation;