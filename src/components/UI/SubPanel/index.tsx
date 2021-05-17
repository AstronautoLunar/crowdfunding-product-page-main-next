import styles from './styles.module.scss';

type SubPanelData = {
    children: any;
    action: boolean;
    marginTop: number;
    marginBottom: number;
    padding: {
        left: number;
        right: number;
        top: number;
        bottom: number;
    };
    selected: boolean;
}

export default function SubPanel({ 
    children, 
    action, 
    marginTop, 
    marginBottom,
    padding,
    selected 
}: SubPanelData) {
    
    let styleOpacity = 1;
    if(action === true) {
        styleOpacity = 1;
    } else {
        styleOpacity = 0.5;
    }

    let borderColor = 'rgba(0, 0, 0, 0.2)';
    if(selected) {
        borderColor = 'hsl(176, 50%, 47%)'
    } else {
        borderColor = 'rgba(0, 0, 0, 0.2)';
    }

    return (
        <div 
            className={styles.subPanel}
            style={{ 
                opacity: styleOpacity,
                marginTop,
                marginBottom,
                borderColor,
                paddingLeft: padding.left,
                paddingRight: padding.right,
                paddingTop: padding.top,
                paddingBottom: padding.bottom,
            }}
        >
            { children }
        </div>
    );
}