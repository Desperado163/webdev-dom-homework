const svideo = {
    title: "",
    descripttion: "",
    url: "",
    time: "",
    viewing: "2500",
    likes: "250",
    live: "true",
    author: {
        name: "",
        channelurl: "",
        subscribers: ""
    },
    tegs: [],
    comments: [
        {
            username: "",
            text: "",
            likes: ""
        },
        {
            username: "",
            text: "",
            likes: ""
        },
        {
            username: "",
            text: "",
            likes: ""
        },
        {
            username: "",
            text: "",
            likes: ""
        },
        {
            username: "",
            text: "",
            likes: ""
        }
    ]
};

const array = ["Петр", "Василий", "Владислав", 100, true, "1000", "Владимир"];

const newArray = array.filter((names) => {
    return String(names).charAt(0) === "В";
});

console.log(newArray);

const surnames = newArray.map((name) => {
    return  `${name} Иванов`;
});

console.log(surnames);

const numbers = array.find((item) => {
    return typeof item != "string";
});

console.log(numbers);

    //Деструктуризация объектов

// const product = {
//     img: "http://images/vilora.jpeg",
//     title: "Кресло VILORA",
//     description: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.",
//     price: 21000,
// };

    //Чтобы извлечь значения из этого объекта, можно обратиться к каждому свойству отдельно:

// const img = product.img;
// const title = product.title;
// const description = product.description;
// const price = product.price;

// console.log(img); // Вывод: "http://images/vilora.jpeg"
// console.log(title); // Вывод: "Кресло VILORA"
// console.log(description); // Вывод: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань."
// console.log(price); // Вывод: 21000

    //А можно использовать деструктуризацию:

// const { img, title, description, price } = product;

// console.log(img); // Вывод: "http://images/vilora.jpeg"
// console.log(title); // Вывод: "Кресло VILORA"
// console.log(description); // Вывод: "Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань."
// console.log(price); // Вывод: 21000

    //Присваивание другим именам

// const { img: imageUrl, title: productName } = product;

// console.log(imageUrl); // Вывод: "http://images/vilora.jpeg"
// console.log(productName); // Вывод: "Кресло VILORA"

    //Значения по умолчанию

// const { img, title, rating = 5 } = product;

// console.log(rating); // Вывод: 5

    //Вложенная деструктуризация

// const product = {
//     title: "Кресло VILORA",
//     price: 21000,
//     details: {
//         material: "ткань",
//         color: "серый",
//     },
// };

// const { title, details: { material, color } } = product;

// console.log(material); // Вывод: "ткань"
// console.log(color); // Вывод: "серый"

    //Деструктуризация в параметрах функции

// function displayProduct({ title, price }) {
//     console.log(`Товар: ${title}, Цена: ${price} руб.`);
// }

// displayProduct(product);
// Вывод: "Товар: Кресло VILORA, Цена: 21000 руб."

const user = {
    name: "Иван",
    age: 28,
    contact: {
        email: "ivan@example.com",
        phone: "+7-123-456-7890"
    },
    address: {
        city: "Москва",
        street: "ул. Ленина",
        building: "10"
    }
};

const { name, age, contact: { email, phone }, address: { city, street, building } } = user;

console.log(name);
console.log(age);
console.log(email);
console.log(phone);

const { address: { city: userCity, street: userStreet, } } = user;

console.log(userCity);
console.log(userStreet);

function displayUserInfo({ name, age, address: { city }, contact: { email } }) {
    console.log(`Имя: ${name}, Возраст: ${age}, Город: ${city}, Email: ${email}`)
}

displayUserInfo(user);

    //Деструктуризация массивов

    //Основы деструктуризации массивов

// const productInfo = ["Кресло VILORA", "серый", 21000];

// const [title, color, price, rating = 5] = productInfo;

// console.log(title); // Вывод: "Кресло VILORA"
// console.log(color); // Вывод: "серый"
// console.log(price); // Вывод: 21000
// console.log(rating);

// const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];

// const [title, color, ...otherInfo] = productInfo;

// console.log(title); // Вывод: "Кресло VILORA"
// console.log(color); // Вывод: "серый"
// console.log(otherInfo)

const productInfo = ["Кресло VILORA", "серый", 21000, "в наличии", "скидка 10%"];

const [title, , price, , ,] = productInfo;

console.log(title);
console.log(price);

const [, , , availability, discount] = productInfo;

console.log(availability);
console.log(discount);

const [, , ...otherDetails] = productInfo;

console.log(otherDetails);

function displayProductDetails([ title, , price, availability, discount ]) {
    console.log(`"Название: ${title}, Цена: ${price}, Статус: ${availability}, Скидка: ${discount}"`);
}

displayProductDetails(productInfo);

console.log('\n%c Задание №1:', 'color:green');
const products = [
    { id: 1, title: "Кресло VILORA", price: 21000, stock: true },
    { id: 2, title: "Диван TULIP", price: 35000, stock: false },
    { id: 3, title: "Столик MANGO", price: 12000, stock: true },
    { id: 4, title: "Кровать BALI", price: 40000, stock: true },
    { id: 5, title: "Стул HUGO", price: 8000, stock: false },
];
console.log(`Исходный массив:`, products);

console.log('\n%c Задание №1-1:', 'color:green');
const availableProducts = products.filter(products => products.stock);
console.log(`Товары в наличии:`, availableProducts);

console.log('\n%c Задание №1-2:', 'color:green');
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Товары по возрастанию цены:", sortedByPrice);

console.log('\n%c Задание №1-3:', 'color:green');
const productName = products.map(products => products.title);
console.log(`Название товаров:`, productName);

console.log('\n%c Задание №2:', 'color:green');
const summ = products
    .filter(products => products.stock)
    .reduce((total, products) => total + products.price, 0);
console.log("Общая стоимость доступных товаров:", summ);

console.log('\n%c Задание №3. Найти товар с самой высокой ценой:', 'color:green');
const topPrice = products.reduce((top, products) => {
    return products.price > top.price ? products : top;
});
console.log('Самый дорогой продукт:', topPrice.title, '-', topPrice.price);

console.log('\n%c Задание №4. Подсчитать количество товаров в наличии и не в наличии:', 'color:green');
const productsStock = products.reduce(
    (acc, product) => {
        product.stock ? acc.availability++ : acc.noavailability++;
        return acc;
    },
    { availability: 0, noavailability: 0 }
);
console.log('Количество товаров:', productsStock);

console.log('\n%c Задание №5. Преобразование данных с изменением ключей и вложенных значений:', 'color:green');
const updatedProducts = products.map(product => ({
    ...product,
    details: {
        category: product.title === "Кровать BALI" ? "Спальня" : "Мебель"
    }
}));

console.log(`Новый массив:`, updatedProducts);

console.log('\n%c Задание №5-1. Поле title будет переименовано в productName:', 'color:green');
const rate = 100;

const updatedKey = updatedProducts.map(product => {
    const { title, details, price, ...rest } = product;
    const { category } = details || {};

    return {
        ...rest,
        productName: title,
        priceUsd: (product.price / rate).toFixed(2),
        details: {
            
            productCategory: category
        }
    };
});

console.log(`Новый ключ:`, updatedKey);

