import styles from './styles.module.scss';

type ButtonData = {
    children: any;
    action: boolean;
    click: () => void;
}

export default function Button({ children, action, click }: ButtonData) {
    return (
        <button 
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