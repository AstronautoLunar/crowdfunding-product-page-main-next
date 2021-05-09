import styles from './styles.module.scss';

export default function SubContainer({ children }) {
    return (
        <div className={styles.subContainer}>
            { children }
        </div>
    );
}