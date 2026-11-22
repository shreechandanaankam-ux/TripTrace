let fav=JSON.parse(localStorage.getItem("favorites"))||[];

let div=document.getElementById("favTrips");

if(fav.length==0){

div.innerHTML="<h2>No Favourite Trips</h2>";

}

fav.forEach(trip=>{

div.innerHTML+=`

<div class="card">

<h2>${trip.tripName}</h2>

<p>${trip.destination}</p>

<p>₹${trip.budget}</p>

</div>

`;

});