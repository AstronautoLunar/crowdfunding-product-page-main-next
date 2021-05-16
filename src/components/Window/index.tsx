import { useWindow } from '../../contexts/WindowContext';

import styles from './styles.module.scss';

export default function Window({ children, action }) {
    let styleDisplay = "none";
    if(action === true) {
        styleDisplay = "flex";
    } else {
        styleDisplay = "none";
    }

    let { toggleButton, stayWindow } = useWindow();

    return (
        <>
            <div 
                id={styles.brightness}
                style={{display: styleDisplay}}
                onClick={() => toggleButton()}    
            >
            </div>
            <div 
                style={{display: styleDisplay}}
                id={styles.window}
                >
                { children }
            </div>
        </>
    );
}