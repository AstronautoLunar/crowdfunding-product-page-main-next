import styles from './styles.module.scss';

type ButtonData = {
    children: any;
    action: boolean;
}

export default function Button({ children, action }: ButtonData) {
    return (
        <button className={styles[
            action === true
            ?
            "buttonOn"
            :
            "buttonOff"
        ]}>
            <span className={styles.buttonText}>{ children }</span>
        </button>
    );
}