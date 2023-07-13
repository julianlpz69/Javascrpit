let formRuta = document.getElementById("formRuta");
const headers = new Headers ({'Content-Type': 'application/json'});




// --------------------------- Agregar Ruta -----------------------------------------


formRuta.addEventListener('submit', (e) => {
    e.preventDefault();



    let data = {
        "Id": 5,
        "NomRuta": "Cafetera"
    }

    console.log(e.target)
    console.log(data)
    
    postPersonas(data)

});

async function postPersonas(data){

    try{
        let config = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
        await fetch(`http://localhost:3000/Rutas`,config)
    }
    
    catch(err){
        console.log(err)
    }
    }