let feedbacks=JSON.parse(localStorage.getItem("feedback"))||[];

function submitFeedback(){

let fb={

name:name.value,

comment:comment.value,

rating:rating.value

};

feedbacks.push(fb);

localStorage.setItem("feedback",

JSON.stringify(feedbacks));

location.reload();

}

let reviews=document.getElementById("reviews");

feedbacks.forEach(f=>{

reviews.innerHTML+=`

<div class="card">

<h3>${f.name}</h3>

<p>${f.comment}</p>

<b>${f.rating}</b>

</div>

`;

});