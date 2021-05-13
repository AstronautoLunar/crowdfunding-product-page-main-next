import styles from './styles.module.scss';

export default function SubPanel({ children, action }) {
    let styleOpacity = 1;
    if(action === true) {
        styleOpacity = 1;
    } else {
        styleOpacity = 0.5;
    }
    return (
        <div 
            className={styles.subPanel}
            style={{ opacity: styleOpacity }}
        >
            { children }
        </div>
    );
}