let submit = document.getElementById("submit");
let showDetails = document.getElementById("display");
let details = [];
let cont = document.getElementById("container");

submit.addEventListener("click", ()=>{
    let person = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    person.name = name;
    person.age = age;

    details.push(person);
    name = null;
    age = null;
});

let sNo = 1;
showDetails.addEventListener("click", ()=>{
    details.forEach((ele)=>{
        let block = document.createElement("div");
        let serialNo = document.createElement("p");
        let name = document.createElement("p");
        let age = document.createElement("p");

        serialNo.textContent = sNo; 
        sNo++;
        name.textContent = ele.name;
        age.textContent = ele.age;

        block.append(serialNo, name, age);
        cont.append(block);
    })
})


