// fill in javascript code here
let myForm = document.querySelector("form");
let body = document.querySelector("tbody");
let Name = document.getElementById("name");
let Id = document.getElementById("docID");
let Dept = document.getElementById("dept");
let Exp = document.getElementById("exp");
let Mbl = document.getElementById("mbl");
let Email = document.getElementById("email");

let record = [];
myForm.addEventListener("submit", function(event){
    event.preventDefault();
    let del;

    let data = {
        docName : Name.value,
        docId : Id.value,
        docDept : Dept.value,
        docExp : Exp.value,
        docMbl : Mbl.value,
        docEmail : Email.value
    }

    console.log(data["docName"])

    if(Exp.value>5){
        data["Role"] = "Senior";
    }else if(Exp.value>1 && Exp.value<=5){
        data["Role"] = "Junior";
    }else if(Exp.value<=1){
        data["Role"] = "Trainee";
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
        td1.innerText = ele.docName;
        td2.innerText = ele.docId;
        td3.innerText = ele.docDept;
        td4.innerText = ele.docExp;
        td5.innerText = ele.docEmail;
        td6.innerText = ele.docMbl;
        td7.innerText = ele.Role;
        td8.append(btn);
        

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
        console.log(tr.innerText)
        body.append(tr);

    })

})
