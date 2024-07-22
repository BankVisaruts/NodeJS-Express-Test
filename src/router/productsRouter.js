import express from 'express';
// const products = require("./data/products.json");
import products from '../data/products.json' assert { type: 'json' };
const productsRouter = express.Router();

productsRouter.route("/").get((req, res) => {
    // res.send("Hello World !! I'm Product");
    res.render("products", {
            products,
        }
        //{
        // products: [
        //     {productTitle: 'น้ำยาล้างจาน', productDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ', productPrice: 45},
        //     {productTitle: 'น้ำยาล้างจาน 2', productDescription: 'น้ำยาล้างจานสูตร 2 ดีเลิศ', productPrice: 65},
        //     {productTitle: 'น้ำยาล้างจาน 3', productDescription: 'น้ำยาล้างจานสูตร 3 ดีเลิศ', productPrice: 35},
        //     {productTitle: 'น้ำยาล้างจาน 4', productDescription: 'น้ำยาล้างจานสูตร 4 ดีเลิศ', productPrice: 55}
        // ]
        // }
    );
});

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    // res.send("Hello World !! I'm Product " + id);
    res.render("product", {
        product: products[id],
    })
});

// module.exports = productsRouter;
export default productsRouter;