class Productos {
    constructor(id, nombre, precio, inventario, categoria, imagen, agotado = false){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.inventario = inventario
        this.categoria = categoria
        this.imagen = imagen
        this.agotado = agotado
    }
    sumarInventario(unidades){
        this.inventario += unidades
    }
    restarInventario(unidades){
        if (this.inventario>0){
            this.inventario -= unidades
        }
    }
    estaAgotado(){
        if (this.inventario === 0){
            this.agotado = true
            alert("Producto agotado")
        }
    }
}