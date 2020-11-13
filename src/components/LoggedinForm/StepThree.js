import React, { useState, useContext } from "react";
import {FirebaseUserData} from "../Firebase/context";
import arrow from "../../assets/Icon-Arrow-Down.svg";
import cx from "classnames";

const StepThree = ({setFormCount}) => {
    const [location, setLocation] = useState('');
    const [checked, setChecked] = useState(false);
    const [whoHelp, setWhoHelp] = useState([]);
    const [valueOrg, setValueOrg] = useState('');

    const userInfo = useContext(FirebaseUserData);

    const handleChange = () => setChecked(!checked);

    const onChangeLocation = (e) => setLocation(e.target.value);

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepTwo: true, stepThree: false}));
    }

    const onClick = (e) => {
        if (e.target.checked === true) {
            if (whoHelp.indexOf(e.target.value) == -1) {
                setWhoHelp(prev => [...prev, e.target.value]);
            }
        } else {
            const filteredItems = whoHelp.filter(item => item !== e.target.value);
            setWhoHelp([...filteredItems])
        }
    }
    const onChangeOrg = (e) => setValueOrg(e.target.value);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        userInfo.setInfo(prev => ({
            ...prev,
            who: whoHelp,
            location: location,
            organization: valueOrg
        }))
        setFormCount(prev => ({...prev, stepThree: false, stepFour: true}));
    }

    const isInvalid = ((valueOrg === '') ? location === '' : null ) || whoHelp.length === 0;
    
    return (
        <section className="section--form">
            <div className='form--header--box'>
                <div className="container--home">
                    <h2 className="form--header--title">Ważne!</h2>
                    <p className="form--header--text">Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.</p>
                </div>
            </div>
            <div className="form--body--box">
                <div className="container--home">
                    <form className="form--boby--info" onSubmit={handleSubmit}>
                        <span className="steps--counter">Krok 3/4</span>
                        <h2 className="form--body--title">Lokalizacja:</h2>
                        <label htmlFor="city" className="quantity--label">
                            <select
                                type="select"
                                id="city"
                                name="city"
                                value={location}
                                onChange={onChangeLocation}
                                className="quantity--select select--city"
                            >
                                <option className="select--option" value="">--wybierz--</option>
                                <option className="select--option" value="Poznań">Poznań</option>
                                <option className="select--option" value="Warszawa">Warszawa</option>
                                <option className="select--option" value="Kraków">Kraków</option>
                                <option className="select--option" value="Wrocław">Wrocław</option>
                                <option className="select--option" value="Katowice">Katowice</option>
                            </select>
                            <img src={arrow} className="select--arrow" />
                        </label>
                        <h3 className="who--help--title">Komu chcesz pomóc?</h3>
                        <div className="who--we--help">
                            <label htmlFor="who" className="checkbox--label">
                                <span className="checkbox--span">dzieciom </span>
                                    <input
                                        id="who"
                                        value="dzieciom"
                                        defaultChecked={checked}
                                        onChange={handleChange}
                                        onClick={onClick}
                                        type="checkbox"
                                        className="checkbox--input"
                                    />
                                <div className="checkbox--box"></div>
                            </label>
                            <label htmlFor="who" className="checkbox--label">
                                <span className="checkbox--span">samotnym matkom </span>
                                <input
                                    id="who"
                                    value="samotnym matkom"
                                    defaultChecked={checked}
                                    onChange={handleChange}
                                    onClick={onClick}
                                    type="checkbox"
                                    className="checkbox--input"
                                />
                                <div className="checkbox--box"></div>
                            </label>
                            <label htmlFor="who" className="checkbox--label">
                                <span className="checkbox--span">bezdomnym </span>
                                <input
                                    id="who"
                                    value="bezdomnym"
                                    defaultChecked={checked}
                                    onChange={handleChange}
                                    onClick={onClick}
                                    type="checkbox"
                                    className="checkbox--input"
                                />
                                <div className="checkbox--box"></div>
                            </label>
                            <label htmlFor="who" className="checkbox--label">
                                <span className="checkbox--span">niepełnosprawnym </span>
                                <input
                                    id="who"
                                    value="niepełnosprawnym"
                                    defaultChecked={checked}
                                    onChange={handleChange}
                                    onClick={onClick}
                                    type="checkbox"
                                    className="checkbox--input"
                                />
                                <div className="checkbox--box"></div>
                            </label>
                            <label htmlFor="who" className="checkbox--label">
                                <span className="checkbox--span">osobom starszym </span>
                                <input
                                    id="who"
                                    value="osobom starszym"
                                    defaultChecked={checked}
                                    onChange={handleChange}
                                    onClick={onClick}
                                    type="checkbox"
                                    className="checkbox--input"
                                />
                                <div className="checkbox--box"></div>
                            </label>
                        </div>
                        <label htmlFor="location" className="who--help--title location--label">
                            Wpisz nazwę konkretnej organizacji (opcjonalnie)
                            <input 
                                id="location"
                                name="location"
                                type="text"
                                className="address--input"
                                value={valueOrg}
                                onChange={onChangeOrg}
                                placeholder="Fundacja 'Pomoc dzieciom'"
                            />
                        </label>
                        <div className="form--btn--box">
                            <button className="form--btn" onClick={onClickBack}>Wstecz</button>
                            <button disabled={isInvalid} className="form--btn" type="submit">Dalej</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default StepThree;