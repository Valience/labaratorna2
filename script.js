let products = [
    {
        id: 1,
        name: "banana",
        image: "media\\banana.png",
        description: "Just what you need after gym",
        category: "fruit",
        price: 300
    },
    {
        id: 2,
        name: "grapes",
        image: "media\\grapes.png",
        description: "Try, to became Rome Imperior",
        category: "fruit",
        price: 300
    },
    {
        id: 3,
        name: "peach",
        image: "media\\peach.png",
        description: "Too much sweet isn't always bad",
        category: "fruit",
        price: 400
    },
    {
        id: 4,
        name: "carrot",
        image: "media\\carrot.png",
        description: "Eat to improve vision",
        category: "vegetable",
        price: 300
    },
    {
        id: 5,
        name: "watermelon",
        image: "media\\watermelon.png",
        description: "Don't eat at night",
        category: "fruit",
        price: 300
    },
    {
        id: 6,
        name: "onion",
        image: "media\\onion.png",
        description: "Smells bad, but taste delicious",
        category: "vegetable",
        price: 300
    },
    {
        id: 7,
        name: "cabbage",
        image: "media\\cabbage.png",
        description: "Purple outside green inside",
        category: "vegetable",
        price: 300
    },
    {
        id: 8,
        name: "cucumber",
        image: "media\\cucumber.png",
        description: "Very hydrated vegetable",
        category: "vegetable",
        price: 300
    },
    {
        id: 9,
        name: "tomato",
        image: "media\\tomato.png",
        description: "Good for salad and have a lot of vitamins",
        category: "vegetable",
        price: 300
    }
]


function loadProducts(category, priceLower, priceHigher) {
    let container = document.getElementById("container");
    let innerHtmlContainer = "<div class='grid-row'>";
    let productsFiltered = [];
    if(category) {
        productsFiltered = products.filter(elem => elem.category === category);
    } else {
        productsFiltered = products;
    }
    let i = 0;
    productsFiltered.forEach(elem => {
        i += 1;
        let elemHtml = `<div class="elem-card"><img width="80px" height="60px" src="${elem.image}"/><p class="elem-card-title">${elem.name}</p><p class="elem-card-text">${elem.description}</p></div>`;
        innerHtmlContainer += elemHtml;
        if(i % 3 == 0){
            innerHtmlContainer += "</div><div class='grid-row'>";
        }
    });
    innerHtmlContainer += "</div>"
    container.innerHTML = innerHtmlContainer;
}

loadProducts();

const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeButton = document.getElementById('close-btn');
const closeTimeout = 5000;

function showModal() {
    modal.style.display = 'block';
    modalOverlay.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
}

let count = 5;
const timerCount = setInterval(function() {
  count--;
  closeButton.textContent = `Close (${count})`;
  if (count === 0) {
    clearInterval(timerCount);
    console.log("Close ready!");
  }
}, 1000);

let timer = setTimeout(() => {
    closeButton.textContent = "Close";
    closeButton.style.color = "#000";
    closeButton.addEventListener('click', closeModal);
}, 5000);

showModal();
