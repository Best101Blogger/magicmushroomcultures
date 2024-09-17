// Sample data for mushroom cultures (replace with your actual data)
const cultures = [
    { name: "Oyster Mushroom", image: "oyster.jpg", description: "..." },
    // ... more cultures
];

const cultureGrid = document.querySelector(".culture-grid");

// Function to create HTML for a culture item
function createCultureItem(culture) {
    const item = document.createElement("div");
    item.classList.add("culture-item");
    item.innerHTML = `
        <img src="${culture.image}" alt="${culture.name}">
        <h3>${culture.name}</h3>
        <p>${culture.description}</p>
        <button>Add to Cart</button>
    `;
    return item;
}

// Populate the culture grid
cultures.forEach(culture => {
    const item = createCultureItem(culture);
    cultureGrid.appendChild(item);
});

// Add more JavaScript for interactivity (e.g., cart functionality)