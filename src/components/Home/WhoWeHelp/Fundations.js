import React, { useState } from "react";
import Pagination from "./Pagination";

const Fundations = ({item}) => {
    const organizations = item.items.map(el => el);
    console.log(organizations.length)
    return (
        <div className="we--help--info">
            <p className="we--help--text active">{item.description}</p>
            <div className="organizations--box">
                <Pagination organizations={organizations} />
            </div>
        </div>
    )
}



export default Fundations;
