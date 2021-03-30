import { createGlobalStyle } from 'styled-components';
import { Navbar } from './Navbar/Navbar';

const GlobalStyle = createGlobalStyle`
    Body {
        margin: 0;
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
        <Navbar />
        <div>Hello Sofia</div>
    </>
  );
}

export default App;
