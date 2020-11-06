import React, { useState, useEffect } from "react";
import decoration from "../../../assets/Decoration.svg";
import app from "firebase/app";
import Fundations from "./Fundations";
import cx from "classnames";

const WhoWeHelp = () => {
    const [items, setItems] = useState([]);
    const [activeItem, setActiveItem] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore();  
            const dataFundations = await db.collection("fundations").get();
            setItems(dataFundations.docs.map(doc => doc.data()));
        }
        fetchData();
    }, []);

    useEffect(() => setActiveItem(items[0]), [items]);
    
    const onClick = (item) => () => setActiveItem(item);

    return (
        <section className="section--we--help" id="organizations">
            <div className="container--home">
                <h2 className="we--help--title">Komu pomagamy?</h2>
                <img className="we--help--img" src={decoration} />
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
