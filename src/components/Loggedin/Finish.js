import React from "react";
import decoration from "../../assets/Decoration.svg";

const Finish = () => {
    return (
        <section className="section--form">
            <div className="form--body--box">
                <div className="container--home">
                    <div className="finish--form--box">
                        <h2 className="finish--title">Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</h2>
                        <img className="finish--img" src={decoration} alt="decoration" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Finish; 