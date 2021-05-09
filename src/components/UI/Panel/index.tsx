import styles from './styles.module.scss';

export default function Panel({ children }) {
    return (
        <div id={styles.panel}>
            { children }
        </div>
    );
}