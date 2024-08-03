import { createContext, useState, useEffect } from 'react';

import {getCategoriesAndDocuments,addCollectionAndDocuments } from '../utils/firebase/firebase.utils'

import {MAINLINES} from "/Users/alexjiang/chess-website/src/routes/gallery/content/data.mainlines.js"
export const OpeningsContext = createContext({
    OpeningsMap: {},
});

export const OpeningsProvider = ({ children }) => {
    const [OpeningsMap, setOpeningsMap] = useState({});
    
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setOpeningsMap(categoryMap);
        };

        getCategoriesMap();
    }, []);
    useEffect(() => {
        addCollectionAndDocuments('openings', MAINLINES)
    }, []);
    const value = { OpeningsMap };
    return (
        <OpeningsContext.Provider value={value}>
            {children}
        </OpeningsContext.Provider>
    );
};

//check
