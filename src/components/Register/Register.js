import React, { useContext, useState } from "react";
import Navigation from "../Home/Navigation/Navigation";
import decoration from "../../assets/Decoration.svg";
import {useFormik} from "formik";
import {Link, useHistory, withRouter} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import {FirebaseContext} from "../Firebase";
import { withFirebase } from '../Firebase';
import cx from "classnames";
import * as Yup from "yup";

const Register = () => {
    return (
        <section className="section--login">
            <div className="container--home">
                <Navigation />
                <div className="form--login--box">
                <h2 className="form--title">Zarejestruj się</h2>
                <img className="form--img" src={decoration} alt="decoration" />
                  <RegisterForm />  
                </div>
            </div>
        </section>
    )
}

const RegisterFormBase = () => {
    const firebase = useContext(FirebaseContext);
    const history = useHistory();
    const [error, setError] = useState(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Wpish poprawnie swój adres mailowy")
            .required("Podaj swój adres mailowy"),
        passwordOne: Yup.string()
            .min(6, "Podane hasło jest za krótkie!")
            .required('Wpisz hasło'),
        passwordTwo: Yup.string()
            .oneOf([Yup.ref("passwordOne"), null], "Hasła nie są jednakowe")
            .required("Powtórz hasło")
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            passwordOne: '',
            passwordTwo: '',
        },
        validationSchema,
        onSubmit: (values, event) => {
            firebase
                .doCreateUserWithEmailAndPassword(values.email, values.passwordOne)
                .then(authUser => {
                    history.replace(ROUTES.HOME);
                    return values;
                })
                .catch(error => {
                    setError(true);
                    return error;
                });
        
                event.preventDefault();
        }
    })

    const isInvalid = 
        formik.values.passwordOne === '' ||
        formik.values.passwordTwo === '' ||
        formik.values.email === '' ||
        formik.values.passwordOne !== formik.values.passwordTwo;

    return (
        <form className="form--login" onSubmit={formik.handleSubmit}>
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
                <label htmlFor="passwordOne" className="login--form--label">
                    Hasło
                    <input
                        name="passwordOne"
                        type="password"
                        id="passwordOne"
                        className={cx("login--form--input", {
                            "input--error": formik.errors.passwordOne,
                        })}
                        value={formik.values.passwordOne}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.passwordOne && <div className="message--error">{formik.errors.passwordOne}</div>}
                </label>
                <label htmlFor="passwordTwo" className="login--form--label">
                    Powtóż hasło
                    <input
                        name="passwordTwo"
                        type="password"
                        id="passwordTwo"
                        className={cx("login--form--input", {
                            "input--error": formik.errors.passwordTwo || formik.errors.password,
                        })}
                        value={formik.values.passwordTwo}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.passwordTwo && <div className="message--error">{formik.errors.passwordTwo}</div>}
                    {formik.errors.password && <div className="message--error">{formik.errors.password}</div>}
                </label>
            </div>
            {error && <div className="message--error">Email już istnieje</div>}
            <div className="login--form--btn--box">
                <Link className="form--login--link" to={ROUTES.LOG_IN}>Zaloguj konto</Link>
                <button disabled={isInvalid} type="submit" className="form--login--btn">Załóż konto</button>
            </div>
        </form>
    )
}

const RegisterForm = withRouter(withFirebase(RegisterFormBase));

export default Register;
