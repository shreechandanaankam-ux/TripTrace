// Get all templates from LocalStorage
let trips = JSON.parse(localStorage.getItem("templates")) || [];

// Container
let container = document.getElementById("exploreTrips");

// Display Trips
function loadTrips(data) {

    container.innerHTML = "";

    if (data.length === 0) {
        container.innerHTML = `
            <div class="card">
                <h2>No Trips Found</h2>
            </div>
        `;
        return;
    }

    data.forEach((trip, index) => {

        container.innerHTML += `

        <div class="card">

            <img src="https://picsum.photos/600/300?random=${index + 1}" alt="Trip Image">

            <h2>${trip.tripName}</h2>

            <h3>${trip.destination}</h3>

            <p>${trip.description}</p>

            <p><strong>Days:</strong> ${trip.days}</p>

            <p><strong>Budget:</strong> ₹${trip.budget}</p>

            <button onclick="openPlanner(${index})">
                Plan Trip
            </button>

            <button onclick="addFavourite(${index})">
                ❤️ Add to Favourite
            </button>

        </div>

        `;

    });

}

// Search Trips
function searchTrip() {

    let keyword = document
        .getElementById("search")
        .value
        .toLowerCase();

    let filtered = trips.filter(trip =>

        trip.tripName.toLowerCase().includes(keyword) ||

        trip.destination.toLowerCase().includes(keyword)

    );

    loadTrips(filtered);

}

// Open Planner
function openPlanner(index) {

    localStorage.setItem(
        "selectedTrip",
        JSON.stringify(trips[index])
    );

    window.location.href = "planner.html";

}

// Add Favourite
function addFavourite(index) {

    let favourites =
        JSON.parse(localStorage.getItem("favorites")) || [];

    // Prevent duplicate favourites
    let exists = favourites.some(item =>
        item.tripName === trips[index].tripName &&
        item.destination === trips[index].destination
    );

    if (exists) {
        alert("Trip already exists in favourites!");
        return;
    }

    favourites.push(trips[index]);

    localStorage.setItem(
        "favorites",
        JSON.stringify(favourites)
    );

    alert("Trip added to favourites successfully!");

}

// Load trips on page load
loadTrips(trips);