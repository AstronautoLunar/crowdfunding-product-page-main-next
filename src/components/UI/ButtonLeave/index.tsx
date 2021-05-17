import styles from './styles.module.scss';

export default function ButtonLeave({click}) {
    return (
        <div 
            className={styles.buttonLeave}
            onClick={() => click()}    
        >
            <img src="/icon-close-modal.svg" alt="icon close"/>
        </div>
    );
}