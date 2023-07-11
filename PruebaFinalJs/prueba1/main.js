
const lugar = document.getElementById("lugar")
const lugarMenu = document.getElementById("lugarMenu")


const fecthDAta = async (alimento) => {

    try{

        const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
        const data = await res.json()
        console.log(data)
        alimento(data)
        data.meals.forEach(function(elemento, indice) {
        
        lugar.innerHTML+=`<option value="${indice}" >${indice+1} ${elemento.strMeal}</option>`})
    }

    catch (error) {
            console.log(error)
    }
}



function alimento (data){
    console.log(data)

    if(lugar.value == "nada"){
        console.log("Ds")
    }

    else{

        const id = lugar.value
        console.log(data.meals[id].strMealThumb)

        lugarMenu.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data.meals[id].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${data.meals[id].strMeal}</h5>
          <p class="card-text">Ingrediente 1 : ${data.meals[id].strIngredient1}</p>
          <p class="card-text">Ingrediente 2 : ${data.meals[id].strIngredient2}</p>
          <p class="card-text">Ciudad ${data.meals[id].strArea}</p>
          <a href="#" class="btn btn-primary">Hacer Pedido</a>
        </div>
      </div>`

    }

}

fecthDAta(alimento)