const API_URL = "http://localhost:3000/coffee";

let hero3Cards = document.getElementById("hero3__cards");
console.log(hero3Cards);

async function getProducts() {
  let data = await fetch(API_URL)
    .then((res) => res.json())
    .then((data) => displayPro(data))
}

getProducts();

function displayPro(data) {
  data.forEach((pro) => {
    let card = document.createElement("div");
    let title = document.createElement("h2");
    let image = document.createElement("img");
    let description = document.createElement("p");
    let price = document.createElement("price")

    image.setAttribute("src", pro.image);
    title.textContent = pro.title;
    description.textContent = pro.description
price.textContent = pro.price
    card.appendChild(image);
    card.appendChild(title);
    hero3Cards.appendChild(card);
    card.appendChild(description)
    card.appendChild(price)
    card.className = 'hero3__cards--card'
  });
}