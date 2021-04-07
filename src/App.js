import { useState } from 'react';
import { Route, Switch, } from 'react-router-dom';

import { GlobalStyle } from "./Styles/GlobalStyle";
import Navbar from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import PromotionDashboard from './components/PromotionDashboard';
import Footer from './components/Footer/Footer';
import Register from './components/Register/index';
import Login from './components/Login/index';
import './utils/firebase';

function App() {
    const [openFood, setOpenFood] = useState();
  return (
    <>
        <GlobalStyle />
        <Navbar />
        <Banner/ >
        <Switch>
            <Route path="/" exact component={ PromotionDashboard } />
            <Route path="/menu" exact component={ Menu } />
            <Route path="/register" component={ Register } />
            <Route path="/login" component={ Login } />
        </Switch>
        <Footer />
    </>
  );
}

export default App;
