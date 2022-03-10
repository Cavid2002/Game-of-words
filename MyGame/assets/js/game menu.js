function displayChange(){
    let change = document.querySelector(".info");
    change.classList.toggle("active");
}

function displayChange2(){
    let change = document.querySelector(".follow");
    change.classList.toggle("active");
}

let rule = document.querySelector(".rules");
rule.onclick = displayChange;

let follow = document.querySelector(".review");
follow.onclick = displayChange2;