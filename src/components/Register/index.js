import React, { useContext, useState } from "react";
import Navigation from "../Home/Navigation";
import decoration from "../../assets/Decoration.svg";
import {useFormik} from "formik";
import {Link, useHistory, withRouter} from "react-router-dom";
import * as ROUTES from '../../constants/routes';
import {FirebaseContext} from "../Firebase";
import { withFirebase } from '../Firebase';
import cx from "classnames";

const Register = () => {

    return (
        <section className="section--login">
            <div className="container--home">
                <Navigation />
                <div className="form--login--box">
                <h2 className="form--title">Zarejestruj się</h2>
                <img className="form--img" src={decoration} />
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

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.error = "Pola nie mogą być puste";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = "Podany email jest niepoprawny!";
        }

        if (!values.passwordOne) {
            errors.error = 'Pola nie mogą być puste';
        } else if (values.passwordOne.length < 6) {
            errors.passwordOne = "Hasło powinno zawierać 6 znaków!";
        }

        if (!values.passwordTwo) {
            errors.error = 'Pola nie mogą być puste';
        } else if (values.passwordTwo.length < 6) {
            errors.passwordTwo = "Hasło nie jest poprawne!";
        } else if (values.passwordOne !== values.passwordTwo) {
            errors.password = "Hasła nie są jednakowe"
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            passwordOne: '',
            passwordTwo: '',
        },
        validate,
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