import React, { useState, useEffect } from "react";
import decoration from "../../../assets/Decoration.svg";
import app from "firebase/app";
import Fundations from "./Fundations";

const WhoWeHelp = () => {
    const [data, setData] = useState([]);
    const [showFundations, setShowFundations] = useState(true);
    const [showOrganizations, setShowOrganizations] = useState(false);
    const [showLocalOrg, setShowLocalOrg] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
            const db = app.firestore()  
            const dataFundations = await db.collection("fundations").get();
            setData(dataFundations.docs.map(doc => doc.data()));
        }
        fetchData();
    }, []);

    const onClick = (name) => {
        switch (name) {
            case "Fundacjom":
                setShowFundations(true);
                setShowOrganizations(false);
                setShowLocalOrg(false);
                break;
            case "Organizacjom pozarządowym":
                setShowFundations(false);
                setShowOrganizations(true);
                setShowLocalOrg(false);
                break;
            default:
                setShowFundations(false);
                setShowOrganizations(false);
                setShowLocalOrg(true);
                console.log(name)
                break;
        }
    }

    return (
        <section className="section--we--help">
            <div className="container--home">
                <h2 className="we--help--title">Komu pomagamy?</h2>
                <img className="we--help--img" src={decoration} />
                <div className="we--help--box">
                    <div className="we--help--btn--box">
                        <button 
                        onClick={(e) => onClick(e.target.firstChild.data)}
                            className={`we--help--btn ${(showFundations) && 'active--btn'}`}>
                            Fundacjom
                        </button>
                        <button 
                            onClick={(e) => onClick(e.target.firstChild.data)}
                            className={`we--help--btn ${(showOrganizations) && 'active--btn'}`}>
                            Organizacjom pozarządowym
                        </button>
                        <button 
                            onClick={(e) => onClick(e.target.firstChild.data)}
                            className={`we--help--btn ${(showLocalOrg) && 'active--btn'}`}>
                            Lokalnym zbiórkom
                        </button>
                    </div>
                        {data.map((item, id) => {
                            return (
                                <div key={id}>
                                    {(showFundations && id === 0) && <Fundations item={item} />}
                                    {(showOrganizations && id === 1) && <Fundations item={item} />}
                                    {(showLocalOrg && id === 2) && <Fundations item={item} />}
                                </div>
                            )
                        })}
                </div>
            </div>
        </section>
    )
}

export default WhoWeHelp;