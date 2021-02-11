//1:N
db.pedidos.aggregate([
    {
        $lookup:{
            from: "clientes",
            localField: "id_cliente",
            foreignField: "id_cliente",
            as: "pedidos_clientes"
        }
    },
    {
        $project:{
            "_id":0,
            "id_producto":0,
            "pedidos_clientes._id":0,
            "pedidos_clientes.id_cliente":0,
        }
    }
]).pretty()

//N:M
db.pedidos.aggregate([
    {
        $lookup:{
            from: "productos",
            localField: "id_producto",
            foreignField: "id_producto",
            as: "pedidos_productos"
        }
    },
    {
        $project:{
            "_id":0,
            "id_cliente":0,
            "pedidos_productos._id":0,
            "pedidos_productos.id_producto":0,
        }
    }
]).pretty()