let myForm = document.querySelector("form"); 
let body = document.querySelector("tbody");
let myTask = document.getElementById("task");
let myPriority = document.getElementById("priority");

let Tasks = [];
myForm.addEventListener("submit", function(event){
    event.preventDefault();

    let data = {
        task : myTask.value,
        priority : myPriority.value
    }

    Tasks.push(data);
    body.innerHTML = "";
    Tasks.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerText = "Fav";

        if(ele.priority == "High"){
            td2.style.backgroundColor = "red"
        }else {
            td2.style.backgroundColor = "green"
        }    

        td1.innerText = ele.task; 
        td2.innerText = ele.priority; 
        td3.append(btn);
        tr.append(td1,td2,td3);
        body.append(tr); 
    })

})
