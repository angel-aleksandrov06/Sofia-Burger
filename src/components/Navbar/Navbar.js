import { Link, } from 'react-router-dom'
import styled from 'styled-components';
import { burgerRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';
import './Navbar.css';

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
    margin: 0px 10px;
`;



const Navbar = () => {
    return (
        <NavbarStyled>
                <Logo as={ Link } to="/">
                    Sofia Burger <span role="img" aria-label="sofia burger">🍔</span>
                    <Linker as={ Link } to="/menu">Menu</Linker>
                </Logo>
                <ul className="navbar-ul">
                    <Linker as={ Link } to="/login">Login</Linker>
                    <Linker as={ Link } to="/register">Register</Linker>
                </ul>
        </NavbarStyled>
    );
};

export default Navbar;