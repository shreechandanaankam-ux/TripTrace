let trip=JSON.parse(localStorage.getItem("selectedTrip"));

let info=document.getElementById("tripInfo");

info.innerHTML=`

<h2>${trip.tripName}</h2>

<p>Destination : ${trip.destination}</p>

<p>Days : ${trip.days}</p>

<p>Budget Per Person : ₹${trip.budget}</p>

<p>${trip.description}</p>

`;

function calculateBudget(){

let p=document.getElementById("persons").value;

let total=trip.budget*p;

document.getElementById("total").innerHTML=

"Grand Total : ₹"+total;

}