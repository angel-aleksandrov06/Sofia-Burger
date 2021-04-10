import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { burgerRed } from "../../Styles/colors";
import { Title } from "../../Styles/title";
import { formatPrice } from '../../Services/MenuServices';
import { QuantityInput } from "./QuantityInput";
import { useQuantity } from "../../Hooks/useQuantity";
import { Toppings } from "./Toppings";
import { useToppings } from "../../Hooks/useToppings";
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';
import db from '../../utils/firebase';
import { useHistory } from "react-router-dom";

const Dialog = styled.div`
  width: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
  display: flex;
  flex-direction: column;
  
  @media(max-width: 400px){ 
    top: 122px;
    width: 100%; 
    left: 0px; 
    z-index: 12; 
  }
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 80px;
  padding: 0px 40px;
  padding-bottom: 80px;
`;

export const DialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
  @media(max-width: 400px){ 
    width: 100%; 
    height: auto;
    flex-direction: column;
    align-items: center;
  }
`;

export const ConfirmButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${burgerRed};
  ${({ disabled }) =>
    disabled &&
    `
    opactity: .5; 
    background-color: grey; 
    pointer-events: none; 
  `}
`;

export const DeleteButton = styled(Title)`
  margin: 10px;
  color: white;
  height: 20px;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: ${burgerRed};
  `;

const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

const pricePerTopping = 0.5;

export function getPrice(order) {
    // console.log(order);
  return (
    order.quantity * 
    (order.price +
      order.toppings.filter(t => t.checked).length * pricePerTopping)
  );
}

function hasToppings(food) {
  return food.section === "Tortilla" || food.section === "Burger" ;
}

function FoodDialogContainer({ openFood, setOpenFood, setOrders, orders }) {
    const {isAuthenticated, username, isAdmin} = useContext(AuthContext);
    let history = useHistory();
    const quantity = useQuantity(openFood && openFood.quantity);
    const toppings = useToppings(openFood.toppings);
    const isEditing = openFood.index > -1;
    console.log(openFood.id);

    function close() {
        setOpenFood();
    }

    const order = {
        ...openFood,
        quantity: quantity.value,
        toppings: toppings.toppings,
    };

    function editOrder() {
        const newOrders = [...orders];
        newOrders[openFood.index] = order;
        setOrders(newOrders);
        close();
    }

    function addToOrder() {
        setOrders([...orders, order]);
        close();
    }

    return (
        <>
        <DialogShadow onClick={close} />
        <Dialog>
            <DialogBanner img={openFood.img}>
            <DialogBannerName> {openFood.name} </DialogBannerName>
            </DialogBanner>
            <DialogContent>
            <QuantityInput quantity={quantity} />
            {hasToppings(openFood) && (
                <>
                <h3> Would you like toppings? </h3>
                <Toppings {...toppings} />
                </>
            )}
            </DialogContent>
            <DialogFooter>
            <ConfirmButton
            onClick={addToOrder}
                onClick={isEditing ? editOrder : addToOrder}
            >
                {isEditing ? `Update order: ` : `Add to order: `}
                {formatPrice((getPrice(order)))}
            </ConfirmButton>
            {isAdmin
                    ?<DeleteButton onClick={() => {
                        db.firestore().collection("foods").doc(openFood.id.toString()).delete()
                        .then(close())
                        .then(history.push('/'))
                        .catch(err => console.log(err));
                    }} >Delete Product</DeleteButton>
                    : null
                    }
            </DialogFooter>
        </Dialog>
        </>
    );
}

export function FoodDialog(props) {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
}
