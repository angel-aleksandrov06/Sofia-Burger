import db from '../utils/firebase'


export const url = 'https://sofia-burger-default-rtdb.europe-west1.firebasedatabase.app/foods.json';

export const getAll = () => {
    return db.firestore().collection("foods").get()
        .catch(er => console.log(er));
};

export function formatPrice(price) {
    return price.toLocaleString("bg-BG", {
      style: "currency",
      currency: "BGN"
    });
  }