const randon = (min, max) => {
    return Math.floor(Math.random() * (max-min)) +  min;
}


console.log(randon(1, 151))









const fecthDAta = async () => {

    try{


        for (let i = 1; i < 10; i++) {
            console.log("for " + i);
         

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        const data = await res.json()
        console.log(data)
    

        const numero = document.getElementById('lugar');

        numero.innerHTML +=`<article class="card">
        <img src="./images/bg-pattern-card.svg" alt="imagen header card" class="card-header">
        <div class="card-body">
            <img id="imagen" src="${data.sprites.other.dream_world.front_default}" alt="imagen de vitoko" class="card-body-img" >
            <h1 class="card-body-title">
                <span id="${data.name}">${data.name}</span>
                <span id="${i}">${i}</span>
            </h1>            </div>

    </article>`

    }}

    catch (error) {
            console.log(error)
    }
}





fecthDAta()