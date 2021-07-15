

let count = 0;

const numberValue = document.querySelector("#number");
const addBtn = document.querySelector("#add_count");
const lowerBtn= document.querySelector("#lower_count");

lowerBtn.addEventListener("click", () =>{
    if (count > 0){
        count--;
        numberValue.innerHTML = count;
    }
});



addBtn.addEventListener("click", () =>{
    if (count < 50){
        count++;
        numberValue.innerHTML = count;
    }
});
