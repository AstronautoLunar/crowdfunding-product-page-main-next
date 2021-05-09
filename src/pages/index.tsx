import { Header, Container } from '../components';
import { BackgroundImage, Panel, IconLogo, LevelOneTitle, Text } from '../components/UI';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <main id={styles.main} role="main">
      <BackgroundImage>
        <Header/>
      </BackgroundImage>
      <Container>
        <Panel>
          <IconLogo
            src="/logo-mastercraft.svg"
            alt="logo mastercraft"
            color="black"
          />
          <LevelOneTitle
            marginTop={30} 
            fontSize={23.0}>
              Mastercraft Bamboo Monitor Riser
          </LevelOneTitle>
          <Text
            marginTopAndBottom={15}
            textAlign="center"
          >
            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
          </Text>
        </Panel>
      </Container>
    </main>
  )
}
