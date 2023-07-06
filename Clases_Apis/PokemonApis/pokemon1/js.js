const randon = (min, max) => {
    return Math.floor(Math.random() * (max-min)) +  min;
}


console.log(randon(1, 151))









const fecthDAta = async (id) => {

    try{

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log(data)
        imagen(data,id)
    }

    catch (error) {
            console.log(error)
    }
}


const imagen = (pokemon,id) =>{

    console.log(pokemon)

    const numero = document.getElementById('numero');
    numero.textContent = id

    const nombrePokemon = document.getElementById('nombrePokemon');
    nombrePokemon.textContent = pokemon.name


    const imagen = document.getElementById('imagen');
    imagen.src = `${pokemon.sprites.other.dream_world.front_default}`;
}


const randonNumber = randon(1, 151)
fecthDAta(randonNumber)