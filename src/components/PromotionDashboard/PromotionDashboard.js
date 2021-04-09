import styled from 'styled-components';
import { Component } from 'react';
import { Title } from '../../Styles/title';
import * as MenuServices from '../../Services/MenuServices'

const DashBoardStyled = styled.main`
margin: 0px 400px 50px 20px;

@media(max-width: 400px){ 
        width: 90%; 
        margin: 10px; 
      }
`;

export const DashboardWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    gap: 20px;
    margin-bottom: 80px;

    @media(max-width: 400px){ 
        grid-template-columns: 1fr; 
      }
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, .8);
    padding: 5px;
`;

export const PromotionFood = styled(Title)`
    height: 180px;
    padding: 10px;
    font-size: 20px;
    background-image: ${({ img }) => `url(${img});`};
    background-position: center;
    background-size: cover;
    filter: contrast(65%);
    border-radius: 7px;
    margin-top: 5px;
    transition-property: box-shadow margin-top filter;
    transition-duration: 0.2s;
    box-shadow: 0px 0px 3px 0px grey;
    &:hover {
        cursor: pointer;
        filter: contrast(100%);
        margin-top: 0px;
        margin-bottom: 5px;
        box-shadow: 0px 0px 10px 0px grey;
    }
`;


class PromotionDashboard extends Component {
    constructor(props) {
        super(props);

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

    render() {
        return (
            <DashBoardStyled >
                {Object.entries(this.state.menu).filter(([key, value]) => key ==='Promotion').map(([sectionName, foods]) => (
                    <>
                        <h2> Week promotions </h2>
                        <DashboardWrapper>
                            {foods.map(x => (
                                <PromotionFood img={x.img} key={x.id} onClick={() => {
                                    this.props.setOpenFood(x);
                                  }}>
                                    <FoodLabel>
                                        <div>{x.name}</div>
                                        <div>{MenuServices.formatPrice(x.price)}</div>
                                    </FoodLabel>
                                </PromotionFood>
                            ))}
                        </DashboardWrapper>
                    </>
                ))}
            </DashBoardStyled >
        );
    }
}

export default PromotionDashboard;