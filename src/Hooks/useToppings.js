import { useState } from "react";

export function useToppings(defaultTopping) {
  const [toppings, setToppings] = useState(
    defaultTopping || getDefaultToppings()
  );

  function checkTopping(index) {
    const newToppings = [...toppings];
    newToppings[index].checked = !newToppings[index].checked;
    setToppings(newToppings);
  }

  return {
    checkTopping,
    toppings
  };
}

const toppingsList = [
  "Extra Cheese",
  "Ketchup",
  "Extra Meal",
  "Onions",
  "Peppers",
  "Corns",
  "Ham",
  "Мayonnaise",
  "Tomato",
  "Mushrooms",
  "Cucumber"
];

function getDefaultToppings() {
  return toppingsList.map(topping => ({
    name: topping,
    checked: false
  }));
}
