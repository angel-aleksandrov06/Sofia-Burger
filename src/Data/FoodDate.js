export const foodItems = [
    {
        name: 'Cheese Burger',
        img: '/img/cheeseBurger.jpg',
        section: 'Burger'
    },
    {
        name: 'Sofia Burger',
        img: './img/sofiaBurger.jpg',
        section: 'Burger'
    },
    {
        name: 'Bacon Burger',
        img: './img/baconBurger.jpg',
        section: 'Burger'
    },
    {
        name: 'Beef Burger',
        img: './img/beefBurger.jpg',
        section: 'Burger'
    },
    {
        name: 'Lyutenitsa Burger',
        img: './img/lyutenitsaBurger.jpg',
        section: 'Burger'
    },
    {
        name: 'Croissant Sandwich',
        img: './img/croissantSandwich.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Fresh Sandwich',
        img: './img/freshSandwich.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Ham Sandwich',
        img: './img/hamSandwich.jpg',
        section: 'Sandwich'
    },
    {
        name: 'Chicken Tortilla',
        img: './img/chickenTortilla.jpg',
        section: 'Tortilla'
    },
    {
        name: 'Veggie Tortilla',
        img: './img/veggieTortilla.jpg',
        section: 'Tortilla'
    },
    {
        name: 'Taco',
        img: './img/taco.jpg',
        section: 'Tortilla'
    },
    {
        name: 'Hotdog',
        img: './img/hotdog.jpg',
        section: 'Other'
    },
    {
        name: 'Gyro',
        img: './img/gyro.jpg',
        section: 'Other'
    },
    {
        name: 'Fires',
        img: './img/fries.jpg',
        section: 'Other'
    },
    {
        name: 'CurlyFries',
        img: './img/curlyFries.jpg',
        section: 'Other'
    },
    {
        name: 'Coca-Cola',
        img: './img/coca-cola.jpg',
        section: 'Drink'
    },
    {
        name: 'Coffe',
        img: './img/coffe.jpg',
        section: 'Drink'
    },
    {
        name: 'Pepsi',
        img: './img/pepsi.jpg',
        section: 'Drink'
    },
    {
        name: 'Mirinda',
        img: './img/soda.jpg',
        section: 'Drink'
    },
    {
        name: 'Water',
        img: './img/water.jpg',
        section: 'Drink'
    },
];

export const foods = foodItems.reduce((res,food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food);
    return res;
}, {});