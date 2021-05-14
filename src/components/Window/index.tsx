import styles from './styles.module.scss';

export default function Window({ children }) {
    return (
        <div id={styles.brightness}>
            <div id={styles.window}>
                { children }
            </div>
        </div>
    );
}