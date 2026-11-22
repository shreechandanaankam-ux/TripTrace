let templates=JSON.parse(localStorage.getItem("templates"))||[];

let container=document.getElementById("tripContainer");

function loadTrips(){

container.innerHTML="";

templates.forEach((trip,index)=>{

container.innerHTML+=`

<div class="card">

<img src="https://picsum.photos/500/250?random=${index}">

<h2>${trip.tripName}</h2>

<p>${trip.destination}</p>

<p>₹ ${trip.budget}</p>

<button onclick="viewTrip(${index})">Explore</button>

</div>

`;

});

}

function viewTrip(i){

localStorage.setItem("selectedTrip",JSON.stringify(templates[i]));

window.location="planner.html";

}

loadTrips();