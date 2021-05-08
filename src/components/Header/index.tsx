import styles from './styles.module.scss';

export default function Header() {
    return (
        <header id={styles.header} role="header">
            <h1>Olá mundo</h1>
        </header>
    );
}