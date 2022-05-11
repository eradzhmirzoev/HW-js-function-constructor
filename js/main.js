//создаю объекты бургер\начинка
function CreatorElementsByBurger(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}

//размеры бургеров
const SIZE_SMALL = new CreatorElementsByBurger('SIZE_SMALL', 50, 20);
const SIZE_AVERAGE = new CreatorElementsByBurger('SIZE_AVERAGE', 75, 30);
const SIZE_LARGE = new CreatorElementsByBurger('SIZE_LARGE', 100, 40);

//доп начинки
const CHEESE = new CreatorElementsByBurger('CHEESE', 10, 20);
const SALAD = new CreatorElementsByBurger('SALAD', 20, 5);
const POTATOES = new CreatorElementsByBurger('POTATOES', 15, 10);
const SPICE = new CreatorElementsByBurger('SPICE', 15, 0);
const TOPPING_MAYO  = new CreatorElementsByBurger('TOPPING_MAYO', 20, 5);

//расчеты
function Hamburger(size) {
    this.arrPrices = [];
    this.arrCallories = [];

    this.addModifier = function(modifier) {
        this.arrPrices.push(modifier.price);
        this.arrCallories.push(modifier.calories);
    };

    this.getPrice = function() {
        let sumPrices = this.arrPrices.reduce((sum, current) => sum + current, 0);
        return sumPrices + size.price;
    };

    this.getCalories = function() {
        let sumCallories = this.arrCallories.reduce((sum, current) => sum + current, 0);
        return sumCallories + size.calories;
    }
}

const hamburger = new Hamburger(SIZE_SMALL);

//цена с модификаторами
hamburger.addModifier(CHEESE); 
hamburger.addModifier(SALAD);
hamburger.addModifier(TOPPING_MAYO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());