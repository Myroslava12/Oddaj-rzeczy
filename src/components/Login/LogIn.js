import React, {useContext} from "react";
import Navigation from "../Home/Navigation/Navigation";
import decoration from "../../assets/Decoration.svg";
import {useFormik} from "formik";
import {Link, useHistory, withRouter} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import {FirebaseContext} from "../Firebase";
import { withFirebase } from '../Firebase';
import cx from "classnames";
import * as Yup from "yup";

const LogIn = () => {
    return (
        <section className="section--login">
            <div className="container--home">
                <Navigation />
                <div className="form--login--box">
                    <h2 className="form--title">Zaloguj się</h2>
                    <img className="form--img" src={decoration} alt="decoration" />
                    <LoginForm />
                </div>
            </div>
        </section>
    )
}

const LoginFormBase = () => {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Wpish poprawnie swój adres mailowy")
            .required("Podaj swój adres mailowy"),
        password: Yup.string()
            .min(6, "Podane hasło jest za krótkie!")
            .required('Wpisz hasło')
    })
 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values) => {
            firebase
                .doSignInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                    history.replace(ROUTES.HOME);
                    return values;
                })
                .catch(error => {
                    return error;
                });
        }
    });
            
    const isInvalid = formik.values.password === '' || formik.values.email === '';

    return (
        <form className="form--login" onClick={formik.handleSubmit}>
            <div className="form--box">
                <label htmlFor="email" className="login--form--label">
                    Email
                    <input
                        name="email"
                        type="email"
                        id="email"
                        className={cx("login--form--input", {
                            "input--error": formik.errors.email,
                        })}
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.email && <div className="message--error">{formik.errors.email}</div>}
                </label>
                <label htmlFor="password" className="login--form--label">
                    Hasło
                    <input
                        name="password"
                        type="password"
                        id="password"
                        className={cx("login--form--input", {
                            "input--error": formik.errors.email,
                        })}
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.password && <div className="message--error">{formik.errors.password}</div>}
                </label>
            </div>
            <div className="login--form--btn--box">
                <Link className="form--login--link" to={ROUTES.REGISTER}>Załóż konto</Link>
                <button disabled={isInvalid} type="submit" className="form--login--btn">Zaloguj się</button>
            </div>
        </form>
    )
}

const LoginForm = withRouter(withFirebase(LoginFormBase));

export default LogIn;
