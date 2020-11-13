import React, { useState, useContext } from "react";
import {useFormik} from "formik";
import TimeInput from 'react-time-input';
import {FirebaseUserData} from "../Firebase/context";

const StepFour = ({setFormCount}) => {
    const [hour, setHour] = useState('');
    const userInfo = useContext(FirebaseUserData);
    const validate = (values) => {
        const errors = {};

        if (!values.street) {
            errors.error = "Pola nie mogą być puste";
        } else if (values.street.length < 2) {
            errors.street = "Nazwa ulicy powinna zawierać conajmniej 2 litery";
        } 

        if (!values.city) {
            errors.error = "Pola nie mogą być puste";
        } else if (values.city.length < 2) {
            errors.city = "Nazwa miasta powinna zawierać conajmniej 2 znaki";
        }

        if (!values.postCode) {
            errors.error = "Pola nie mogą być puste";
        } else if (values.postCode.length !== 5 || !Number(values.postCode)) {
            errors.postCode = "Wpisz poprawnie kod pocztowy";
        }

        if (!values.numberPhone) {
            errors.error = "Pola nie mogą być puste";
        } else if (values.numberPhone.length !== 9 || !Number(values.numberPhone)) {
            errors.numberPhone = "Podaj poprawny numer telefonu";
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            street: '',
            city: '',
            postCode: '',
            numberPhone: '',
            date: '',
            comment: ''
        },
        validate,
        onSubmit: (values) => {
            setFormCount(prev => ({...prev, stepFour: false, summary: true}));
            userInfo.setInfo(prev => ({
                ...prev,
                address:{
                    street: values.street,
                    city: values.city,
                    postCode: values.postCode,
                    numberPhone: values.numberPhone,
                    date: values.date,
                    hour: hour,
                    comment: values.comment
                }
            }))
        }
    })

    const handleHour = (e) => setHour(e);

    const onClickBack = () => {
        setFormCount(prev => ({...prev, stepThree: true, stepFour: false}));
    }

    const isInvalid = formik.errors.error;

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
                                    {formik.errors.street && <div className="message--error">{formik.errors.street}</div>}
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
                                    {formik.errors.city && <div className="message--error">{formik.errors.city}</div>}
                                </label>
                                <label htmlFor="postCode" className="address--label">
                                    <span>Kod pocztowy</span>
                                    <input 
                                        id="postCode"
                                        name="postCode"
                                        type="text"
                                        className="address--input"
                                        value={formik.values.postCode}
                                        onChange={formik.handleChange}
                                        placeholder="55300"
                                    />
                                    {formik.errors.postCode && <div className="message--error">{formik.errors.postCode}</div>}
                                </label>
                                <label htmlFor="numberPhone" className="address--label">
                                    <span>Numer telefonu</span>
                                    <input 
                                        id="numberPhone"
                                        name="numberPhone"
                                        type="text"
                                        className="address--input"
                                        value={formik.values.numberPhone}
                                        onChange={formik.handleChange}
                                        placeholder="777555444"
                                    />
                                    {formik.errors.numberPhone && <div className="message--error">{formik.errors.numberPhone}</div>}
                                </label>
                            </div>
                            <div className="form--termin">
                                <h3 className="form--address--title">Termin odbioru:</h3>
                                <label htmlFor="date" className="address--label">
                                    <span>Data</span>
                                    <input
                                        id="date"
                                        type="text"
                                        value={formik.values.date}
                                        onChange={formik.handleChange}
                                        className="address--input date--input"
                                        placeholder="DD/MM/YYYY"
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