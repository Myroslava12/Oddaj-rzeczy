import React, { useState, useContext } from "react";
import {useFormik} from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeInput from 'react-time-input';
import {FirebaseUserData} from "../Firebase/context";

const StepFour = ({setFormCount}) => {
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const userInfo = useContext(FirebaseUserData);

    const formik = useFormik({
        initialValues: {
            street: '',
            city: '',
            postCode: '',
            numberPhone: '',
            comment: ''
        },
        onSubmit: (values, e) => {
            setFormCount(prev => ({...prev, stepFour: false, summary: true}));
            userInfo.setInfo(prev => ({
                ...prev,
                address:{
                    street: values.street,
                    city: values.city,
                    postCode: values.postCode,
                    numberPhone: values.numberPhone,
                    date: date,
                    hour: hour,
                    comment: values.comment
                }
            }))
            e.preventDefault();
        }
    })

    const handleHour = (e) => setHour(e);

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepThree: true, stepFour: false}));
    }

    const isInvalid = formik.values.street < 2 ||
        formik.values.city < 2 ||
        formik.values.numberPhone !== 9;


    return (
        <section className="section--form">
            <div className='form--header--box'>
                <div className="container--home">
                    <h2 className="form--header--title">Ważne!</h2>
                    <p className="form--header--text">Podaj adres oraz termin odbioru rzeczy.</p>
                </div>
            </div>
            <div className="form--body--box">
                <div className="container--home">
                    <form className="form--boby--info" onSubmit={formik.handleSubmit}>
                        <span className="steps--counter">Krok 4/4</span>
                        <h2 className="form--body--title">Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
                        <div className="form--address--box">
                            <div className="form--address">
                                <h3 className="form--address--title">Adres odbioru:</h3>
                                <label htmlFor="street" className="address--label">
                                    Ulica
                                    <input 
                                        id="street"
                                        name="street"
                                        type="text"
                                        className="address--input"
                                        value={formik.values.street}
                                        onChange={formik.handleChange}
                                        placeholder="Podaj nazwe ulicę, numer domu i mieszkania"
                                    />
                                </label>
                                <label htmlFor="city" className="address--label">
                                    Miasto
                                    <input 
                                        id="city"
                                        name="city"
                                        type="text"
                                        className="address--input"
                                        value={formik.values.city}
                                        onChange={formik.handleChange}
                                        placeholder="Podaj nazwe miasta"
                                    />
                                </label>
                                <label htmlFor="postCode" className="address--label">
                                    <span>Kod pocztowy</span>
                                    <input 
                                        id="postCode"
                                        name="postCode"
                                        type="number"
                                        className="address--input"
                                        value={formik.values.postCode}
                                        onChange={formik.handleChange}
                                        placeholder="55300"
                                    />
                                </label>
                                <label htmlFor="numberPhone" className="address--label">
                                    <span>Numer telefonu</span>
                                    <input 
                                        id="numberPhone"
                                        name="numberPhone"
                                        type="number"
                                        className="address--input"
                                        value={formik.values.numberPhone}
                                        onChange={formik.handleChange}
                                        placeholder="777555444"
                                    />
                                </label>
                            </div>
                            <div className="form--termin">
                                <h3 className="form--address--title">Termin odbioru:</h3>
                                <label htmlFor="date" className="address--label">
                                    <span>Data</span>
                                    <DatePicker 
                                        id="date"
                                        selected={date} 
                                        onChange={date => setDate(date)}
                                        className="address--input date--input"
                                    />
                                </label>
                                <label htmlFor="date" className="address--label">
                                    Godzina
                                    <TimeInput 
                                        id="date"
                                        initTime={hour} 
                                        onTimeChange={handleHour}
                                        className="address--input"
                                        placeholder="08:30"
                                    />
                                </label>
                                <label htmlFor="comment" className="address--label">
                                    <span>Uwagi dla kuriera</span>
                                    <textarea 
                                        id="comment"
                                        name="comment"
                                        rows="5"
                                        type="text"
                                        className="address--input termin--input"
                                        value={formik.values.comment}
                                        onChange={formik.handleChange}
                                        placeholder="Twoje uwagi..."
                                    />
                                </label>
                            </div>
                        </div>
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

export default StepFour;