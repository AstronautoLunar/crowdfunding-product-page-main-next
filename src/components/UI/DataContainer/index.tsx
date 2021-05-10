import DataComponent from '../DataComponent';
import Separate from '../Separate';

import styles from './styles.module.scss';

export default function DataContainer() {
    return (
        <div id={styles.dataContainer}>
            <div id={styles.areaData}>
                {
                    // 89,914
                }
                <DataComponent
                    strongText="$89,914"
                    weakText="of $100.000 backed"
                    marginRight={0}
                />
                <Separate/>
                <DataComponent
                    strongText="$5.007"
                    weakText="total backers"
                    marginRight={40}
                />
                <Separate/>
                <DataComponent
                    strongText="56"
                    weakText="days left"
                    marginRight={0}
                />
            </div>
            <div id={styles.barData}>
                <div id={styles.loadingBar}>

                </div>
            </div>
        </div>
    )
}