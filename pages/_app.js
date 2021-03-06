import './style.css';
function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: Roboto;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

export default function MyApp({ Component, pageProps }) {
    //RODA EM TODAS AS PAGINAS
    console.log('todas as pag');
    return (
        <>
        <GlobalStyle/>
        <Component {...pageProps} />
        </>
    );
    
  }