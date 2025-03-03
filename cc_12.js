//Coding Challenge #12

//Task 1 Business Dashboard

// This selects dashboard container
const dashboardDiv = document.getElementById('dashboard');
const dashboardByQuery = document.querySelector('.dashboard');

// Will create the function to create metric cards
function createMetricCard(id, title, value) {
    const card = document.createElement("div"); 
    card.setAttribute("class", "metric-card");
    card.setAttribute("id", id);

// Title and Value elements added
const cardTitle = document.createElement("h3");
cardTitle.textContent = title;
const cardValue = document.createElement("p");
cardValue.textContent = value;

// This will append title and value to metric card
card.appendChild(cardTitle);
card.appendChild(cardValue);

// This will append revenue card to dashboard
dashboardDiv.appendChild(card);
};

//Task 2 Updating Dashboard Metrics

//Converts all metric card elements into an array
const metricCards = Array.from(document.querySelectorAll(".metric-card"));
//Changes color and updates text
metricCards.forEach(card => { 
    card.style.backgroundColor = "orange";
    card.querySelector("h3").textContent += " - Updated";
});

//Task 3 Dynamic Inventory Management

//This will choose an inventory list container
const inventoryList = document.getElementById("inventoryList");

// Created function that adds a new inventory item
function addInventoryItem(productName) {
    const listItem = document.createElement("li"); 
    listItem.setAttribute("class", "product-item"); 
    listItem.setAttribute("data-product", productName); 

    // This adds an event listener which removes item when clicked
    listItem.addEventListener("click", function () {
        removeInventoryItem(listItem); 
    });

    // Appends product item
    inventoryList.appendChild(listItem);
};

// Will remove item when clicked on
function removeInventoryItem(item) {
    inventoryList.removeChild(item);
};

//Task 4 Customer Selection

// Choses the customer
const customerSection = document.getElementById("customerSection");

// Created function that creates and adds customer cards
function addCustomerCard(customerName) {
    const card = document.createElement("div"); 
    card.setAttribute("class", "customer-card");
    card.textContent = customerName;

    // This will add a click event listener
    card.addEventListener("click", function (event) {
        console.log("Customer card clicked: " + customerName); 
        event.stopPropagation();
        });

    // Will append customers card to the customer section
    customerSection.appendChild(card);
};
//Event listener listens for clicks in customer selection
customerSection.addEventListener("click", function () { 
    // Logs clicks in customer section to console
    console.log("Customer section clicked"); 
});


