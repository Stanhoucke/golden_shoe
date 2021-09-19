import React, { useEffect, useState } from "react";
import Request from "../helpers/Request";

const ShoeContext = React.createContext();

const ShoeProvider = ({children}) => {
    const [shoes, setShoes] = useState([]);
    const [featuredShoes, setFeaturedShoes] = useState([]);

    const request = new Request();

    useEffect (() => {
        fetchShoes();
    }, [])
    
    const fetchShoes = () => {
    request.get("/api/shoes")
    .then(data => {
        setShoes(data)

        const featuredShoes = data.filter((shoe) => {
        return shoe.featured;
        });
        setFeaturedShoes(featuredShoes);

    })
    }

    return (
        <ShoeContext.Provider value = {{shoes, featuredShoes, fetchShoes}}>
            {children}
        </ShoeContext.Provider>
    );
};

export {ShoeContext, ShoeProvider};
