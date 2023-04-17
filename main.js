const arrayProductos = [
    {
        id:1,
        nombre: "Pan de Arequipe y Coco",
        precioUnitario: 12500,
        inventario: 50,
        categoria: "Panes",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/AREQUIPE-Y-COCO-600x495.jpg"
    },
    {
        id:2,
        nombre: "Pan de Chocolate",
        precioUnitario: 16500,
        inventario: 50,
        categoria: "Panes",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/CHOCOLATE-600x495.jpg"
    },
    {
        id:3,
        nombre: "Pan de Queso",
        precioUnitario: 14900,
        inventario: 50,
        categoria: "Panes",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/QUESO-600x495.jpg"
    },
    {
        id:4,
        nombre: "Pan Siete Granos",
        precioUnitario: 11500,
        inventario: 50,
        categoria: "Panes",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/PAN-SIETE-GRANOS-600x495.jpg"
    },
    {
        id:5,
        nombre: "Maria Luisa de Arequipe-16 p",
        precioUnitario: 65500,
        inventario: 10,
        categoria: "Tortas",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/MARIA-LUISA-AREQUIPE-600x495.jpg"
    },
    {
        id:6,
        nombre: "Torta Casera-10 p",
        precioUnitario: 32500,
        inventario: 10,
        categoria: "Tortas",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/CASERA-10-600x495.jpg"
    },
    {
        id:7,
        nombre: "Torta de Almojábana-6 p",
        precioUnitario: 43000,
        inventario: 10,
        categoria: "Tortas",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/ALMOJABANA-1-600x495.jpg"
    },
    {
        id:8,
        nombre: "Torta de Galleta Oreo-16 p",
        precioUnitario: 43000,
        inventario: 10,
        categoria: "Tortas",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/GALLETA-DE-OREO-600x495.jpg"
    },
    {
        id:9,
        nombre: "Torta de Semillas de Amapola-16 p",
        precioUnitario: 70000,
        inventario: 10,
        categoria: "Tortas",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/SEMILLAS-DE-AMAPOLA-600x495.jpg"
    },
    {
        id:10,
        nombre: "Encarcelado",
        precioUnitario: 6300,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/ENCARCELADO-600x495.jpg"
    },
    {
        id:11,
        nombre: "Pastel de Arequipe y Tocineta",
        precioUnitario: 6200,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/AREQUIPE-Y-TOCINETA-600x495.jpg"
    },
    {
        id:12,
        nombre: "Pastel de Arequipe",
        precioUnitario: 5200,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/AREQUIPE-600x495.jpg"
    },
    {
        id:13,
        nombre: "Pastel de Chocolate",
        precioUnitario: 5500,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/CHOCOLATE-1-600x495.jpg"
    },
    {
        id:14,
        nombre: "Pastel de Guayaba",
        precioUnitario: 5000,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/GUAYABA-600x495.jpg"
    },
    {
        id:15,
        nombre: "Pastel de Queso y Arequipe",
        precioUnitario: 5000,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/QUESO-Y-AREQUIPE-600x495.jpg"
    },
    {
        id:16,
        nombre: "Pastel de Queso y Guayaba",
        precioUnitario: 5300,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/QUESO-Y-GUAYABA-600x495.jpg"
    },
    {
        id:17,
        nombre: "Pastel Hawaiano",
        precioUnitario: 5300,
        inventario: 30,
        categoria: "Pasteles",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/HAWAIANO-1-600x495.jpg"
    },
    {
        id:18,
        nombre: "Cheese Cake de Frutos Rojos-16 p",
        precioUnitario: 88000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/FRUTOS-ROJOS-600x495.jpg"
    },
    {
        id:19,
        nombre: "Cheese Cake de Limón-16 p",
        precioUnitario: 82000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/LIMON-600x495.jpg"
    },
    {
        id:20,
        nombre: "Cheese Cake de Maracuya-16 p",
        precioUnitario: 88000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/MARACUYA-600x495.jpg"
    },
    {
        id:21,
        nombre: "Cheese Cake de Nutella-16 p",
        precioUnitario: 75000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/NUTELLA-600x495.jpg"
    },
    {
        id:22,
        nombre: "Chocoflan-8 p",
        precioUnitario: 64000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/CHOCOFLAN-600x495.jpg"
    },
    {
        id:23,
        nombre: "Torta de Queso con Arequipe",
        precioUnitario: 60000,
        inventario: 15,
        categoria: "Postres",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/QUESO-Y-AREQUIPE-1-600x495.jpg"
    },
    {
        id:24,
        nombre: "Pan Trenza",
        precioUnitario: 9300,
        inventario: 50,
        categoria: "Panes",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2021/02/TRENZA-600x495.jpg"
    },
    {
        id:25,
        nombre: "Almojábana",
        precioUnitario: 4200,
        inventario: 50,
        categoria: "Otros",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/ALMOJABANA-600x495.jpg"
    },
    {
        id:26,
        nombre: "Pandebono",
        precioUnitario: 3800,
        inventario: 50,
        categoria: "Otros",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/PANDEBONO-600x495.jpg"
    },
    {
        id:27,
        nombre: "Pandequeso",
        precioUnitario: 3800,
        inventario: 50,
        categoria: "Otros",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/PANDEQUESO-600x495.jpg"
    },
    {
        id:28,
        nombre: "Pandeyuca",
        precioUnitario: 3800,
        inventario: 50,
        categoria: "Otros",
        urlImagen: "https://www.lamigueria.com.co/wp-content/uploads/2022/07/PANDEYUCA-600x495.jpg"
    },
]

