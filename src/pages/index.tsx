import { Header } from '../components';
import { BackgroundImage } from '../components/UI';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <main id={styles.main} role="main">
      <BackgroundImage>
        <Header/>
      </BackgroundImage>  
    </main>
  )
}
