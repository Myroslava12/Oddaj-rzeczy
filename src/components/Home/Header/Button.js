import React, { useContext } from "react";
import * as ROUTES from "../../../constants/routes";
import {Link} from 'react-router-dom';
import {FirebaseUserLoggedIn} from "../../Firebase/context";

const Button = ({text, className}) => {
    const userLoggedIn = useContext(FirebaseUserLoggedIn);

    return (
        <Link to={userLoggedIn ? ROUTES.FORM : ROUTES.LOG_IN} className={className}>
            <span>{text}</span>
        </Link>
    )
}

export default Button;