import { useEffect, useState } from 'react';

import { useNav } from '../../contexts/NavContext';

import { Nav } from '../UI';

import styles from './styles.module.scss';

export default function Header() {
    let { navOpen, openNavBar, setNavOpen } = useNav(); 
    
    let [ navHidden, setHiddenOpen ] = useState(false);

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 770px)");

        function hiddenNavBar(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setHiddenOpen(navHidden = true);
            } else {
                setHiddenOpen(navHidden = false);
                setNavOpen(navOpen = false)
            }
        }

        hiddenNavBar(mediaQuerieList);

        mediaQuerieList.addListener(hiddenNavBar);
    }, [ 
        navHidden, 
        setHiddenOpen, 
        navOpen, 
        setNavOpen 
    ])

    const linksString = [
        { name: 'About', id: 0 },
        { name: 'Discover', id: 1 },
        { name: 'Get Started', id: 2 },
    ];
    
    return (
        <header id={styles.header} role="header">
            <span id={styles.logo}>crowdfund</span>
            {
                navHidden
                ?
                <div 
                    onClick={() => openNavBar()}
                    className={styles.buttonNav}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                :
                <nav id={styles.links}>
                    {
                        linksString.map(item => {
                            return (
                                <Nav key={item.id}>
                                    {item.name}
                                </Nav>
                            )
                        })
                    }
                </nav>

            }
        </header>
    );
}