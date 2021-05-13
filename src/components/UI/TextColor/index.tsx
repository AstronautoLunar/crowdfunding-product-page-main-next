import styles from './styles.module.scss';

type TextColorData = {
    color: string;
    children: any;
}

export default function TextColor({ color, children }: TextColorData) {
return <span 
    className={styles.textColor}
    style={{ color, }}
    >Pledge ${ children } or more</span>
}