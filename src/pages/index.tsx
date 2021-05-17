import { 
  Header, 
  Container,
  Window,
} from "../components";

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
  CheckBox,
  ButtonLeave,
} from "../components/UI";

import { useWindow } from '../contexts/WindowContext';

import styles from "../styles/Home.module.scss";

export default function Home() {
  let { button, toggleButton } = useWindow();
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
          <Text marginTop={15} marginBottom={15} textAlign="center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </Text>
          <SubContainer>
            <Button
              padding={{
                left: 40,
                right: 40,
                top: 20,
                bottom: 20,
              }}
              action={true}
              click={toggleButton}
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
            align="left"
            marginTop={10}
            marginBottom={20}
            type="h5"
          >
            About this project
          </Title>
          <Text textAlign={0} marginTop={20} marginBottom={20}>
              The Mastercraft Bamdoo Monitor Rise is a sturdy
              and stylish platform that elevates your screen
              to a more comfortable viewing height. Placing
              your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </Text>
          <Text textAlign={0} marginTop={20} marginBottom={20}>
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
      <Window action={button}>
        <ButtonLeave
          click={toggleButton}
        />
        <Title
          align="left"
          type="h2"
          marginTop={10}
          marginBottom={10}
        >
          Back this project
        </Title>
        <Text
          textAlign="left"
          marginTop={5}
          marginBottom={5}
        >

              Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
        </Text>
        <CheckBox
          action={true}
          type="checkBox"
          counter="none"
          prace="none"
          title="none"
        >
          none
        </CheckBox>
        <CheckBox
          action={true}
          type="purchase"
          title="Bamboo Stand"
          prace="25"
          counter="101"
          >
            You get an ergonomic stand made of natural bamboo, You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.
          </CheckBox>
        <CheckBox
          action={true}
          type="purchase"
          title="Black Edition Stand"
          prace="75"
          counter="64"
          >
            You get a Black Special computer stand and a personal thank you.
            You'll be added to our Backer member list. Shipping is included.
          </CheckBox>
        <CheckBox
          action={false}
          type="purchase"
          title="Mahogany Special Edition"
          prace="200"
          counter="0"
          >
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'all be added to our Backer member list. Shipping is included.
          </CheckBox>
          
      </Window>
    </main>
  );
}

//  
// 25 prace
// 101 counter
// 