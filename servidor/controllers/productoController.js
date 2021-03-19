const Producto = require('../models/Producto');

exports.crearProducto = async(req, res) => {
    try {
        let producto;

        //Creamos el producto
        producto = new Producto(req.body);

        //Guardamos
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
}

exports.obtenerProductos = async(req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
}

exports.actualizarProducto = async(req, res) => {
    try {
        const { nombre, categoria, ubicacion, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "El producto que buscas no existe." });
        }

        producto.nombre = nombre;
        producto.categoria = categoria;
        producto.ubicacion = ubicacion;
        producto.precio = precio;

        //Actualizamos producto

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true });
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
}

exports.obtenerProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "El producto que buscas no existe." });
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
}

exports.eliminarProducto = async(req, res) => {
    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "El producto que buscas no existe." });
        }

        await Producto.findByIdAndRemove({ _id: req.params.id });
        res.json({ msg: "Producto eliminado correctamente" });

    } catch (error) {
        console.log(error);
        res.status(500).send("Hay un error");
    }
}