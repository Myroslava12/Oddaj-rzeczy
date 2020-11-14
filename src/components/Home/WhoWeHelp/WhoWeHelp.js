import React, { useState, useEffect, useContext } from "react";
import decoration from "../../../assets/Decoration.svg";
import {FirebaseContext} from "../../Firebase";
import Fundations from "./Fundations";
import cx from "classnames";
import {fetchData} from "../../../services/api"

const WhoWeHelp = () => {
    const [items, setItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);
    const firebase = useContext(FirebaseContext);

    useEffect(() => fetchData(firebase, setItems), [firebase]);

    useEffect(() => setActiveItem(items[0]), [items]);
    
    const onClick = (item) => () => setActiveItem(item);

    return (
        <section className="section--we--help" id="organizations">
            <div className="container--home">
                <h2 className="we--help--title">Komu pomagamy?</h2>
                <img className="we--help--img" src={decoration} alt="decoration" />
                <div className="we--help--box">
                    <div className="we--help--btn--box">
                        {activeItem && items.map(item => {
                            return <button 
                                onClick={onClick(item)}
                                className={cx("we--help--btn", {
                                    "active--btn": item.id === activeItem.id,
                                })}
                                key={item.id}>
                                {item.name}
                            </button>
                        })}
                    </div>
                    {activeItem && <Fundations item={activeItem} />}
                </div>
            </div>
        </section>
    )
}

export default WhoWeHelp;
