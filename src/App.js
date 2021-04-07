import { useState } from 'react';
import { Route, Switch, } from 'react-router-dom';

import { GlobalStyle } from "./Styles/GlobalStyle";
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import PromotionDashboard from './components/PromotionDashboard';
import Footer from './components/Footer/Footer';

function App() {
    const [openFood, setOpenFood] = useState();
  return (
    <>
        <GlobalStyle />
        <Navbar />
        <Banner/ >
        <Switch>
            <Route path="/Menu" exact component={ Menu } />
            <Route path="/" exact component={ PromotionDashboard } />
        </Switch>
        <Footer />
    </>
  );
}

export default App;
