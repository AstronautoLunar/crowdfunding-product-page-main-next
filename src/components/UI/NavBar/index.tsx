import styles from './styles.module.scss';

type NavBarData = {
    children: any;
    open: boolean;
    finalHeight: number;
}

export default function NavBar({ children, open, finalHeight }: NavBarData) {
    return (
        <nav 
            className={styles.navBar}
            style={
                open 
                ? 
                { height: finalHeight }
                :
                { height: 0 }
            }
        >
            { children }
        </nav>
    );
}