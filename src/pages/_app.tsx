import { WindowProvider } from '../contexts/WindowContext';

import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <WindowProvider>
      <Component {...pageProps}/>
    </WindowProvider>
  )
  
}

export default MyApp
