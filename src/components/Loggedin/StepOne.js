import React, {useContext, useState} from "react";
import {FirebaseUserData} from "../Firebase/context";

const StepOne = ({setFormCount}) => {
    const userInfo = useContext(FirebaseUserData);
    const [items, setItems] = useState(userInfo.info.title);
     
    const handleChange = (e) => setItems(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormCount(prev => ({...prev, stepOne: false, stepTwo: true}));
        userInfo.setInfo(prev => ({...prev, title: items}));
    }

    const isInvalid = items === '';

    return (
        <section className="section--form">
            <div className='form--header--box'>
                <div className="container--home">
                    <h2 className="form--header--title">Ważne!</h2>
                    <p className="form--header--text">Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
                </div>
            </div>
            <div className="form--body--box">
                <div className="mobile--first--bg"></div>
                <div className="container--home">
                    <form className="form--boby--info" onSubmit={handleSubmit}>
                        <span className="steps--counter">Krok 1/4</span>
                        <h2 className="form--body--title">Zaznacz co chcesz oddać:</h2>
                        <ul className="items--list">
                            <li>
                                <label htmlFor="item-1" className="item--label">
                                    <input
                                        className="item--input"
                                        id="item-1"
                                        name="item"
                                        type="radio"
                                        value="ubrania, które nadają się do ponownego użycia"
                                        checked={items === "ubrania, które nadają się do ponownego użycia"}
                                        onChange={handleChange}
                                    />
                                    ubrania, które nadają się do ponownego użycia
                                </label>
                            </li>
                            <li>
                                <label htmlFor="item-2" className="item--label">
                                    <input
                                        className="item--input"
                                        id="item-2"
                                        name="item"
                                        type="radio"
                                        value="ubrania, do wyrzucenia"
                                        checked={items === "ubrania, do wyrzucenia"}
                                        onChange={handleChange}
                                    />
                                    ubrania, do wyrzucenia
                                </label>
                            </li>
                            <li>
                                <label htmlFor="item-3" className="item--label">
                                    <input
                                        className="item--input"
                                        id="item-3"
                                        name="item"
                                        type="radio"
                                        value="zabawki"
                                        checked={items === "zabawki"}
                                        onChange={handleChange}            
                                    />
                                    zabawki
                                </label>
                            </li>
                            <li>
                                <label htmlFor="item-4" className="item--label">
                                    <input
                                        className="item--input"
                                        id="item-4"
                                        name="item"
                                        type="radio"
                                        value="książki"
                                        checked={items === "książki"}
                                        onChange={handleChange}
                                    />
                                    książki
                                </label>
                            </li>
                            <li>
                                <label htmlFor="item-5" className="item--label">
                                    <input
                                        className="item--input"
                                        id="item-5"
                                        name="item"
                                        type="radio"
                                        value="Inne"
                                        checked={items === "Inne"}
                                        onChange={handleChange}
                                    />
                                    Inne
                                </label>
                            </li>
                        </ul>
                        <button disabled={isInvalid} className="form--btn" type="submit">Dalej</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default StepOne;