const productos = arrayProductos.map(function (producto) {
    return new Productos(producto.id, producto.nombre, producto.precioUnitario, producto.inventario, producto.categoria, producto.urlImagen)})


function renderProductos(listaProductos, nodoPadre){
    nodoPadre.innerHTML = " "
    listaProductos.forEach(produc => {
        let tarjetaProducto = document.createElement("div")
        tarjetaProducto.className = "item"
        
        tarjetaProducto.innerHTML += `
        <img src=${produc.imagen} alt=${produc.categoria}>
        <p>${produc.nombre}</p>
        <p>Precio: $${produc.precio}</p>
        <button class="botones" id="${produc.id}">Agregar al carrito</button>
        `

        nodoPadre.appendChild(tarjetaProducto)

        let btnProducto = document.getElementById(produc.id)
        btnProducto.addEventListener("click", agregarProducto)
    })
}

function renderCarrito (listaProductos, nodoPadre) {
    let divCarrito
    nodoPadre.innerHTML = " "
    listaProductos.forEach(producto => {
        divCarrito = document.createElement("div")
        divCarrito.className = "itemCarro"
        divCarrito.innerHTML += `
        <h5>${producto.nombre}</h5>
        <p>${producto.cantidad}</p>
        <p>$${producto.subtotal}</p>
        `
        nodoPadre.appendChild(divCarrito)
    })

    let total = carrito.reduce((acumulador, producto) => acumulador + producto.subtotal, 0)
    
    let etiquetaTotal = document.createElement("div")
    etiquetaTotal.className = "subtotal"

    etiquetaTotal.innerHTML += `
    <h5>Total:</h5>
    <p>$${total}</p>
    `
    nodoPadre.appendChild(etiquetaTotal)

    let etiquetaFinalizar = document.createElement("div")
    etiquetaFinalizar.className = "contenedorBtn"

    etiquetaFinalizar.innerHTML = `
    <button class="botones" id="finalizarCompra">Comprar</button>
    `
    nodoPadre.appendChild(etiquetaFinalizar)

    const btnComprar = document.querySelector("#finalizarCompra")
    btnComprar.addEventListener("click", vaciarCarrito)
}



// -----Variables que almacenan elementos del HTML
const sectionRenderProductos = document.querySelector(".renderProductos")
const imagenPanes = document.querySelector("#panes")
const imagenPasteles = document.querySelector("#pasteles")
const imagenPostres = document.querySelector("#postres")
const imagenTortas = document.querySelector("#tortas")
const imagenOtros = document.querySelector("#otros")
const iconCarritoDOM = document.querySelector("#carrito")
const listaProductosCarro = document.querySelector(".carritoUsuario")


renderProductos(productos, sectionRenderProductos)
// ----- Manejador de Eventos
imagenPanes.addEventListener("click", filtradoPanes)
imagenPasteles.addEventListener("click", filtradoPasteles)
imagenPostres.addEventListener("click", filtradoPostres)
imagenTortas.addEventListener("click", filtradoTortas)
imagenOtros.addEventListener("click", filtradoOtros)
iconCarritoDOM.addEventListener("click", toggleCarrito)


// ----- Funciones Eventos
function filtradoPanes (){
    const listaPanes = productos.filter(producto => producto.categoria == "Panes")
    renderProductos(listaPanes, sectionRenderProductos)
}

function filtradoPasteles (){
    const listaPasteles = productos.filter(producto => producto.categoria == "Pasteles")
    renderProductos(listaPasteles, sectionRenderProductos)
}

function filtradoPostres (){
    const listaPostres = productos.filter(producto => producto.categoria == "Postres")
    renderProductos(listaPostres, sectionRenderProductos)
}

function filtradoTortas (){
    const listaTortas = productos.filter(producto => producto.categoria == "Tortas")
    renderProductos(listaTortas, sectionRenderProductos)
}

function filtradoOtros (){
    const listaOtros = productos.filter(producto => producto.categoria == "Otros")
    renderProductos(listaOtros, sectionRenderProductos)
}

function toggleCarrito (){
    listaProductosCarro.classList.toggle("inactivo")
    
}

function vaciarCarrito (){
    alert("Gracias por la compra realizada\nHasta pronto!!!")
    localStorage.removeItem("carrito")
    carrito = []
    renderCarrito(carrito, listaProductosCarro)
}

let carrito = []

if (localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"))
    renderCarrito(carrito, listaProductosCarro)
}

function agregarProducto (e){
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
            if (productoBuscado){
                let posicionProducto = carrito.findIndex(producto => producto.id === productoBuscado.id)
                if (posicionProducto != -1 && productoBuscado.inventario>=1){
                    carrito[posicionProducto].cantidad +=1
                    carrito[posicionProducto].subtotal = carrito[posicionProducto].precio * carrito[posicionProducto].cantidad
                    productoBuscado.restarInventario(1)
                    console.log(productoBuscado.inventario)
                } else if (posicionProducto==-1 && productoBuscado.inventario>=1){
                    carrito.push({
                        id : productoBuscado.id, 
                        nombre : productoBuscado.nombre, 
                        precio : productoBuscado.precio, 
                        cantidad : 1,
                        subtotal : productoBuscado.precio * 1
                    })
                    productoBuscado.restarInventario(1)
                }
                renderCarrito(carrito, listaProductosCarro)
                localStorage.setItem("carrito", JSON.stringify(carrito))
            }
    }


