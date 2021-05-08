import styles from './styles.module.scss';

export default function BackgroundImage({ children }) {
    return (
        <div id={styles.image}>
            { children }
        </div>
    );
}