import React, { useState } from "react";
import { useFormik } from "formik";
import decoration from "../../../assets/Decoration.svg";
import {postMessageToServer} from "../../../services/api";

const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = values => {
        const errors = {};

        if (!values.name) {
            errors.error = 'Pola nie mogą być puste';
        } else if (values.name.indexOf(" ") > -1) {
            errors.name = "Wpisz poprawnie swoje imię";
        }

        if (!values.email) {
            errors.error = "Pola nie mogą być puste";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Wpish poprawnie adres mailowy";
        }

        if (!values.message) {
            errors.error = "Pola nie mogą być puste";
            setIsSuccess(false);
        } else if (values.message.length < 120) {
            errors.message = "Wiadomość powinna zawierać conajmniej 120 znaków";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        validate,
        onSubmit: async (values) => {
            const serverRequest = await postMessageToServer(values);
            formik.values.name = '';
            formik.values.email = '';
            formik.values.message = '';
            setIsSuccess(true);
            return serverRequest;
        },
    });

    return (
        <footer className="section--contact" id="contact">
           <div className="container--home">
                <form className="contact--form" onSubmit={formik.handleSubmit}>
                    <h2 className="contact--title">Skontaktuj się z nami</h2>
                    <img className="contact--img" src={decoration} alt="decoration" />
                    {formik.errors.error && <div className="message--error">{formik.errors.error}</div>}
                    <div className="data--user--box">
                        <label htmlFor="name" className="contact--form--label">
                            Wpisz swoje imię
                            <input 
                                id="name" 
                                name="name"
                                type="text"
                                className="contact--form--input"
                                placeholder="Krzysztof" 
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name && <div className="message--error">{formik.errors.name}</div>}
                        </label>
                        <label htmlFor="email" className="contact--form--label">
                            Wpisz swój email
                            <input 
                                id="email" 
                                name="email"
                                type="email"
                                className="contact--form--input"
                                placeholder="abc@gmail.com"
                                onChange={formik.handleChange}
                                value={formik.values.email} 
                            />
                            {formik.errors.email && <div className="message--error">{formik.errors.email}</div>}
                        </label>
                    </div>
                    <label htmlFor="message" className="contact--form--label contact--label--textarea">
                        Wpisz swoją wiadomość
                        <textarea
                            component="textarea"
                            id="message"
                            name="message"
                            className="contact--form--textarea"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        {formik.errors.message && <div className="message--error">{formik.errors.message}</div>}
                    </label>
                    {isSuccess && <div className="success--message">Wiadomość wysłana!</div>}
                    <button 
                        type="submit" 
                        className="contact--form--submit">
                        Wyślij
                    </button>
                </form>
                <div className="contact--footer">
                    <span className="footer--copyright">Copyright by Coders Lab</span>
                    <div className="footer--icons">
                        <button>
                            <div className="footer--icon footer--icon--fb"></div>
                        </button>
                        <button>
                            <div className="footer--icon footer--icon--in"></div>
                        </button>
                    </div>
                </div>
           </div>
        </footer>
    )
}

export default Contact;