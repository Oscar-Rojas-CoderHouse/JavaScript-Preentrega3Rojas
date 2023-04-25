fetch("../productos.json")
    .then(response => response.json())
    .then(productos => {
        miPrograma(productos)
    })
    .catch(error => console.log(error))

function miPrograma(productos){
    if(localStorage.getItem("productos")){
        productosLocal = JSON.parse(localStorage.getItem("productos"))
        productos = productosLocal.map(function ({id,nombre, precio, inventario, categoria, imagen}) {
            return new Productos(id, nombre, precio, inventario, categoria, imagen)})
    } else{
        productos = productos.map(function ({id, nombre, precioUnitario, inventario, categoria, urlImagen}) {
            return new Productos(id, nombre, precioUnitario, inventario, categoria, urlImagen)})
        
        localStorage.setItem("productos", JSON.stringify(productos)) 
    }

    function renderProductos(listaProductos, nodoPadre){
        nodoPadre.innerHTML = " "
        listaProductos.forEach(({imagen, categoria, nombre, precio, id}) => {
            let tarjetaProducto = document.createElement("div")
            tarjetaProducto.className = "item"
            
            tarjetaProducto.innerHTML += `
            <img src=${imagen} alt=${categoria}>
            <p>${nombre}</p>
            <p>Precio: $${precio}</p>
            <button class="botones" id="${id}">Agregar al carrito</button>
            `

            nodoPadre.appendChild(tarjetaProducto)

            let btnProducto = document.getElementById(id)
            btnProducto.addEventListener("click", agregarProducto)
        })
    }

    function renderCarrito (listaProductos, nodoPadre) {
        nodoPadre.innerHTML = " "
        listaProductos.forEach(({nombre, cantidad, subtotal}) => {
            let divCarrito = document.createElement("div")
            divCarrito.className = "itemCarro"
            divCarrito.innerHTML += `
            <h5>${nombre}</h5>
            <p>${cantidad}</p>
            <p>$${subtotal}</p>
            `
            nodoPadre.appendChild(divCarrito)
        })

        let total = carrito.reduce((acumulador, {subtotal}) => acumulador + subtotal, 0)
        
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

    function renderFiltradoPorCategoria (categoria, tagRender){
        const listaPorCategoria = productos.filter(producto => producto.categoria == categoria)
        renderProductos(listaPorCategoria, tagRender)
    }

    function alerta (texto, icon, color1, color2){
        Toastify({
            text: texto,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            avatar: icon,
            style: {
            background: `linear-gradient(to right, ${color1}, ${color2})`,
            },
        }).showToast();
    }

    function mostrarAlerta (estadoProducto){
        if (estadoProducto == "stock") {
            alerta("Producto agregado", "https://img.icons8.com/arcade/1x/checkmark.png","#00b09b", "#96c93d")
        } else if (estadoProducto == "agotado"){
            alerta("Producto agotado", "https://img.icons8.com/arcade/1x/delete-sign.png", "#d90303", "#dd8603")
        }
    }

    function alertaFinalizarCompra (){
        Swal.fire({
            title: 'Gracias por su compra',
            text: 'Se abrirá una ventana emergente para finalizar el proceso',
            icon: 'success',
            confirmButtonText: 'Confirmar'
        })
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

    // ----- Manejador de Eventos
    imagenPanes.addEventListener("click", filtradoPanes)
    imagenPasteles.addEventListener("click", filtradoPasteles)
    imagenPostres.addEventListener("click", filtradoPostres)
    imagenTortas.addEventListener("click", filtradoTortas)
    imagenOtros.addEventListener("click", filtradoOtros)
    iconCarritoDOM.addEventListener("click", toggleCarrito)

    // ----- Funciones Eventos
    function filtradoPanes (){
        renderFiltradoPorCategoria("Panes", sectionRenderProductos)
    }

    function filtradoPasteles (){
        renderFiltradoPorCategoria("Pasteles", sectionRenderProductos)
    }

    function filtradoPostres (){
        renderFiltradoPorCategoria("Postres", sectionRenderProductos)
    }

    function filtradoTortas (){
        renderFiltradoPorCategoria("Tortas", sectionRenderProductos)
    }

    function filtradoOtros (){
        renderFiltradoPorCategoria("Otros", sectionRenderProductos)
    }

    function toggleCarrito (){
        listaProductosCarro.classList.toggle("inactivo")
    }

    function vaciarCarrito (){
        alertaFinalizarCompra()
        localStorage.removeItem("carrito")
        carrito = []
        renderCarrito(carrito, listaProductosCarro)
        listaProductosCarro.classList.toggle("inactivo")
        listaProductosCarro.innerHTML = ""
    }

    renderProductos(productos, sectionRenderProductos)

    let carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : []

    carrito.length > 0 && renderCarrito(carrito, listaProductosCarro)

    function agregarProducto (e){
        let productoBuscado = productos.find(producto => producto.id == e.target.id)
                if (productoBuscado){
                    let posicionProducto = carrito.findIndex(producto => producto.id === productoBuscado.id)
                    if (posicionProducto != -1 && productoBuscado.inventario>0){
                        carrito[posicionProducto].cantidad ++
                        carrito[posicionProducto].subtotal = carrito[posicionProducto].precio * carrito[posicionProducto].cantidad
                        mostrarAlerta("stock")
                    } else if (posicionProducto===-1 && productoBuscado.inventario>0){
                        carrito.push({
                            id : productoBuscado.id, 
                            nombre : productoBuscado.nombre, 
                            precio : productoBuscado.precio, 
                            cantidad : 1,
                            subtotal : productoBuscado.precio * 1
                        })
                        mostrarAlerta("stock")
                    }
                    productoBuscado.inventario === 0 && mostrarAlerta("agotado")
                    productoBuscado.restarInventario(1)
                    carrito.length > 0 && renderCarrito(carrito, listaProductosCarro)
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                    localStorage.setItem("productos", JSON.stringify(productos))
                }
        }
}
    


