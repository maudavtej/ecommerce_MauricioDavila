class Producto {
    constructor(titulo, detalle, stock, precio, imagen) {
        this.titulo = titulo,
            this.detalle = detalle,
            this.stock = stock,
            this.precio = precio,
            this.imagen = imagen
    }
}

let prod = new Producto("BMW", "AUTO DEPORTIVO", "3 disponibles", "250,000,000$", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")

const card1 =
    `<div class="card" style="width: 18rem;">
  <img src= ${prod.imagen} id="imgBMW" class="card-img-top" alt=${prod.titulo}>
  <div class="card-body">
    <h5 class="card-title" id="mustang">${prod.titulo}</h5>
    <p class="card-text" id="detalle" >${prod.detalle}</p>
    <p class= "card-text" id="cantidad">${prod.stock}</p>
    <a href="#" class="btn btn-primary" id="dolar">${prod.precio}</a>
  </div>
</div>`;

document.querySelector(".producto").innerHTML = card1