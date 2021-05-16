import styles from './styles.module.scss';

type TitleData = {
    type: string;
    children: any;
    marginTop: number;
    marginBottom: number;
    align: any;
}

export default function Title({ type, children, marginTop, marginBottom, align }: TitleData) {
    if(type === "h1") {
        return <h1 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h1>
    } else if(type === "h2") {
        return <h2 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h2>
    } else if(type === "h3") {
        return <h3 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h3>
    } else if(type === "h4") {
        return <h4 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h4>
    } else if(type === "h5") {
        return <h5 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h5>
    } else if(type === "h6") {
        return <h6 
        className={styles.title}
        style={{
            marginTop,
            marginBottom,
            textAlign: align,
        }}
        >{ children }</h6>
    }
}