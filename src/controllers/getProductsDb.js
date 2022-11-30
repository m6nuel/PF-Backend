const { Producto } = require("../db");

const getProductoDb = async () => {
    try {
        const ProductosDb = await Producto.findAll()
        let resp = await ProductosDb?.map( producto => {
            return {
                id: producto.id,
                marca: producto.marca,
                stock: producto.stock
            }
        })
        return resp
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getProductoDb };

