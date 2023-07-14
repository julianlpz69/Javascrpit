


//----------------------------Mostrar ---------------------------------------------


export function mostrarPersona(data){
    let tbodyRutas = document.getElementById("tbodyRutas");

    tbodyRutas.innerHTML = "";

    data.forEach((ruta)=>{
        let tr = document.createElement("tr");
        tr.setAttribute("id",`${ruta.id}`);
        tr.setAttribute("class","tr");
        tr.innerHTML = `
        <td class="text-center">${ruta.id}</td>
        <td class="text-center">${ruta.NomRuta}</td>
        <td class="text-center">
            <button type="button" data-id="${ruta.id}" class="btn-eliminar bg-danger border-0 rounded bg-secondary px-2 w-25 fw-bold">Eliminar</button>
            <button type="button" data-accion="Actualizar" data-bs-toggle="modal" data-bs-target="#rutaEditar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2 w-25 fw-bold">Editar</button>
        </td>
        `;

        tbodyRutas.appendChild(tr);
    });
}


export function mostrarOpciones(data){
    let lugarPuntos = document.getElementById("lugarOpcionesRutas");
    
    lugarPuntos.innerHTML = "<option value='nada' >Seleciona una opcion</option>";

    

    data.forEach((ruta)=>{
        let tr = document.createElement("option");
        tr.setAttribute("value",`${ruta.id}`);
        tr.setAttribute("id",`${ruta.NomRuta}`);
        tr.innerHTML = `${ruta.id} ${ruta.NomRuta}`;

        lugarPuntos.appendChild(tr);
    });
}


export async function mostrarPuntos(){

    let lugarPuntos = document.getElementById("lugarPuntos");
    let ids = document.getElementById("lugarOpcionesRutas");



    let data = await (await fetch(`http://localhost:3000/Puntos`)).json();
    let nombre = await (await fetch(`http://localhost:3000/Rutas/${ids.value}`)).json();


    if (ids.value == "nada"){
        alert("Seleciona una opcion Valida")
    }

    lugarPuntos.innerHTML = "";



    lugarPuntos.innerHTML += `<h1 class="">${nombre.NomRuta}</h1>
    <div>             
    <button type="button" data-accion="" data-bs-toggle="modal" data-bs-target="#agregarPunto" class="btn-guardar w-25 bg-warning border-0 rounded bg-secondary fw-bold">Agregar Punto</button>
    </div>
    `

    data.forEach((ruta)=>{

        if (ruta.RutaId == ids.value){
            console.log(ruta.RutaId)


        const lugarPuntos = document.getElementById('lugarPuntos');

        lugarPuntos.innerHTML +=`
        <div id="${ruta.id}" class="card m-3" style="width: 18rem;">
        <img class="card-img-top" src="${ruta.Imagen}" alt="Card image cap">
        <div class="card-body text-center">
          <h5 class="card-title mt-3">${ruta.NomPuntos}</h5>
          <br>
           <button type="button" data-id="${ruta.id}" class="btn- bg-danger border-0 rounded bg-secondary  w-100 fw-bold mb-3">Eliminar</button>
        
            <button type="button" data-accion="" data-bs-toggle="modal" data-bs-target="#rutaEditar" class="btn-guardar bg-warning border-0 rounded bg-secondary w-100 fw-bold">Editar</button>

        </div>
      </div>`;

;}

        else{
            console.log("no")
        }
    });
}
