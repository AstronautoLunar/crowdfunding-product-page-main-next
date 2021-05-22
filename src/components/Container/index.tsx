import styles from './styles.module.scss';

type ContainerData = {
    children: any;
    openForNav: boolean;
    finalTop: string;
}

export default function Container({ children, openForNav, finalTop }: ContainerData) {
    return (
        <div 
            id={styles.container}
            style={
                openForNav
                ?
                {
                    top: finalTop
                }
                :
                {
                    top: "50%"
                }
            }
        >
            { children }
        </div>
    );
}