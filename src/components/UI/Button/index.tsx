import styles from './styles.module.scss';

type ButtonData = {
    children: any;
}

export default function Button({ children }: ButtonData) {
    return (
        <button className={styles.button}>
            <span className={styles.buttonText}>{ children }</span>
        </button>
    );
}