import styles from './styles.module.scss';

type NavData = {
    children: string;
}

export default function Nav({ children }: NavData) {
    return (
        <div id={styles.link}>
            <span id={styles.linkText}>{children}</span>
        </div>
    );
}