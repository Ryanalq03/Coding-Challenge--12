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

