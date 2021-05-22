import { useState, useEffect } from 'react';

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
  NavBar
} from "../components/UI";

import { useWindow } from '../contexts/WindowContext';
import { useNav } from '../contexts/NavContext';

import styles from "../styles/Home.module.scss";

const linksString = [
  { name: 'About', id: 0 },
  { name: 'Discover', id: 1 },
  { name: 'Get Started', id: 2 },
];

export default function Home() {
  let [ buttonSmall, setButtonSmall ] = useState(14);
  let [ paddingButton, setPaddingButton ] = useState(40);

  useEffect(() => {
    const mediaQuerieList = matchMedia("(max-width: 400px)");

    function decreaseButton(mediaQuerieList) {
      if(mediaQuerieList.matches) {
        setButtonSmall(buttonSmall = 10);
        setPaddingButton(paddingButton = 20);
      } else {
        setButtonSmall(buttonSmall = 14);
        setPaddingButton(paddingButton = 40);
      }
    }

    decreaseButton(mediaQuerieList);

    mediaQuerieList.addListener(decreaseButton);

  }, [ 
      buttonSmall, 
      setButtonSmall, 
      paddingButton, 
      setPaddingButton 
    ])
  
  let { 
    button, 
    toggleButton, 
    purchase,
    togglePurchase,
    valuePurchase,
  } = useWindow();

  let {
    navOpen,
  } = useNav()

  
  return (
    <main id={styles.main} role="main">
      <BackgroundImage>
        <Header />
        <NavBar 
          open={navOpen}
          finalHeight={115}
        >
          {
            linksString.map(item => 
              <a 
                href="" 
                key={item.id}
                className={styles[
                  navOpen
                  ?
                  "linkNavOn"
                  :
                  "linkNavOff"
                ]}
              >{item.name}</a>)
          }
        </NavBar>
      </BackgroundImage>
      <Container
        openForNav={navOpen}
        finalTop="70%"
      >
        <Panel>
          <IconLogo
            src="/logo-mastercraft.svg"
            alt="logo mastercraft"
            color="black"
          />
          <LevelOneTitle marginTop={30} fontSize={23.0}>
            Mastercraft Bamboo Monitor Riser
          </LevelOneTitle>
          <Text  
            margin={{
              top: 15,
              bottom: 15,
              left: 0,
              right: 0,
            }}
            textAlign="center">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </Text>
          <SubContainer>
            <Button
              padding={{
                left: paddingButton,
                right: paddingButton,
                top: 20,
                bottom: 20,
              }}
              fontSize={buttonSmall}
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
          <Text 
            textAlign={0} 
            margin={{
              top: 20,
              bottom: 20,
              left: 0,
              right: 0,
            }}
          >
              The Mastercraft Bamdoo Monitor Rise is a sturdy
              and stylish platform that elevates your screen
              to a more comfortable viewing height. Placing
              your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
          </Text>
          <Text 
            textAlign={0} 
            margin={{
              top: 20,
              bottom: 20,
              left: 0,
              right: 0,
            }}
          >
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
      <Window 
        width={650}
        alignItems="flex-start"
        action={button}
        click={toggleButton}
      >
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
          margin={{
            top: 5,
            bottom: 5,
            left: 0,
            right: 0,
          }}
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
      <Window 
        width={400}
        alignItems="center"
        action={valuePurchase > 0 && purchase}
        click={togglePurchase}
      >
          <img 
            className={styles.imgCheck}
            src="/icon-check.svg"
            alt="icon check"
          />
          <Title
            type="h3"
            align="center"
            marginTop={10}
            marginBottom={10}
          >
            Thanks for your support!
          </Title>
          <Text
            textAlign="center"
            margin={{
              top: 10,
              bottom: 30,
              left: 10,
              right: 10,
            }}
          >
            Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.
          </Text>
          <Button
            padding={{
              top: 11,
              bottom: 11,
              left: 25,
              right: 25,
            }}
            fontSize={14}
            action={purchase}
            click={togglePurchase}
          >Got it!</Button>
      </Window>
    </main>
  );
}