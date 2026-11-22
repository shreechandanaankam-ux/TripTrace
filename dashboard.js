let templates = JSON.parse(localStorage.getItem("templates")) || [];

const tripList = document.getElementById("tripList");

const tripCount = document.getElementById("tripCount");

tripCount.innerHTML = templates.length;

function loadTrips(){

tripList.innerHTML="";

if(templates.length===0){

tripList.innerHTML=`

<div class="empty">

<i class="fa-solid fa-suitcase-rolling"></i>

<h2>No Trips Yet</h2>

<p>Create your first travel itinerary.</p>

<a href="mentor.html" class="create-btn">

Create Trip

</a>

</div>

`;

return;

}

templates.forEach((trip,index)=>{

tripList.innerHTML+=`

<div class="trip-card">

<img src="${trip.image || 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'}">

<div class="trip-content">

<h2>${trip.tripName}</h2>

<p>

<i class="fa-solid fa-location-dot"></i>

${trip.destination}

</p>

<p>

<i class="fa-solid fa-calendar"></i>

${trip.days} Days

</p>

<p>

<i class="fa-solid fa-wallet"></i>

₹${trip.budget}

</p>

<div class="buttons">

<button onclick="editTrip(${index})">

<i class="fa-solid fa-pen"></i>

Edit

</button>

<button onclick="deleteTrip(${index})">

<i class="fa-solid fa-trash"></i>

Delete

</button>

</div>

</div>

</div>

`;

});

}

function deleteTrip(index){

if(confirm("Delete this trip?")){

templates.splice(index,1);

localStorage.setItem("templates",

JSON.stringify(templates));

loadTrips();

tripCount.innerHTML=templates.length;

}

}

function editTrip(index){

localStorage.setItem("editTrip",

JSON.stringify(index));

window.location="mentor.html";

}

loadTrips();