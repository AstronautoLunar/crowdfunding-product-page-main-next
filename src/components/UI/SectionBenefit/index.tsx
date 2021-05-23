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
        <SubPanel
            selected={false}       
            action={action}
            marginTop={20}
            marginBottom={20}
            padding={{
                left: 25,
                right: 25,
                top: 25,
                bottom: 25,
            }}
        >
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
                            align="left"
                            marginTop={0}
                            marginBottom={10}
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
                        margin={{
                            top: 20,
                            bottom: 20,
                            left: 0,
                            right: 0,
                        }}
                    >
                        { children }
                    </Text>
                    <div 
                        className={styles.containerSection}
                    >
                        <Counter>
                            { counter }
                        </Counter>
                        <Button
                            fontSize={14}
                            padding={{
                                left: 40,
                                right: 40,
                                top: 20,
                                bottom: 20,
                            }}
                            click={() => {}}    
                            action={action}>
                                Select Reword
                        </Button>
                    </div>
                </article>
            </section>
        </SubPanel>
    );
}