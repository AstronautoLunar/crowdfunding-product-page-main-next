import { Header, Container } from "../components";
import {
  BackgroundImage,
  Panel,
  IconLogo,
  LevelOneTitle,
  Text,
  SubContainer,
  Button,
  ButtonIcon,
  DataContainer,
  Title,
  SectionBenefit,
} from "../components/UI";

import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <main id={styles.main} role="main">
      <BackgroundImage>
        <Header />
      </BackgroundImage>
      <Container>
        <Panel>
          <IconLogo
            src="/logo-mastercraft.svg"
            alt="logo mastercraft"
            color="black"
          />
          <LevelOneTitle marginTop={30} fontSize={23.0}>
            Mastercraft Bamboo Monitor Riser
          </LevelOneTitle>
          <Text marginTopAndBottom={15} textAlign="center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </Text>
          <SubContainer>
            <Button
              action={true}
            >
              Back this project
            </Button>
            <ButtonIcon
              src={{
                  srcChecked: "/icon-bookmark-checked.svg",
                  srcNoChecked: "/icon-bookmark.svg" 
                }}
              alt={{
                altChecked: "bookmark icon checked",
                altNoChecked: "bookmark icon no checked"
              }}
            >
              Bookmark
            </ButtonIcon>
          </SubContainer>
        </Panel>
        <Panel>
          <DataContainer/>
        </Panel>
        <Panel>
          <Title 
            marginTop={10}
            marginBottom={20}
            type="h5"
          >
            About this project
          </Title>
          <Text textAlign={0} marginTopAndBottom={20}>
              The Mastercraft Bamdoo Monitor Rise is a sturdy
              and stylish platform that elevates your screen
              to a more comfortable viewing height. Placing
              your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </Text>
          <Text textAlign={0} marginTopAndBottom={20}>
              Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.
          </Text>
          <SectionBenefit
            value="25"
            title="Bamdoo stand"
            counter="101"
            action={true}
          >
            You get an ergonomic stand made of natural bambo. You've helped us launch our promotional campaign, and  you'll be added to a special Backer member list.
          </SectionBenefit>
          <SectionBenefit
            action={true}
            value="75"
            title="Black Edition Stand"
            counter="64"
          >
            You get a Black Special Edition computor stand and a personal thank you. You'all be added to our Backer member list. Shipping is included.
          </SectionBenefit>
          <SectionBenefit 
            value="200"
            title="Mahogany Special Edition"
            counter="0"
            action={false}
          >
            You get two Special Edition Mahogany stands, a Backer T-Shirt a personal thank you. You'll be added to our Backer member list, Shipping is included.
          </SectionBenefit>
        </Panel>
      </Container>
    </main>
  );
}
