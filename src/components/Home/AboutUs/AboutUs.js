import React from "react";
import decoration from "../../../assets/Decoration.svg";
import signature from "../../../assets/Signature.svg";

const AboutUs = () => {
    return (
        <section className="section--about--us" id="aboutUs">
            <div className="about--us--info--box">
                <h2 className="about--us--title">O nas</h2>
                <img className="about--us--img" src={decoration} />
                <p className="about--us--text">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <img className="about--us--signature" src={signature} />
            </div>
            <div className="about--us--bg--img"></div>
        </section>
    )
}

export default AboutUs;