import styled from 'styled-components';
import { foods } from '../Data/FoodDate';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';

const MenuStyled = styled.div`
    height: 1000px;
    margin: 0px 400px 50px 20px;
`;

export function Menu() {
    return <MenuStyled>
        <h1> Menu </h1>
        <FoodGrid>
            {foods.map(x => (
                <Food img={x.img} >
                    <FoodLabel>
                        {x.name}
                    </FoodLabel>
                </Food>
            ))}
        </FoodGrid>
    </MenuStyled>
};