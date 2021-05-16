import SubPanel from '../SubPanel';
import TextColor from '../TextColor';
import Text from '../Text';

import styles from './styles.module.scss';

export default function CheckBox({ type, title, prace, counter, children, action }) {
    return (
        <SubPanel
            action={action}
            marginTop={10}
            marginBottom={10}
        >
            <div className={styles.checkBox}>
                <div className={styles.buttonCheck}>

                </div>
                {
                    type === "purchase"
                    &&
                    <article className={styles.articlePurchase}>
                        <div className={styles.titles}>
                            <h4 className={styles.titleCheckBox}>
                                { title }
                            </h4>
                            <h4 className={styles.price}>
                                Pledge ${ prace } or more
                            </h4>
                            <div className={styles.counter}>
                                <span className={styles.stronger}>{ counter }</span>
                                <span className={styles.weak}>
                                    left
                                </span>
                            </div>
                        </div>
                        <Text 
                            textAlign="left"
                            marginTop={10}
                            marginBottom={0}
                        >
                            { children }
                        </Text>
                    </article>
                    ||
                    type === "checkBox"
                    &&
                    <article className={styles.articleCheckBox}>
                        <h4 className={styles.titleCheckBox}>Pledge with no reward</h4>
                        <Text 
                            textAlign="left"
                            marginTop={10}
                            marginBottom={0}
                        >
                            Choose to support us without a reward if you simply believe in our project. As a backer you will be signed up to receive product updates via email.
                        </Text>
                    </article>
                }
            </div>
        </SubPanel>
    );
}