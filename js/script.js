import { product } from "../Data/dataProduct.js";
import { cardComponent } from "../component/cardComponent.js";
// import { product } from "../Data/dataProduct.js";
// import { product } from "../Data/data.json";
console.log(product);
let renderArea = document.querySelector("#card-area")
const BASE_URL = "http://127.0.0.1:5500/Data/data.json"
fetch(BASE_URL).then((res) => res.json())
.then((Date)=>{
    Date.map((product) =>{
        renderArea.innerHTML += cardComponent(product)
    })
});

