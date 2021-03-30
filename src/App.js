import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    Body {
        font-family: 'Open Sans', sans-serif;
    }

    h1, h2, h3 {
        font-family: 'Righteous', cursive;
    }
`

function App() {
  return (
    <>
        <GlobalStyle />
        <div>Hello Sofia</div>
    </>
  );
}

export default App;
