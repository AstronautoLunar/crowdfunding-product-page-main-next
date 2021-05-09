import { useState } from 'react';

import styles from './styles.module.scss';

type srcData = {
    srcNoChecked: string;
    srcChecked: string;
}

type altData = {
    altNoChecked: string;
    altChecked: string;
}

type ButtonIconData = {
    children: any;
    src: srcData;
    alt: altData;
}

export default function ButtonIcon({ 
    src: { srcNoChecked, srcChecked },  
    alt: { altNoChecked, altChecked }}: ButtonIconData) {

    let [ checked, setChecked ] = useState(false);

    function checkComponent() {
        setChecked(checked = !checked);
    }
    return (
        <button 
            onClick={() => checkComponent()}
            className={styles.buttonIcon}>
            {
                checked
                ?
                <img 
                    src={srcChecked} 
                    alt={altChecked}
                />
                :
                <img 
                    src={srcNoChecked} 
                    alt={altNoChecked}
                />
            }
            <div className={styles.areaTextButtonIcon}>
                <span className={styles.textButtonIcon}>
                    {
                        checked
                        ?
                        <span className={styles.checked}>
                            Bookmarked
                        </span>
                        :
                        <span className={styles.noChecked}>
                            Bookmark
                        </span>
                    }
                    
                </span>
            </div>
        </button>
    );
}