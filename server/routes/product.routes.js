const ProductController = require('../controllers/product.controller');
console.log("ProductController is =>", ProductController)

module.exports = app => {
    app.get('/api/product', ProductController.readAll);
    app.get('/api/product/:id', ProductController.readOne);
    app.post('/api/product', ProductController.create);
    app.patch('/api/product/:id', ProductController.update);
    app.delete('/api/product/:id', ProductController.delete);

}