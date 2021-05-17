import SubPanel from '../SubPanel';
import Text from '../Text';
import Button from '../Button';

import { useState } from 'react';

import styles from './styles.module.scss';

export default function CheckBox({ 
    type, 
    title, 
    prace, 
    counter, 
    children, 
    action 
}) {
    let [ select, setSelect ] = useState(false);

    function toggleSelect() {
        setSelect(select = !select);
    }

    let displayStyle = 'none';

    if(select) {
        displayStyle = 'flex';
    } else {
        displayStyle = 'none';
    }

    return (
        <SubPanel
            action={action}
            marginTop={10}
            marginBottom={10}
            selected={select}
            padding={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
            }}
        >
            <div className={styles.checkBox}
                onClick={() => toggleSelect()}
            >
                <div className={styles.buttonCheck}>
                    <div 
                        className={styles.selected}
                        style={{display: displayStyle}}
                    >

                    </div>
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
            {
                select
                &&
                <>
                <hr/>
                <div className={styles.barSelect}>
                    <Text
                        textAlign="left"
                        marginTop={0}
                        marginBottom={0}
                    >Enter your Pledge</Text>
                    <div>
                        <div className={styles.areaInput}>
                            <Text
                                textAlign="left"
                                marginTop={0}
                                marginBottom={0}
                            >$</Text>
                            <input type="text"/>
                        </div>
                        <Button
                            padding={{
                                left: 20,
                                right: 20,
                                top: 15,
                                bottom: 15,
                            }}
                            action={true}
                            click={() => {}}
                        >Continue</Button>
                    </div>
                </div>
                </>
            }
        </SubPanel>
    );
}