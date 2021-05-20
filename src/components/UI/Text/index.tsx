import styles from './styles.module.scss';

type TextData = {
    children: any;
    textAlign: any;
    margin: {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }
}

export default function Text({ children, textAlign, margin }: TextData) {
    return (
        <p
            className={styles.text}
            style={{ 
                textAlign,
                marginTop: margin.top,
                marginBottom: margin.bottom,
                marginLeft: margin.left,
                marginRight: margin.right, 
            }}
        >{ children }</p>
    );
}