const name = 'Ramshad';
const userAge = 37;

const user = {
    name: name,
    age: userAge,
    location: 'Tirur',
}

console.log(user);

const product = {
    label: 'Notebook',
    price: 3,
    stock: 200,
}

const {label: productLabel, price} = product
console.log(productLabel, price);