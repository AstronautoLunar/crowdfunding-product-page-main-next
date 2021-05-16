import styles from './styles.module.scss';

type TextData = {
    children: any;
    textAlign: any;
    marginTop: number;
    marginBottom: number;
}

export default function Text({ children, textAlign, marginTop, marginBottom }: TextData) {
    return (
        <p
            className={styles.text}
            style={{ 
                textAlign,
                marginTop,
                marginBottom, 
            }}
        >{ children }</p>
    );
}