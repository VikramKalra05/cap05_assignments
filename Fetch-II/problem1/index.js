let body = document.getElementById("body");
fetch("https://jsonplaceholder.typicode.com/todos")
.then((res)=>{
    return res.json();
}).then((res)=>{
    let data = res;
    data.forEach((ele) => {
        let row = document.createElement("tr");
        let id = document.createElement("td");
        let title = document.createElement("td");
        let status = document.createElement("td");

        id.textContent = ele.id;
        title.textContent = ele.title;
        status.textContent = ele.completed;
        row.append(id, title, status);
        body.append(row);
    });
})
.catch((err)=>{
    console.log(err);
})