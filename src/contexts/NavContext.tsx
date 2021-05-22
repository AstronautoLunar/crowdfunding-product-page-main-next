import { createContext, useState, useContext } from 'react';

type NavOpenData = {
    navOpen: boolean,
    setNavOpen: any;
    openNavBar: () => void;
}

const NavContext = createContext({} as NavOpenData);

export function NavProvider({ children }) {
    let [ navOpen, setNavOpen ] = useState(false);

    function openNavBar() {
        setNavOpen(navOpen = !navOpen);
    }

    return (
        <NavContext.Provider value={{ 
            navOpen, 
            openNavBar,
            setNavOpen,
        }}>
            { children }
        </NavContext.Provider>
    )
}

export function useNav() {
    return useContext(NavContext);
}