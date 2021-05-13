import SubPanel from '../SubPanel';
import Title from '../Title';
import TextColor from '../TextColor';
import Text from '../Text';
import Counter from '../Counter';
import Button from '../Button';

import styles from './styles.module.scss';

type SectionBenefitData = {
    children: any;
    title: string;
    value: string;
    counter: string;
    action: boolean;
}

export default function SectionBenefit({ children, title, value, counter, action }: SectionBenefitData) {
    return (
        <SubPanel action={action}>
            <section 
                className={styles.sectionBenefit}
                role="section"
            >
                <article
                    className={styles.articleBenefit}
                    role="article"
                >
                    <div 
                        className={styles.containerSection}
                    >
                        <Title
                            marginTop={0}
                            marginBottom={0}
                            type="h4"
                        >
                            { title }
                        </Title>
                        <TextColor 
                            color="hsl(176, 50%, 47%)"
                        >{ value }</TextColor>
                    </div>
                    <Text
                        textAlign="justify"
                        marginTopAndBottom={20}
                    >
                        { children }
                    </Text>
                    <div 
                        className={styles.containerSection}
                    >
                        <Counter>{ counter }</Counter>
                        <Button action={action}>Select Reword</Button>
                    </div>
                </article>
            </section>
        </SubPanel>
    );
}