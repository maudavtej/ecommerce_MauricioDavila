let h2 = document.querySelector("h2").innerText = 'Productos';

let array = [];
for (let i = 1; i < 10; i++) {
  const card = `<div class="card text-bg-dark">
  <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img' alt="...">
  <div class="card-img-overlay">
    <h5 class="card-title">Auto </h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>`;
  array.push(card);
}
document.querySelector('.container').innerHTML = array.join("");