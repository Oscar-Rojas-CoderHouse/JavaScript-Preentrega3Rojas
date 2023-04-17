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
    ingresarModificarInventario(unidades){
        if (!isNaN(unidades) && unidades > 0){
            this.inventario += unidades
        } else {
            alert("Ingresa un número valido de unidades")
        }
    }
    restarInventario(unidades){
        if (this.inventario>0){
            this.inventario -= unidades
        } else if(this.inventario === 0){
            alert(`No hay unidades disponibles del producto ${this.nombre}`)
        }
    }
    estaAgotado(){
        if (this.inventario === 0){
            this.agotado = true
            alert("Producto agotado")
        }
    }
}