import React, { useEffect, useState } from "react";
import {FirebaseUserData} from "../Firebase/context";
import Navigation from "../Home/Navigation/Navigation";
import Contact from "../Home/Contact/Contact";
import decoration from "../../assets/Decoration.svg";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import Summary from "./Summary";
import Finish from "./Finish";

const LoggedInForm = () => {
    const [formCount, setFormCount] = useState({
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        stepFour: false,
        summary: false,
        finish: false
    });

    const [info, setInfoOriginal] = useState({
        title: '',
        quantity: '',
        who: [],
        location: '',
        organization: '',
        address: {
            street: '',
            city: '',
            postCode: '',
            numberPhone: '',
            date: '',
            hour: '',
            comment: ''
        }
    });

    const setInfo = (fn) => setInfoOriginal(fn);

    return (
        <section className="section--form">
            <div className="container--home">
                <Navigation />
                <div className="form--logged--in--box">
                    <div className="mobile--first--bg"></div>
                    <div className="form--bg"></div>
                    <div className="form--description--box">
                        <h2 className="form--logged--in--title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</h2>
                        <img className="form--logged--in--img" src={decoration} alt="decoration" />
                        <h3 className="form--subtitle">Wystarczą 4 proste kroki:</h3>
                        <div className="form--square--box">
                            <div className="form--square">
                                <span className="square--number">1</span>
                                <span className="square--title">Wybierz rzeczy</span>
                            </div>
                            <div className="form--square">
                                <span className="square--number">2</span>
                                <span className="square--title">Spakuj je w worki</span>
                            </div>
                            <div className="form--square">
                                <span className="square--number">3</span>
                                <span className="square--title">Wybierz fundację</span>
                            </div>
                            <div className="form--square">
                                <span className="square--number">4</span>
                                <span className="square--title">Zamów kuriera</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FirebaseUserData.Provider value={{info, setInfo}}>
                {formCount.stepOne && <StepOne setFormCount={setFormCount} />}
                {formCount.stepTwo && <StepTwo setFormCount={setFormCount} />}
                {formCount.stepThree && <StepThree setFormCount={setFormCount} />}
                {formCount.stepFour && <StepFour setFormCount={setFormCount} />}
                {formCount.summary && <Summary setFormCount={setFormCount} />}
                {formCount.finish && <Finish setFormCount={setFormCount} />}
            </FirebaseUserData.Provider>
            <Contact />
        </section>
    );
}

export default LoggedInForm;