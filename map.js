var map=L.map('map').setView([20.5937,78.9629],5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{

maxZoom:19,

}).addTo(map);

let places=[

{

name:"Goa",

lat:15.2993,

lng:74.1240

},

{

name:"Hyderabad",

lat:17.3850,

lng:78.4867

},

{

name:"Delhi",

lat:28.6139,

lng:77.2090

},

{

name:"Kerala",

lat:10.8505,

lng:76.2711

},

{

name:"Manali",

lat:32.2432,

lng:77.1892

}

];

places.forEach(place=>{

L.marker([place.lat,place.lng])

.addTo(map)

.bindPopup("<h3>"+place.name+"</h3>");

});