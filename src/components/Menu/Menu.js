import { Component } from 'react';
import styled from 'styled-components';
import { Food, FoodGrid, FoodLabel } from './FoodGrid';
import * as MenuServices from '../../Services/MenuServices'

const MenuStyled = styled.div`
    margin: 0px 400px 50px 20px;
`;

class Menu extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state = {
            menu: [],
        }
    }

    componentDidMount() {
        const foods = [];
        MenuServices.getAll()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                
                foods.push(doc.data())
            });
            return foods
        })
        .then(res => {
            res = res.reduce((res,food) => {
                if (!res[food.section]) {
                    res[food.section] = [];
                }
                res[food.section].push(food);
                return res;
            }, {});
            this.setState({menu: res})
        });
    }

    componentDidUpdate() {
        // console.log(this.state.menu);
    }

    render() {
        return (
            <MenuStyled>
                {Object.entries(this.state.menu).map(([sectionName, foods]) => (
                    <>
                        <h1> {sectionName} </h1>
                        <FoodGrid>
                            {foods.map(x => (
                                <Food img={x.img} key={x.id} onClick={() => {
                                    this.props.setOpenFood(x);
                                  }}>
                                    <FoodLabel>
                                        <div>{x.name}</div>
                                        <div>{MenuServices.formatPrice(x.price)}</div>
                                        </FoodLabel>
                                </Food>
                            ))}
                        </FoodGrid>
                    </>
                ))}
            </MenuStyled>
        );
    }
};

export default Menu;