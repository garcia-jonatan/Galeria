const container = document.querySelector(".container")

const cachorros = [
    {name: "Blue", image: "/images/cachorro1.jpg"},
    {name: "Four", image: "/images/cachorro2.jpg"},
    {name: "Cool", image: "/images/cachorro3.jpg"},
    {name: "Theree", image: "/images/cachorro4.jpg"},
    {name: "Winner", image: "/images/cachorro5.jpg"},
    {name: "Two", image: "/images/cachorro6.jpg"},
    {name: "Max", image: "/images/cachorro7.jpg"},
    {name: "Stel", image: "/images/cachorro8.jpg"},
    {name: "Doker", image: "/images/cachorro9.jpg"},
]


const showCachorros = () =>{
    let output = ""

    cachorros.forEach(
    ({name,image}) => 
    (output += `
        <div class="card">
            <img class = "card-avatar" src=${image} />
            <h1 class = "card-title">${name}</h1>
        </div>
    `))
    container.innerHTML = output
}
document.addEventListener("DOMContentLoaded", showCachorros)

if("serviceWorker" in navigator){
    console.log("Si soporta SW")

    window.addEventListener("load", function(){
        this.navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service Woker registrado"))
            .catch(err => console.log("service Worker no registrado"))

    })
}