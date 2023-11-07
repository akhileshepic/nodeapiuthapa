const express = require("express");
const { getALLAppProducts } = require("../controllers/products");

const router = express.Router();

router.get('/', getALLAppProducts)

module.exports = router;