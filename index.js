const express = require("express");
const { getALLAppProducts } = require("./controllers/products");
const app = express();
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send('Hi I am live');
})
//router
app.use('/api/product', getALLAppProducts)
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(` Yes i am connected http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}
start();
