
let productsDiv = document.getElementById("cards");
fetch("https://fakestoreapi.com/products")
.then((res)=>{
    return res.json();
})
.then((res)=>{
    data = res;
    data.forEach((product)=>{
        showCards(product);
    });
})

function showCards(data){
    let product = document.createElement("div");
    let img = document.createElement("img");
    let title = document.createElement("h2");
    let price = document.createElement("h1");
    let description = document.createElement("h4");
    let rating = document.createElement("h2");

    img.src = data.image;
    title.textContent = data.title;
    price.textContent = "Price - $" + data.price;
    rating.textContent = "Rating - " + data.rating.rate;
    description.textContent = data.description;

    product.append(img,title,price,rating,description);
    productsDiv.append(product);
}

function search(){
    let element = document.getElementById("search").value;
    fetch("https://fakestoreapi.com/products")
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        data = res;
        productsDiv.innerHTML = "";
        data.forEach((product)=>{
            if(product.title.toLowerCase().includes(element.toLowerCase())){
                showCards(product);            
            }
        });
    })
    .catch((err)=>{
        console.log(err);
    })

}

