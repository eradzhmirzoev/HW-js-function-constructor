//создаю объекты бургер\начинка
function Creator(name, price, calories) {
    this.name = name;
    this.price = price;
    this.calories = calories;
}

//размеры бургеров
const SIZE_SMALL = new Creator('SIZE_SMALL', 50, 20);
const SIZE_AVERAGE = new Creator('SIZE_AVERAGE', 75, 30);
const SIZE_LARGE = new Creator('SIZE_LARGE', 100, 40);

//доп начинки
const CHEESE = new Creator('CHEESE', 10, 20);
const SALAD = new Creator('SALAD', 20, 5);
const POTATOES = new Creator('POTATOES', 15, 10);
const SPICE = new Creator('SPICE', 15, 0);
const TOPPING_MAYO  = new Creator('TOPPING_MAYO', 20, 5);

//расчеты
function Hamburger(size) {
    this.arrPrices = [];
    this.arrCallories = [];
    
    this.showStandart = function() {
        console.log(`Цена бургера ${size.name} без добавок: - ${size.price} грн`);
        console.log(`Каллории бургера ${size.name} без добавок: - ${size.calories}`);
    }

    this.addModifier = function(modifier) {
        this.arrPrices.push(modifier.price);
        this.arrCallories.push(modifier.calories);

        let sumPrices = this.arrPrices.reduce((sum, current) => sum + current, 0);
        let sumCallories = this.arrCallories.reduce((sum, current) => sum + current, 0);

        console.log(`Цена c доп. элементами: ${modifier.name} - ${sumPrices + size.price} грн`);
        console.log(`Каллории +: ${modifier.name} - ${sumCallories + size.calories}`);
        
    };
}

const hamburger = new Hamburger(SIZE_AVERAGE);
//цена стандартных бургеров, без добавок
hamburger.showStandart();

//цена с модификаторами
hamburger.addModifier(CHEESE); 
hamburger.addModifier(SALAD);
hamburger.addModifier(TOPPING_MAYO);



