import React from "react";

const ThreeColumns = ()  => {
    return (
        <section className="section--three--columns">
            <div className="container--home">
                <div className="section--one--column">
                    <span className="one--column--number">10</span>
                    <p className="one--column--title">Oddanych worków</p>
                    <p className="one--column--text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

                <div className="section--one--column">
                    <span className="one--column--number">5</span>
                    <p className="one--column--title">Wspartych organizacji</p>
                    <p className="one--column--text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>

                <div className="section--one--column">
                    <span className="one--column--number">7</span>
                    <p className="one--column--title">Zorganizowany zbiórek</p>
                    <p className="one--column--text">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </div>
        </section>
    )
}

export default ThreeColumns;