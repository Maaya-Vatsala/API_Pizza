const imageId = { //chaque img est réf à son id
    1: "margherita.jpg",
    2: "4fromages.jpg",
    3: "viande.jpg",
    4:"reine.jpg",
    5:"pepperoni.jpg",
    6:"vegi.jpg",
    7:"vegan.jpg",
    8:"hawai.jpg",
    9:"custom.jpg"
};

const PizzasContainer = document.getElementById("pizzas");
const DetailContainer = document.getElementById("detail-pizza");

const API_URL = "./API_url.json" 

async function loadPizzas(){
    const reponse = await fetch(API_URL); //That is soo fetch #MeanGirls hahaha; fetch récupère une liste de pizz depuis API
    const data = await reponse.json();
    const pizzas = data.pizzas;

    PizzasContainer.innerHTML = "";

    pizzas.forEach(pizza =>{
        const div = document.createElement("div");
        div.className="pizza";
        div.dataset.id = pizza.Id;

        div.innerHTML = `
            <h3> ${pizza.Name} </h3>
            <img src = "./${imageId [pizza.Id]}" alt = "${pizza.Name}">
            <p> <strong> Prix :</strong> ${pizza.Price}€ </p>
        `;
        
        div.addEventListener("click", () => showDetails(pizza));
        PizzasContainer.appendChild(div);
    });
}

function showDetails(pizza) {
    DetailContainer.classList.remove("hidden");
    DetailContainer.innerHTML = `
        <img class ="pizzaiolo" src ="./pizzaiolo.gif">
        <h3>${pizza.Name}</h3>
        <p><strong>ID :</strong> ${pizza.Id}</p>
        <p>${pizza.Description}</p>
        <p><strong>Avis :</strong> ${pizza.Avis}</p>
        <p><strong>Ingrédients :</strong></p>
        <ul>
        ${pizza.Ingredients.map((ingre) => `<li>${ingre}</li>`).join("")}
        </ul>
  `;
}

loadPizzas();


/*attention backticks pour variable
"" : chaine cara
'' : cara
`` : variable contenur

const ingredient = "tomate";
`Ingrédient : ${ingredient}` // Ingrédient : tomate
'Ingrédient : ${ingredient}' // Ingrédient : ${ingredient}
*/