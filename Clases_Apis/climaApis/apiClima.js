

const fecthDAta = async () => {

    try{

        const res = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=4&lon=72&appid=2f76fc33907e98eb542e3a1a90d01702")
        const data = await res.json()
        console.log(data)
        imagen(data)
    }

    catch (error) {
            console.log(error)
    }
}


const imagen = (clima) =>{

    console.log(clima)

    const numero = document.getElementById('cordenadas');
    numero.textContent = " lon " + clima.coord.lon + " lat " + `${clima.coord.lat}`

    const nombrePokemon = document.getElementById('temperatu');
    nombrePokemon.textContent = clima.weather[0].description

    const humedad = document.getElementById('humedad');
    humedad.textContent = clima.main.humidity


}



fecthDAta()