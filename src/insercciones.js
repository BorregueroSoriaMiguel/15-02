db.pedidos.insertMany([
    {
        "id_pedido":01, "id_producto":03, "id_cliente":03,"ud":5 ,"forma_pago":"paypal", "fecha_venta":ISODate("2021-01-07")
    },
    {
        "id_pedido":02, "id_producto":01, "id_cliente":03,"ud":1, "forma_pago":"visa", "fecha_venta":ISODate("2021-01-10")
    },
    {
        "id_pedido":03, "id_producto":03, "id_cliente":01,"ud":3, "forma_pago":"visa", "fecha_venta":ISODate("2021-01-16")
    },
    {
        "id_pedido":04, "id_producto":02, "id_cliente":02,"ud":1, "forma_pago":"tarjeta_regalo", "fecha_venta":ISODate("2021-01-21")
    },
    {
        "id_pedido":05, "id_producto":02, "id_cliente":02,"ud":1, "forma_pago":"paypal", "fecha_venta":ISODate("2021-01-28")
    },
    {
        "id_pedido":06, "id_producto":02, "id_cliente":03,"ud":2, "forma_pago":"paypal", "fecha_venta":ISODate("2021-02-01")
    },
    {
        "id_pedido":07, "id_producto":05, "id_cliente":01,"ud":1, "forma_pago":"tarjeta_regalo", "fecha_venta":ISODate("2021-02-04")
    },
    {
        "id_pedido":08, "id_producto":04, "id_cliente":01,"ud":4, "forma_pago":"paypal", "fecha_venta":ISODate("2021-02-11")
    }
])

db.clientes.insertMany([
    {
        "id_cliente":01,"nombre": "Pedro", "apellidos":"Martín Cobos", "direccion":"Avda. Pastel, nº12", "num_telefono":954830175, "correo_electronico":"pemaco@gmail.com"
    },
    {
        "id_cliente":02,"nombre": "María", "apellidos":"Rosa Pompón", "direccion":"Avda. Macarena, nº3", "num_telefono":954830288, "correo_electronico":"marosapompon@gmail.com"
    },
    {
        "id_cliente":03,"nombre": "Jose", "apellidos":"Marínez Polo", "direccion":"Calle Avila, nº68", "num_telefono":954142356, "correo_electronico":"pepemalo@gmail.com"
    }
])

db.productos.insertMany([
    {
        "id_producto":01, "producto":"pelota", "precio_ud":15, "descripción":"Material resistente, medida tipo 5."
    },
    {
        "id_producto":02, "producto":"guantes", "precio_ud":5, "descripción":"Gran calidad y material, rígidos y confortables."
    },
    {
        "id_producto":03, "producto":"calcetines", "precio_ud":2, "descripción":"Gran protección contra el frío."
    },
    {
        "id_producto":04, "producto":"muñequeras", "precio_ud":2, "descripción":"Flexible y cómodas."
    },
    {
        "id_producto":05, "producto":"raqueta", "precio_ud":30, "descripción":"Gran calidad de material y mango anti-resbalos."
    }
])