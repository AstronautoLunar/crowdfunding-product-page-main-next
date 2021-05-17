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
}

export default function Button({ children, action, click, padding }: ButtonData) {
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
            <span className={styles.buttonText}>{ children }</span>
        </button>
    );
}