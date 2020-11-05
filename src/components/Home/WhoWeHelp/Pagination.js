import React, { useState } from "react";

const Pagination = ({organizations}) => {
    const [pages, setPages] = useState({
        items: organizations,
        currentPage: 1,
        itemsPerPage: 3
    })

    const handleClick = (e) => {
        setPages(prev => ({...prev, currentPage: Number(e.target.innerText)}));
    }

    const {items, currentPage, itemsPerPage} = pages;

    const indexOfLastTodo = currentPage * itemsPerPage;
    const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
    const currentItems = items.slice(indexOfFirstTodo, indexOfLastTodo);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="organizations--box">  
            <ul className="organizations--items--box">
            {currentItems.map((currentItem, id) => {
                return (
                    <li key={id} className="organization--title--box">
                        <div className="organization--titles">
                            <p className="organization--header">{currentItem.header}</p>
                            <p className="organization--description">{currentItem.description}</p>
                        </div>
                        <p className="organization--subheader">{currentItem.subheader}</p>
                    </li>
                )
            })}    
            </ul>
            <ul className="pagination--numbers--box">
                {pageNumbers.map((number, id) => {
                    return (
                        <li key={id} className="pagination--number">
                            {(items.length > 3) && <button 
                                className={`pagination--number--btn ${(currentPage === number) && 'active--btn'}`} 
                                onClick={(e) => handleClick(e)}>
                                {number}
                            </button>}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Pagination;