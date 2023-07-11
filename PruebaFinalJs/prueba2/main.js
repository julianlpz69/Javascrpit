
const lugar = document.getElementById("lugar")
const lugarMenu = document.getElementById("lugarMenu")


const fecthDAta = async (alimento) => {

    try{

        const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        const data = await res.json()
        console.log(data)
        data.categories.forEach(function(elemento, indice) {
        
        lugar.innerHTML+=`<option value="${elemento.strCategory}" >${indice+1} ${elemento.strCategory}</option>`})
    }

    catch (error) {
            console.log(error)
    }
}




async function alimento (){



    if(lugar.value == "nada"){
        console.log("Ds")
    }

    else{
        lugarMenu.innerHTML = ""
        const id = lugar.value

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
        const data = await res.json()

        console.log(data)
        lugarMenu.innerHTML = ""

        data.meals.forEach(function(elemento, indice) {
            
            console.log(elemento)
            console.log(indice)

            lugarMenu.innerHTML += `<div class="card col-6 m-5" style="width: 18rem;">
        <img src="${elemento.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${elemento.strMeal}</h5>
          <p class="card-text">Indice : ${indice+1}</p>
          <a href="#" class="btn btn-primary">Hacer Pedido</a>
        </div>
      </div>`


        })
    
    
    }}

fecthDAta()