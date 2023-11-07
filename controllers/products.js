const getALLAppProducts = async (req, res) => {
    res.status(200).json({ msg: "i am geting all product" })
}

module.exports = {
    getALLAppProducts
}