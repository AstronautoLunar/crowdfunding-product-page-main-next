import styles from './styles.module.scss';

export default function Icon({ src, color, alt }) {
    return (
        <div 
            id={styles.iconLogo} 
            style={{ color: color }}
        >
            <img 
                src={src} 
                alt={alt}
            />
        </div>
    );
}