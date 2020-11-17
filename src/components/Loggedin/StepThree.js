import React, { useState, useContext } from "react";
import {FirebaseUserData} from "../Firebase/context";
import arrow from "../../assets/Icon-Arrow-Down.svg";

const arrayWhoHelps = ["dzieciom", "samotnym matkom", "bezdomnym", "niepełnosprawnym", "osobom starszym"];

const StepThree = ({setFormCount}) => {
    const userInfo = useContext(FirebaseUserData);
    const [location, setLocation] = useState(userInfo.info.location);
    const [whoHelp, setWhoHelp] = useState(userInfo.info.who);
    const [checked, setChecked] = useState(false);
    const [valueOrg, setValueOrg] = useState(userInfo.info.organization);
    
    const handleChange = () => setChecked(!checked);

    const onChangeLocation = (e) => setLocation(e.target.value);

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepTwo: true, stepThree: false}));
    }

    const onClick = (e) => {
        if (e.target.checked === true) {
            if (whoHelp.indexOf(e.target.value) === -1) {
                setWhoHelp(prev => [...prev, e.target.value]);
            }
        } else {
            const filteredItems = whoHelp.filter(item => item !== e.target.value);
            setWhoHelp([...filteredItems]);
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
                <div className="mobile--first--bg"></div>
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
                            <img src={arrow} className="select--arrow city--arrow" alt="arrow" />
                        </label>
                        <h3 className="who--help--title">Komu chcesz pomóc?</h3>
                        <div className="who--we--help">
                            {arrayWhoHelps.map((item, id) => {
                                return <label key={id} htmlFor={`who-${id}`} className="checkbox--label">
                                    <span className="checkbox--span">{item }</span>
                                        <input
                                            id={`who-${id}`}
                                            value={item}
                                            // defaultChecked={checked}
                                            checked={whoHelp.includes(item)}
                                            onChange={handleChange}
                                            onClick={onClick}
                                            type="checkbox"
                                            className="checkbox--input"
                                        />
                                    <div className="checkbox--box"></div>
                                </label>
                            })}
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
