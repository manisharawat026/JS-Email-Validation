let enteremail = document.querySelector(".enteremail");
let text = document.querySelector(".text");
let check = document.querySelector(".check");


let regex = /^[^]+\@[a-zA-Z]+.[a-zA-Z]{2,4}$/;

check.addEventListener("click",()=>{
    if(enteremail.value == ""){
        text.innerText = "Please Enter Email";
        text.style.color = "red";
    }else if(enteremail.value.match(regex)){
        text.innerText = "Congrats! Your email is in corret format.";
        text.style.color = "green";
    }else{
        text.innerText = "Sorry! Your email not in correct format.";
        text.style.color = "red";
    }
});