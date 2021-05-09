import styles from './styles.module.scss';

type levelOneTitleData = {
    children: any;
    fontSize: number;
    marginTop: number;
}

export default function LevelOneTitle({ children, fontSize, marginTop = 0}: levelOneTitleData) {
    return (
        <h1 
            style={{
                fontSize,
                marginTop
            }}
            className={styles.levelOneTitle}
        >{children}</h1>
    );
}