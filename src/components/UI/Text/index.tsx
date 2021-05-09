import styles from './styles.module.scss';

type TextData = {
    children: any;
    textAlign: any;
    marginTopAndBottom: number;
}

export default function Text({ children, textAlign, marginTopAndBottom }: TextData) {
    return (
        <p
            className={styles.text}
            style={{ 
                textAlign,
                marginTop: marginTopAndBottom,
                marginBottom: marginTopAndBottom, 
            }}
        >{ children }</p>
    );
}