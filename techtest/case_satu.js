const fruits = [
    {
        fruitId: 1,
        fruitName: 'Apel',
        fruitType: 'IMPORT',
        stock: 10
    },
    {
        fruitId: 2,
        fruitName: 'Kurma',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 3,
        fruitName: 'apel',
        fruitType: 'IMPORT',
        stock: 50
    },
    {
        fruitId: 4,
        fruitName: 'Manggis',
        fruitType: 'LOCAL',
        stock: 100
    },
    {
        fruitId: 5,
        fruitName: 'Jeruk Bali',
        fruitType: 'LOCAL',
        stock: 10
    },
    {
        fruitId: 5,
        fruitName: 'KURMA',
        fruitType: 'IMPORT',
        stock: 20
    },
    {
        fruitId: 5,
        fruitName: 'Salak',
        fruitType: 'LOCAL',
        stock: 150
    }
]

// Soal No.1

const fruitNames = fruits.map(fruit => fruit.fruitName)
console.log(fruitNames);

// Soal No.1

// Soal No.2

const importFruits = [];
const localFruits = [];

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit.fruitType === 'IMPORT') {
        importFruits.push(fruit.fruitName);
    } else if (fruit.fruitType === 'LOCAL') {
        localFruits.push(fruit.fruitName);
    }
}

console.log('IMPORT:', importFruits);
console.log('LOCAL:', localFruits);

// Soal No.2

// Soal No.3

let importStock = 0;
let localStock = 0;

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if (fruit.fruitType === 'IMPORT') {
        importStock += fruit.stock;
    } else if (fruit.fruitType === 'LOCAL') {
        localStock += fruit.stock;
    }
}

console.log('Total stok buah IMPORT:', importStock);
console.log('Total stok buah LOCAL:', localStock);

// Soal No.3