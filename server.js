const express = require('express');
const app = express();

// Örnek bir sipariş dizisi
const orders = [
{
id: 1,
customerName: 'Ahmet',
orderDate: '2023-04-25',
product: 'Americano',
price: 10.00
},
{
id: 2,
customerName: 'Mehmet',
orderDate: '2023-04-26',
product: 'Latte',
price: 12.00
},
{
id: 3,
customerName: 'Ayşe',
orderDate: '2023-04-26',
product: 'Cappuccino',
price: 8.00
}
];

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
res.render('orders', { orders: orders });
});

app.listen(3000, function() {
console.log('Server çalışıyor...');
});