import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes";
import decoration from "../../../assets/Decoration.svg";
import {FirebaseUserLoggedIn} from "../../Firebase/context";

const FourSteps = () => {
    const userLoggedIn = useContext(FirebaseUserLoggedIn);

    return (
        <section className="section--four--steps" id="description">
            <h2 className="four--steps--title">Wystarczą 4 proste kroki</h2>
            <img className="four--steps--img" src={decoration} />
            <div className="four--steps--box">
                <div className="one--step--box">
                    <div className="one--step--img first--img"></div>
                    <p className="one--step--title">Wybierz rzeczy</p>
                    <p className="one--step--text">ubrania, zabawki, sprzęt i inne</p>
                </div>

                <div className="one--step--box">
                    <div className="one--step--img second--img"></div>
                    <p className="one--step--title">Spakuj je</p>
                    <p className="one--step--text">skorzystaj z worków na śmieci</p>
                </div>

                <div className="one--step--box">
                    <div className="one--step--img third--img"></div>
                    <p className="one--step--title">Zdecyduj komu <br /> chcesz pomóc</p>
                    <p className="one--step--text">wybierz zaufane miejsce</p>
                </div>

                <div className="one--step--box">
                    <div className="one--step--img fourth--img"></div>
                    <p className="one--step--title">Zamów kuriera</p>
                    <p className="one--step--text">kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <Link to={userLoggedIn ? ROUTES.FORM : ROUTES.LOG_IN} className="header--link four--steps--link">
                <div>
                    <span>Oddaj </span> <br />
                    <span>rzeczy</span>
                </div>
            </Link>
        </section>
    )
}

export default FourSteps;