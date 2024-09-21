class Producto {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo,
            this.detalle = detalle,
            this.stock = stock,
            this.precio = precio,
            this.imagen = imagen
    }
}

let prod = new Producto("Mustang", "muy caro", 1, 1000000000, "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")

const card1 =
    `<div class="card" style="width: 18rem;">
        <img src="${Producto.prod.imagen}" class="card-img-top" 
        alt="${Producto.prod.titulo}">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">${Producto.prod.detalle}</p>
                <a href="#" class="btn btn-primary">${Producto.prod.precio}</a>
            </div>
    </div>`

document.querySelector(".producto").innerHTML = card1