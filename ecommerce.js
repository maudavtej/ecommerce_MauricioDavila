function actualizaTitulo(a) {
  let h2 = document.querySelector("h2").innerText = a
};
//funcion para anadir nuestras 9 cartas//
function addCards() {//declaramos la funcion//
  let array = [];//creamos una lista vacia//
  for (let i = 1; i < 10; i++) { //creamos un bucle for, nuestra variable 'i' empezara en 1, tiene que ser menor a 10 e ira aumentando de 1 en uno hasta llegar a 9//
    //creamos una constante a la cual le asignaremos el diseno de nuestras tarjetas mediante bootstrap, sustituyendo en img las imagenes que queremos y usando nuestro bucle for dentro de src para crear las 9 cartas//
    const card = `<div class="card text-bg-dark"> 
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img' alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Auto </h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>`;
    array.push(card);//con esta linea de codigo, agregamos nuestras cards y se guardan//
  }
  document.querySelector('.container').innerHTML = array.join("");
};//esta linea nos permite quitar las comas entre cada uno de los elementos de la lista vacia que habiamos creado//

console.log(addCards());
