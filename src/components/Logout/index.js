import React from "react";
import {NavLink} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Navigation from "../Home/Navigation";
import decoration from "../../assets/Decoration.svg";

const LogOut = () => {
    return (
        <section className="log--out--section">
            <div className="container--home">
                <Navigation />
                <div className="log--out--box">
                    <h1 className="log--out--title">Wylogowanie nastąpiło pomyślnie!</h1>
                    <img className="log--out--img" src={decoration} />
                    <button className="log--out--btn"><NavLink exact to={ROUTES.HOME}>Strona główna</NavLink></button>
                </div>
            </div>
        </section>
    )
}

export default LogOut;