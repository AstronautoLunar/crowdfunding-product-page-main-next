import SubPanel from '../SubPanel';
import Text from '../Text';
import Button from '../Button';

import { useState, useEffect } from 'react';

import { useWindow } from '../../../contexts/WindowContext';

import styles from './styles.module.scss';

export default function CheckBox({ 
    type, 
    title, 
    prace, 
    counter, 
    children, 
    action 
}) {
    let { 
        togglePurchase, 
        valuePurchase, 
        purchaseObject 
    } = useWindow();
    let [ select, setSelect ] = useState(false);
    let [ replacementCounter, setReplacementCounter ] = useState(false);
    let [ 
        changeMarginLeftText,
        setChangeMarginLeftText 
    ] = useState(57)
    let [ 
        changeMarginBottomText, 
        setChangeMarginBottomText 
    ] = useState(0);
    let [ 
        changeMarginBottomSelect, 
        setChangeMarginBottomSelect
    ] = useState(0);

    function toggleSelect() {
        setSelect(select = !select);
    }

    let displayStyle = 'none';

    if(select) {
        displayStyle = 'flex';
    } else {
        displayStyle = 'none';
    }

    useEffect(() => {
        const mediaQuerieList1 = matchMedia("(max-width: 700px");

        function setResponsive1(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setReplacementCounter(replacementCounter = true);
                setChangeMarginLeftText(changeMarginLeftText = 0);
                setChangeMarginBottomText(changeMarginBottomText = 20);
            } else {
                setReplacementCounter(replacementCounter = false);
                setChangeMarginLeftText(changeMarginLeftText = 57);
                setChangeMarginBottomText(changeMarginBottomText = 0);
            }
        }

        setResponsive1(mediaQuerieList1);

        mediaQuerieList1.addListener(setResponsive1);

        const mediaQuerieList2 = matchMedia("(max-width: 500px)");

        function setResponsive2(mediaQuerieList) {
            if(mediaQuerieList.matches) {
                setChangeMarginBottomSelect(changeMarginBottomSelect = 15);
            } else {
                setChangeMarginBottomSelect(changeMarginBottomSelect = 0);
            }
        }

        setResponsive2(mediaQuerieList2);

        mediaQuerieList2.addListener(setResponsive2);
    }
    , [ 
        replacementCounter,
        setReplacementCounter, 
        changeMarginLeftText,
        setChangeMarginLeftText,
        changeMarginBottomText,
        setChangeMarginBottomText,
        changeMarginBottomSelect, 
        setChangeMarginBottomSelect
    ])

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
                onClick={
                    action === true 
                    ? 
                    () => toggleSelect()
                    :
                    () => {}
                }
            >
                {
                    type === "purchase"
                    &&
                    <article 
                        className={styles.articlePurchase}
                    >
                        <div 
                        className={styles.titles}
                        >
                            <div 
                                className={styles.buttonCheck}
                            >
                                <div 
                                    className={styles.selected}
                                    style={{display: displayStyle}}
                                >
                                </div>
                            </div>
                            <div 
                                className={styles.titleAndPrice}
                            >
                                <h4 className={styles.titleCheckBox}>
                                    { title }
                                </h4>
                                <h4 className={styles.price}>
                                    Pledge ${ prace } or more
                                </h4>
                            </div>
                            {
                                replacementCounter
                                ||
                                <div className={styles.counterHidden}>
                                    <span className={styles.stronger}>{ counter }</span>
                                    <span className={styles.weak}>
                                        left
                                    </span>
                                </div>
                            }
                        </div>
                        <Text 
                            textAlign="justify"
                            margin={{
                                top: 10,
                                bottom: changeMarginBottomText,
                                left: changeMarginLeftText,
                                right: 0,
                            }}
                        >
                            { children }
                        </Text>
                        {
                            replacementCounter
                            &&
                            <div className={styles.counterVisible}>
                                <span className={styles.stronger}>{ counter }</span>
                                <span className={styles.weak}>
                                    left
                                </span>
                            </div>
                        }
                    </article>
                    ||
                    type === "checkBox"
                    &&
                    <article className={styles.articleCheckBox}>
                        <div 
                        className={styles.titles}
                            >
                            <div className={styles.buttonCheck}>
                                <div 
                                    className={styles.selected}
                                    style={{display: displayStyle}}
                                >
                                </div>
                            </div>
                            <h4 className={styles.titleCheckBox}>Pledge with no reward</h4>
                        </div>
                        <Text 
                            textAlign="justify"
                            margin={{
                                top: 10,
                                bottom: 0,
                                left: changeMarginLeftText,
                                right: 0,
                            }}
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
                        margin={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: changeMarginBottomSelect,
                        }}
                    >Enter your Pledge</Text>
                    <div className={styles.containerInput}>
                        <div className={styles.areaInput}>
                            <Text
                                textAlign="left"
                                margin={{
                                    left: 0,
                                    right: 7.5,
                                    top: 0,
                                    bottom: 0,
                                }}
                            >$</Text>
                            <input 
                                type="text"
                                value={valuePurchase}
                                onChange={e => purchaseObject(e)}
                            />
                        </div>
                        <div className={styles.areaButton}>
                            <Button
                                fontSize={14}
                                padding={{
                                    left: 20,
                                    right: 20,
                                    top: 15,
                                    bottom: 15,
                                }}
                                action={true}
                                click={togglePurchase}
                            >Continue</Button>
                        </div>
                    </div>
                </div>
                </>
            }
        </SubPanel>
    );
}