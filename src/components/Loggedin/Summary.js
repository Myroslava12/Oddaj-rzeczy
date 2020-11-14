import React, { useContext } from "react";
import {FirebaseUserData} from "../Firebase/context";
import {FirebaseContext} from "../Firebase";
import clother from "../../assets/Icon-1.svg";
import circle from "../../assets/Icon-2.svg";

const Summary = ({setFormCount}) => {
    const userInfo = useContext(FirebaseUserData);
    const firebase = useContext(FirebaseContext);

    const onClickBack = () => setFormCount(prev => ({...prev, stepFour: true, summary: false}));

    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.db.collection("data").add({...userInfo.info});
        setFormCount(prev => ({...prev, finish: true, summary: false}));
    }

    return (
        <section className="section--form">
            <div className="form--body--box">
                <div className="container--home">
                    <form className="form--boby--info" onSubmit={handleSubmit}>
                        <h2 className="form--body--title">Podsumowanie Twojej darowizny</h2>
                        <h3 className="summary--title">Oddajesz:</h3>
                        <div className="summary--item--box">
                            <img className="summary--img" src={clother} alt="clother" />
                            <p className="summary--text">{userInfo.info.quantity} worki, {userInfo.info.title}, {userInfo.info.who + ' '}</p>
                        </div>
                        <div className="summary--item--box">
                            <img className="summary--img" src={circle} alt="circle" />
                            <p className="summary--text">Dla lokalizacji: {userInfo.info.location}</p>
                        </div>
                        <div className="summary--address--box">
                            <div className="summary--info--box">
                                <h3 className="summary--title">Adres odbioru:</h3>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Ulica</span>
                                    <span className="summary--info--text">{userInfo.info.address.street}</span>
                                </div>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Miasto</span>
                                    <span className="summary--info--text">{userInfo.info.address.city}</span>
                                </div>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Kod pocztowy</span>
                                    <span className="summary--info--text">{userInfo.info.address.postCode}</span>
                                </div>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Numer telefonu</span>
                                    <span className="summary--info--text">{userInfo.info.address.numberPhone}</span>
                                </div>
                            </div>
                            <div className="summary--info--box">
                                <h3 className="summary--title">Termin odbioru:</h3>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Data</span>
                                    <span className="summary--info--text">{userInfo.info.address.date}</span>
                                </div>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Godzina</span>
                                    <span className="summary--info--text">{userInfo.info.address.hour}</span>
                                </div>
                                <div className="summary--address--info">
                                    <span className="summary--info--text">Uwagi do kuriera</span>
                                    <span className="summary--info--text">{userInfo.info.address.comment}</span>
                                </div>
                            </div>
                        </div>
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