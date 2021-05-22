import { WindowProvider } from '../contexts/WindowContext';
import { NavProvider } from '../contexts/NavContext';

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <NavProvider>
      <WindowProvider>
        <Component {...pageProps}/>
      </WindowProvider>
    </NavProvider>
  )
  
}

export default MyApp
