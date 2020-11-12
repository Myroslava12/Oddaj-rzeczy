import React, { useState, useContext } from "react";
import {FirebaseUserData} from "../Firebase/context";
import arrow from "../../assets/Icon-Arrow-Down.svg";

const StepTwo = ({setFormCount}) => {
    const [quantity, setQuantity] = useState('');
    const userInfo = useContext(FirebaseUserData);

    const onChange = (e) => setQuantity(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormCount(prev => ({...prev, stepTwo: false, stepThree: true}));
        userInfo.setInfo(prev => ({
            ...prev,
            quantity: quantity,
        }))
    };

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepTwo: false, stepOne: true}));
    }

    const isInvalid = quantity === '';

    return (
        <section className="section--form">
            <div className='form--header--box'>
                <div className="container--home">
                    <h2 className="form--header--title">Ważne!</h2>
                    <p className="form--header--text">Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.</p>
                </div>
            </div>
            <div className="form--body--box">
                <div className="container--home">
                    <form className="form--boby--info" onSubmit={handleSubmit}>
                        <span className="steps--counter">Krok 2/4</span>
                        <h2 className="form--body--title">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
                        <label htmlFor="number" className="quantity--label">
                            Liczba 60l worków:
                            <select
                                type="select"
                                id="number"
                                name="number"
                                value={quantity}
                                onChange={onChange}
                                className="quantity--select"
                            >
                                <option className="select--option" value="">--wybierz--</option>
                                <option className="select--option" value="1">1</option>
                                <option className="select--option" value="2">2</option>
                                <option className="select--option" value="3">3</option>
                                <option className="select--option" value="4">4</option>
                                <option className="select--option" value="5">5</option>
                            </select>
                            <img src={arrow} className="select--arrow" />
                        </label>
                        <div className="form--btn--box">
                            <button className="form--btn" onClick={onClickBack}>Wstecz</button>
                            <button  className="form--btn" type="submit">Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default StepTwo;