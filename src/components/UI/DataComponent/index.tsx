import styles from './styles.module.scss';

type DataComponentType = {
    strongText: string;
    weakText: string;
    marginRight: number;
}

export default function DataComponent({ strongText, weakText, marginRight }: DataComponentType) {
    return (
        <div 
            className={styles.dataComponent}
            style={{ marginRight }}
        >
            <h1>{ strongText }</h1>
            <span>{ weakText }</span>
        </div>
    );
}