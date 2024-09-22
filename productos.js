class Producto {
  constructor(titulo, detalle, stock, precio, imagen) {
    this.titulo = titulo,
      this.detalle = detalle,
      this.stock = stock,
      this.precio = precio,
      this.imagen = imagen
  }
}

let prod = new Producto("BMW X6 ", "AUTO DEPORTIVO: El nuevo BMW X6 combina el máximo dinamismo de conducción deportivo con un diseño atlético y un equipamiento exclusivo, Potente motor de combustión de 8 cilindros BMW M TwinPower Turbo con 530 hp Máximo confort de marcha gracias al cambio deportivo Steptronic de 8 velocidades, Poderosa presencia gracias a la parrilla BMW 'Iconic Glow' iluminada y al paquete M Sport de serie, Tecnologías modernas y materiales exclusivos como los acabados de cristal ", "3 Disponibles", "250,000,000$", "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg")

const card1 =
  `<div class= card1>
    <div class="card" id= "BMW" style="width: 18rem;">
  <img src= ${prod.imagen} id="imgBMW" class="card-img-top" alt=${prod.titulo}>
  <div class="card-body">
    <h5 class="card-title" id="mustang">${prod.titulo}</h5>
     <div class="cantidad">${prod.stock}</div>
    <p class="card-text" id="detalle" >${prod.detalle}</p>
   
    <a href="#" class="btn btn-primary" id="dolar">${prod.precio}</a>
  </div>
</div>`;

document.querySelector(".producto").innerHTML = card1