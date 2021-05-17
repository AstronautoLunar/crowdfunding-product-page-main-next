import { useWindow } from '../../contexts/WindowContext';

import styles from './styles.module.scss';

type WindowData = {
    children: any;
    action: boolean;
}

export default function Window({ children, action }: WindowData) {
    let styleDisplay = "none";
    if(action === true) {
        styleDisplay = "flex";
    } else {
        styleDisplay = "none";
    }

    let { toggleButton } = useWindow();

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