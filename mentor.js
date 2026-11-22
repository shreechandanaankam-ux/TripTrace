// ===============================
// Dynamic Itinerary
// ===============================

let totalDays = 0;
let itineraryData = [];// ===============================
// TripTrace - Mentor Module
// ===============================

// Get saved trips
let templates = JSON.parse(localStorage.getItem("templates"));

if (!Array.isArray(templates)) {
    templates = [];
}

// Check Edit Mode
let editIndex = JSON.parse(localStorage.getItem("editTrip"));

if (editIndex !== null && templates[editIndex]) {

    let trip = templates[editIndex];

    document.getElementById("tripName").value = trip.tripName;
    document.getElementById("destination").value = trip.destination;
    document.getElementById("image").value = trip.image;
    document.getElementById("startingCity").value = trip.startingCity;
    document.getElementById("days").value = trip.days;
    document.getElementById("budget").value = trip.budget;
    document.getElementById("group").value = trip.group;
    document.getElementById("season").value = trip.season;
    document.getElementById("transport").value = trip.transport;
    document.getElementById("hotel").value = trip.hotel;
    document.getElementById("difficulty").value = trip.difficulty;
    document.getElementById("rating").value = trip.rating;
    
    document.getElementById("description").value = trip.description;

}

// ===============================
// Save Trip
// ===============================

function saveTrip(){

    let tripName = document.getElementById("tripName").value.trim();
    let destination = document.getElementById("destination").value.trim();
    let image = document.getElementById("image").value.trim();
    let startingCity = document.getElementById("startingCity").value.trim();

    let days = document.getElementById("days").value;
    let budget = document.getElementById("budget").value;
    let group = document.getElementById("group").value;

    let season = document.getElementById("season").value;
    let transport = document.getElementById("transport").value;
    let hotel = document.getElementById("hotel").value;
    let difficulty = document.getElementById("difficulty").value;
    let rating = document.getElementById("rating").value;


    let description = document.getElementById("description").value;

    // Validation
if (trip.itinerary && trip.itinerary.length > 0) {

    trip.itinerary.forEach(day => {

        addDay(day);

    });

} else {

    addDay();

}
    if(
        tripName=="" ||
        destination=="" ||
        image=="" ||
        days=="" ||
        budget==""
    ){

        alert("Please fill all required fields");

        return;

    }

    itineraryData = [];

for(let i=1;i<=totalDays;i++){

    if(document.getElementById("day"+i)==null)
        continue;

    itineraryData.push({

        morning:
        document.getElementById("morning"+i).value,

        afternoon:
        document.getElementById("afternoon"+i).value,

        evening:
        document.getElementById("evening"+i).value,

        night:
        document.getElementById("night"+i).value

    });

}
  let trip={

tripName,
destination,
image,
startingCity,

days,
budget,
group,

season,
transport,
hotel,
difficulty,
rating,

itinerary: itineraryData,

description

};

    // Update

    if(editIndex!==null){

        templates[editIndex]=trip;

        localStorage.removeItem("editTrip");

        alert("Trip Updated Successfully");

    }

    // Save New

    else{

        templates.push(trip);

        alert("Trip Added Successfully");

    }

    localStorage.setItem(
        "templates",
        JSON.stringify(templates)
    );

    window.location.href="mentorDashboard.html";

}
function previewImage() {

    let imageUrl = document.getElementById("image").value;

    if (imageUrl.trim() === "") {

        document.getElementById("preview").src =
        "https://via.placeholder.com/500x300?text=Trip+Cover+Image";

        return;
    }

    document.getElementById("preview").src = imageUrl;

}
function addDay(data = null) {

    totalDays++;

    let container = document.getElementById("itineraryContainer");

    let card = document.createElement("div");

    card.className = "itinerary-card";

    card.id = "day" + totalDays;

    card.innerHTML = `

    <h3>📅 Day ${totalDays}</h3>

    <div class="day-grid">

        <div>

            <label>🌅 Morning</label>

            <textarea
            id="morning${totalDays}"
            placeholder="Breakfast, Activities, Time...">${data ? data.morning : ""}</textarea>

        </div>

        <div>

            <label>☀ Afternoon</label>

            <textarea
            id="afternoon${totalDays}"
            placeholder="Lunch, Sightseeing...">${data ? data.afternoon : ""}</textarea>

        </div>

        <div>

            <label>🌇 Evening</label>

            <textarea
            id="evening${totalDays}"
            placeholder="Snacks, Sunset...">${data ? data.evening : ""}</textarea>

        </div>

        <div>

            <label>🌙 Night</label>

            <textarea
            id="night${totalDays}"
            placeholder="Dinner, Night Activities...">${data ? data.night : ""}</textarea>

        </div>

    </div>

    <button
    type="button"
    class="remove-btn"
    onclick="removeDay(${totalDays})">

    Remove Day

    </button>

    `;

    container.appendChild(card);

}
if (editIndex === null) {

    addDay();

}
function removeDay(id){

    let card = document.getElementById("day"+id);

    if(card){

        card.remove();

    }

}
