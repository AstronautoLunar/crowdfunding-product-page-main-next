import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export default function Counter({ children }) {
    let [ 
        marginBottom, 
        setMarginBottom 
    ] = useState(0)

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 700px)")

        function toAddMarginBottom(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setMarginBottom(marginBottom = 15);
            } else {
                setMarginBottom(marginBottom = 0);
            }
        }

        toAddMarginBottom(mediaQuerieList);

        mediaQuerieList.addListener(toAddMarginBottom);
    }, [ marginBottom, setMarginBottom ])

    return (
        <div
            style={{
                marginBottom,
            }}
            className={styles.counter}
        >    
            <span 
                className={styles.StrongTextCounter}
            >
                { children }
            </span>
            <span className={styles.textCounter}>
                left
            </span>
        </div>
    );
}