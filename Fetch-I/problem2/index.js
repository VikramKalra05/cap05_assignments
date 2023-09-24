let container = document.getElementById("cont");

function fetchData(){
    fetch("https://reqres.in/api/users")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        data = res.data;
        data.forEach((ele) => {
            let block = document.createElement("div");
            let id = document.createElement("h1");
            let name = document.createElement("h4");
            let email = document.createElement("h4");
            let avatar = document.createElement("img");

            id.textContent = ele.id;
            name.textContent = "Name: " + ele.first_name, ele.last_name;
            email.textContent = "Email: " + ele.email;
            avatar.src = ele.avatar;

            block.append(id,name,email,avatar);
            cont.append(block)
        });
    })
    .catch((err)=>{
        console.log(err);
    })
}