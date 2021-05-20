import { useWindow } from '../../contexts/WindowContext';

import styles from './styles.module.scss';

type WindowData = {
    children: any;
    action: boolean;
    alignItems: string;
    width: number,
    click: () => void;
}

export default function Window({ children, action, click, alignItems, width }: WindowData) {
    let styleDisplay = "none";
    if(action === true) {
        styleDisplay = "flex";
    } else {
        styleDisplay = "none";
    }

    // if(typeWindow === "")

    // let { toggleButton } = useWindow();

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
                    width
                }}
                className={styles.window}
                >
                { children }
            </div>
        </>
    );
}