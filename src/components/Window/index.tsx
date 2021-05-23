import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

type WindowData = {
    children: any;
    action: boolean;
    click: () => void;
    alignItems: string;
    left: string | number
}

export default function Window({ 
    children, 
    action, 
    click, 
    alignItems, 
    left,
}: WindowData) {
    let [ width, setWidth ] = useState("")

    let styleDisplay = "none";
    if(action === true) {
        styleDisplay = "flex";
    } else {
        styleDisplay = "none";
    }

    useEffect(() => {
        const mediaQuerieList = matchMedia("(max-width: 700px)");

        function changeWidthResponsive(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setWidth(width = "auto");
            } else {
                setWidth(width = "600px");
            }
        }

        changeWidthResponsive(mediaQuerieList);

        mediaQuerieList.addListener(changeWidthResponsive);
    }, [ width, setWidth ])

    return (
        <>
            <div 
                className={styles.brightness}
                style={{display: styleDisplay}}
                onClick={() => click()}    
            >
            </div>
            <div 
                style={{
                    display: styleDisplay,
                    alignItems,
                    width,
                    left
                }}
                className={styles.window}
                >
                { children }
            </div>
        </>
    );
}