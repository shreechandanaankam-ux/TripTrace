let qna=JSON.parse(localStorage.getItem("questions"))||[];

function addQuestion(){

let q=document.getElementById("question").value;

if(q=="") return;

qna.push({

question:q,

answer:"No answer yet."

});

localStorage.setItem("questions",

JSON.stringify(qna));

location.reload();

}

let div=document.getElementById("questions");

qna.forEach((item,index)=>{

div.innerHTML+=`

<div class="card">

<h3>Q. ${item.question}</h3>

<p>${item.answer}</p>

</div>

`;

});