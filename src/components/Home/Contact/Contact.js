import React, { useState } from "react";
import { useFormik } from "formik";
import decoration from "../../../assets/Decoration.svg";
import {postMessageToServer} from "../../../services/api";
import * as Yup from "yup";
import cx from "classnames";

const Contact = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Podaj swoje imię"),
        email: Yup.string()
            .email("Wpish poprawnie swój adres mailowy")
            .required("Podaj swój adres mailowy"),
        message: Yup.string()
            .required("Pole nie może być puste")
            .min(120, "Wiadomość powinna zawierać conajmniej 120 znaków")
    })

    const resetForm = () => {
        formik.values.name = '';
        formik.values.email = '';
        formik.values.message = '';
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          message: '',
        },
        handleChange: e => {
            const result = e.target.value.trim();
            formik.setFieldValue(e.target.value = result);
        },
        validationSchema,
        onSubmit: async (values) => {
            if(formik.values.name.indexOf(" ") > -1) {
                setIsError(true);
            } else {
                const serverRequest = await postMessageToServer(values);
                resetForm();
                setIsError(false);
                setIsSuccess(true);
                return serverRequest;
            }
        },
    });

    return (
        <footer className="section--contact" id="contact">
           <div className="container--home">
                <form className="contact--form" onSubmit={formik.handleSubmit}>
                    <h2 className="contact--title">Skontaktuj się z nami</h2>
                    <img className="contact--img" src={decoration} alt="decoration" />
                    <div className="data--user--box">
                        <label htmlFor="name" className="contact--form--label">
                            Wpisz swoje imię
                            <input 
                                id="name" 
                                name="name"
                                type="text"
                                className={cx("contact--form--input", {
                                    "input--error": formik.errors.name,
                                })}
                                placeholder="Krzysztof" 
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {isError && <div className="message--error">Pole nie powinno zawierać spacji</div>}
                            {formik.errors.name && <div className="message--error">{formik.errors.name}</div>}
                        </label>
                        <label htmlFor="email" className="contact--form--label">
                            Wpisz swój email
                            <input 
                                id="email" 
                                name="email"
                                type="email"
                                className={cx("contact--form--input", {
                                    "input--error": formik.errors.email,
                                })}
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
                            className={cx("contact--form--textarea", {
                                "input--error": formik.errors.message,
                            })}
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