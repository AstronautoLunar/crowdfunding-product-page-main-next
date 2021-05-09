import styles from './styles.module.scss';

export default function Container({ children }) {
    return (
        <div id={styles.container}>
            { children }
        </div>
    );
}