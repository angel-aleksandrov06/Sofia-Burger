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
import { FoodDialog } from './components/FoodDialog/FoodDialog';
import { Order } from './components/Order/Order';
import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';

function App() {
    const openFood = useOpenFood();
    const orders = useOrders();
    useTitle({...openFood, ...orders});

  return (
    <>
        <GlobalStyle />
        <FoodDialog {...openFood} {...orders} />
        <Navbar />
        <Order {...orders} {...openFood} />
        <Banner/ >
        <Switch>
            <Route path="/" exact render={() => <PromotionDashboard {... openFood}/>} />
            <Route path="/menu" exact render={() => <Menu {... openFood}/>} />
            <Route path="/register" component={ Register } />
            <Route path="/login" component={ Login } />
        </Switch>
        <Footer />
    </>
  );
}

export default App;
