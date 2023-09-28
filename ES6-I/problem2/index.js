let display = document.getElementById("display");

let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let start = document.getElementById("start");
let running = false;
let myInterval;

function startStop(){
    if(running){
        running = false;
        clearInterval(myInterval);
        start.textContent = "Start";
        start.style.backgroundColor = "green";
    }else{
        running = true;
        start.textContent = "Stop";
        start.style.backgroundColor = "red";
        myInterval = setInterval(()=>{
            let num =  Number(display.innerText);
            num++;
            display.innerText = num;            
        },1000);
    }
}

increment.addEventListener("click", ()=>{
    if(running){
        startStop();
    }
    let num =  Number(display.innerText);
    num++;
    display.innerText = num;
})

decrement.addEventListener("click", ()=>{
    if(running){
        startStop();
    }
    let num =  Number(display.innerText);
    num--;
    display.innerText = num;
})
