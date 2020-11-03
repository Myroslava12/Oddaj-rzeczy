import React from "react";
import {useFormik} from "formik";
import decoration from "../../../assets/Decoration.svg";

const Contact = () => {
    return (
        <footer className="section--contact" id="contact">
           <div className="container--home">
                <form className="contact--form">
                    <h2 className="contact--title">Skontaktuj się z nami</h2>
                    <img className="contact--img" src={decoration} />
                    <div className="data--user--box">
                        <label htmlFor="name" className="contact--form--label">
                            Wpisz swoje imię
                            <input 
                                id="name" 
                                name="name"
                                type="text"
                                className="contact--form--input"
                                placeholder="Krzysztof" 
                            />
                        </label>
                        <label htmlFor="email" className="contact--form--label">
                            Wpisz swój email
                            <input 
                                id="email" 
                                name="email"
                                type="email"
                                className="contact--form--input"
                                placeholder="abc@gmail.com" 
                            />
                        </label>
                    </div>
                    <label htmlFor="message" className="contact--form--label contact--label--textarea">Wpisz swoją wiadomość</label>
                    <textarea
                        component="textarea"
                        id="message"
                        name="message"
                        className="contact--form--textarea"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                    />
                    <button type="submit" className="contact--form--submit">Wyślij</button>
                </form>
                <div className="contact--footer">
                    <span className="footer--copyright">Copyright by Coders Lab</span>
                    <div className="footer--icons">
                        <a href="#">
                            <div className="footer--icon footer--icon--fb"></div>
                        </a>
                        <a href="#">
                            <div className="footer--icon footer--icon--in"></div>
                        </a>
                    </div>
                </div>
           </div>
        </footer>
    )
}

export default Contact;