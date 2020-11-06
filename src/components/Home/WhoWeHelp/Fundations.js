import React from "react";
import Pagination from "./Pagination";

const Fundations = ({item}) => {

    return (
        <div className="we--help--info">
            <p className="we--help--text active">{item.description}</p>
            <div className="organizations--box">
                <Pagination organizations={item.items} />
            </div>
        </div>
    )
}



export default Fundations;
