import styles from './styles.module.scss';

type ButtonData = {
    children: any;
    action: boolean;
    click: () => void;
    padding: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    }
    fontSize: number;
}

export default function Button({ 
    children, 
    action, 
    click, 
    padding, 
    fontSize,
}: ButtonData) {
    return (
        <button
            style={{
                paddingLeft: padding.left,
                paddingRight: padding.right,
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
            }}
            className={styles[
                action === true
                ?
                "buttonOn"
                :
                "buttonOff"
            ]}
            onClick={() => click()}
        >
            <span 
                className={styles.buttonText}
                style={{
                    fontSize,
                }}
            >{ children }</span>
        </button>
    );
}