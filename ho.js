const desserts = [
    {
        name: "Japanese Pancake",
        image: "https://i.pinimg.com/enabled/564x/09/6c/52/096c52f0682c3fbcaa5a9ddb3f54c0fa.jpg",
        description: "Fluffy Japanese pancakes, topped with fresh fruits and creamy sauces."
    },
    {
        name: "Cupcake",
        image: "https://i.pinimg.com/enabled/564x/0f/77/b7/0f77b76d05bc610ae05d0e8efaa9cca8.jpg",
        description: "Delicious cupcake with strawberry cream."
    },
    {
        name: "Cinnamon roll",
        image: "https://i.pinimg.com/enabled/564x/68/da/72/68da729336e7ee481095fc65b21fe86d.jpg",
        description: "A sweet baked dough filled with a cinnamon-sugar filling."
    }
];

function processDesserts(dessertsArray, callback) {
    return dessertsArray.map(callback);
}

const dessertNames = processDesserts(desserts, dessert => dessert.name);
console.log(dessertNames); 

const dessertsContainer = document.getElementById("desserts-container");

function renderDesserts(filter = []) {
    dessertsContainer.innerHTML = '';

    const filteredDesserts = filter.length > 0 ? 
        desserts.filter(dessert => filter.includes(dessert.name)) : desserts;

    filteredDesserts.forEach((dessert) => {
        const dessertDiv = document.createElement('div');
        dessertDiv.className = 'col-md-4 mb-4 dessert-item'; 
        dessertDiv.innerHTML = `
            <h5>${dessert.name}</h5>
            <img width="200" src="${dessert.image}" alt="${dessert.name}" class="img-fluid">
            <p>${dessert.description}</p>
        `;
        dessertsContainer.appendChild(dessertDiv);
    });
}

function saveFilters() {
    const filters = {};
    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');

    checkboxes.forEach((checkbox) => {
        if (!filters[checkbox.name]) {
            filters[checkbox.name] = [];
        }
        if (checkbox.checked) {
            filters[checkbox.name].push(checkbox.value);
        }
    });

    localStorage.setItem('filters', JSON.stringify(filters));
}

function applySavedFilters() {
    const savedFilters = JSON.parse(localStorage.getItem('filters')) || {};
    const selectedDesserts = savedFilters.dessert || [];

    const checkboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectedDesserts.includes(checkbox.value);
    });

    renderDesserts(selectedDesserts);
}

document.getElementById('applyFilters').addEventListener('click', () => {
    saveFilters();
    const selectedDesserts = Array.from(document.querySelectorAll('.filter-options input[type="checkbox"]:checked'))
                                  .map(checkbox => checkbox.value);
    renderDesserts(selectedDesserts);
});

document.getElementById('clearFilters').addEventListener('click', () => {
    localStorage.removeItem('filters');
    document.querySelectorAll('.filter-options input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    renderDesserts(); 
});

document.addEventListener('DOMContentLoaded', applySavedFilters);
renderDesserts();

