import styles from './styles.module.scss';

type LinkData = {
    children: string;
}

export default function LinkHeader({ children }: LinkData) {
    return (
        <div id={styles.link}>
            <span id={styles.linkText}>{children}</span>
        </div>
    );
}