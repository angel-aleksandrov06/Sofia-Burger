import styled from 'styled-components';
import { burgerRed } from '../../Styles/colors';
import { Title } from '../../Styles/title';

const FooterComponent = styled.footer`
    background-color: ${burgerRed};
    padding: 1rem 0;
    margin: 0rem;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
`;

const FooterLogo = styled(Title)`
    margin-right: 5px;
`;

const Footer = () => {
    return (
        <FooterComponent>
            <FooterLogo>@ Sofia Burger </FooterLogo> <span class>developed by Angel Aleksandrov</span>
        </FooterComponent>
    );
};

export default Footer;