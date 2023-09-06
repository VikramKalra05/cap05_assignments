// fill in javascript code here
let myForm = document.querySelector("form");
let body = document.querySelector("tbody");
let eName = document.getElementById("name");
let eId = document.getElementById("employeeID");
let eDept = document.getElementById("department");
let eExp = document.getElementById("exp");
let eEmail = document.getElementById("email");
let eMbl = document.getElementById("mbl");

let record = [];
myForm.addEventListener("submit", function(event){
    event.preventDefault();

    let data = {
        empName : eName.value,
        empId : eId.value,
        empDept : eDept.value,
        empExp : eExp.value,
        empEmail : eEmail.value,
        empMbl : eMbl.value,
    }

    // console.log(data["empName"])

    if(eExp.value>5){
        data["Role"] = "Senior";
    }else if(eExp.value>1 && eExp.value<=5){
        data["Role"] = "Junior";
    }else if(eExp.value<=1){
        data["Role"] = "Fresher";
    }

    record.push(data);

    body.innerHTML = "";
    record.map((ele)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");
        let td8 = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerText = "Delete"
        btn.addEventListener("click",function(){
            del = record.indexOf(ele);
            tr.innerHTML = "";
            if (del !== -1) {
                record.splice(del, 1);
            }
        })
        td1.innerText = ele.empName;
        td2.innerText = ele.empId;
        td3.innerText = ele.empDept;
        td4.innerText = ele.empExp;
        td5.innerText = ele.empEmail;
        td6.innerText = ele.empMbl;
        td7.innerText = ele.Role;
        td8.append(btn);
        

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        console.log(tr.innerText)
        body.append(tr);

    })

})
