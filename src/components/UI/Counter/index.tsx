import styles from './styles.module.scss';

export default function Counter({ children }) {
    return (
        <div className={styles.counter}>    
            <span className={styles.StrongTextCounter}>{ children }</span>
            <span className={styles.textCounter}>
                left
            </span>
        </div>
    );
}