let questions = document.querySelectorAll(".faq-question");

questions.forEach(q => {

q.addEventListener("click", () => {

let answer = q.nextElementSibling;

if(answer.style.display === "block"){
answer.style.display = "none";
}
else{
answer.style.display = "block";
}

});

});
