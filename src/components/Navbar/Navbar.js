import { Link, } from 'react-router-dom'
import styled from 'styled-components';
import { burgerRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';
import './Navbar.css';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';

const NavbarStyled = styled.div`
    background-color: ${burgerRed};
    padding: 10px;
    position: fixed;
    width: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 3px 4px #380502;
    text-decoration: none;
    margin-right: 10px;
`;

const Linker = styled(Title)`
    font-size: 18px;
    color: white;
    text-shadow: 1px 3px 4px #380502;
    text-decoration: none;
    padding: 7px;
    &:hover {
        cursor: pointer;
        color: ${burgerRed};
        border: white;
        border-radius: 1rem;
        background-color: white;
        box-shadow: 0px 0px 10px 0px grey;
    }
`;

const Greeter = styled(Title)`
    font-size: 18px;
    color: white;
    text-shadow: 1px 3px 4px #380502;
    text-decoration: none;
    padding: 7px;
`;



const Navbar = () => {
    const {isAuthenticated, username, isAdmin} = useContext(AuthContext)

    return (
        <NavbarStyled>
                <Logo as={ Link } to="/">
                    Sofia Burger <span role="img" aria-label="sofia burger">🍔</span>
                    <Linker as={ Link } to="/menu">Menu</Linker>
                </Logo>
                {isAuthenticated
                    ? <Greeter>Wellcome, {username}!</Greeter>
                    : <Greeter>Wellcome, Guest!</Greeter>}
                
                <div className="navbar-ul">
                    {isAdmin
                    ?<Linker as={ Link } to="/create-product">Create Product</Linker>
                    : null
                    }
                    {isAuthenticated
                    ? <Linker as={ Link } to="/logout">Logout</Linker>
                    : <><Linker as={ Link } to="/login">Login</Linker><Linker as={ Link } to="/register">Register</Linker></>}
                    
                </div>
        </NavbarStyled>
    );
};

export default Navbar;