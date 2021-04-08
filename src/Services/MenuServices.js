const url = 'http://localhost:5001/foods';

export const getAll = () => {

    return fetch(url)
        .then(res => res.json())
        .catch(er => console.log(er));
};

export function formatPrice(price) {
    return price.toLocaleString("bg-BG", {
      style: "currency",
      currency: "BGN"
    });
  }