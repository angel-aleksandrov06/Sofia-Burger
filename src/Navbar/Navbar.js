import styled from 'styled-components';
import { burgerRed } from '../Styles/colors';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
    background-color: ${burgerRed};
    padding: 10px;
`;

const Logo = styled(Title)`
    font-size: 20px;
    color: white;
    text-shadow: 1px 3px 4px #380502;
`;

export function Navbar() {
    return (
        <NavbarStyled>
            <Logo>
                Sofia Burger 🍔
            </Logo>
        </NavbarStyled>
    );
};