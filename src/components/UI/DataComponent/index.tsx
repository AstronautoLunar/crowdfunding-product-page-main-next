import styles from './styles.module.scss';

type DataComponentType = {
    strongText: string;
    weakText: string;
}

export default function DataComponent({ strongText, weakText }: DataComponentType) {
    return (
        <div 
            className={styles.dataComponent}
        >
            <h1>{ strongText }</h1>
            <span>{ weakText }</span>
        </div>
    );
}