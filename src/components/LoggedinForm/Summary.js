import React, { useState, useContext } from "react";
import {FirebaseUserData} from "../Firebase/context";

const Summary = ({setFormCount}) => {
    const userInfo = useContext(FirebaseUserData);
    console.log(userInfo.info);

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepFour: true, summary: false}));
    }

    return (
        <section className="section--form">
            <div className="form--body--box">
                <div className="container--home">
                    <form className="form--boby--info">
                        <h2 className="form--body--title">Podsumowanie Twojej darowizny</h2>
                        <div className="form--btn--box">
                            <button className="form--btn" onClick={onClickBack}>Wstecz</button>
                            <button className="form--btn" type="submit">Potwierdzam</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Summary;