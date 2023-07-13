let form = document.querySelector('#form');
let btnListar = document.querySelector('#btnListar');
let tbodyPersonas = document.querySelector('#tbodyPersonas');
let formActualizar = document.querySelector('#formActualizar');
const URL = "C"
const headers = new Headers ({'Content-Type': 'application/json'});

















// --------------------------- Agregar -----------------------------------------


form.addEventListener('submit', (e) => {
    e.preventDefault();



    let data = Object.fromEntries(new FormData(e.target));
    console.log(data)
    
    postPersonas(data)

});

async function postPersonas(data,){
    let config = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }

await fetch(`http://localhost:3000/persona`,config);

}

// --------------------------- Agregar -----------------------------------------


//----------------------------Mostrar ---------------------------------------------


function mostrarPersona(data){
    let tbodyPersonas = document.querySelector("#tbodyPersonas");

    tbodyPersonas.innerHTML = "";

    data.forEach((persona)=>{
        let tr = document.createElement("tr");
        tr.setAttribute("id",`${persona.id}`);
        tr.setAttribute("class","tr");
        tr.innerHTML = `
        <td>${persona.id}</td>
        <td>${persona.nombre}</td>
        <td>${persona.edad}</td>
        <td>${persona.sexo}</td>
        <td>
            <input type="submit" data-accion="Eliminar" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
            <input type="button" data-bs-toggle="modal" data-bs-target="#modalModificar"  data-accion="Actualizar" value="Actualizar" class="btn-guardar bg-warning border-0 rounded bg-secondary px-2">
        </td>
        `;

        tbodyPersonas.appendChild(tr);
    });
}


async function getPersona(){
    let data = await (await fetch(`http://localhost:3000/persona`)).json();
    
    mostrarPersona(data);
}



btnListar.addEventListener('click', async (e) => {
    e.preventDefault();
        getPersona();
});

getPersona()




//-------------------------------------------------DELETE ----------------------------------------------------



async function deletePersonas(tr,id){

    let data = Object.fromEntries(new FormData(tr.target));

    let config = {
        method: 'DELETE',
        headers: headers
    };

    let del = await(await fetch(`http://localhost:3000/persona/${id}`,config)).json();
}


async function ActualizarPersona(data,id) {

    let config = {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify(data)
    }

    let act = await (await fetch(`http://localhost:3000/persona/${id}`,config)).json();
}


tbodyPersonas.addEventListener('click', (e) => {
    e.preventDefault();

    let tr = e.target.closest("tr");
    let id = tr.id;

    let accion = e.target.dataset.accion;
    
    if(accion === "Eliminar"){
        deletePersonas(tr,id);
        tr.remove();
    }
    else if(accion === "Actualizar"){
      formActualizar.addEventListener("submit", (e) => {
        e.preventDefault();

        let data = Object.fromEntries(new FormData(e.target));
        console.log(data)

        ActualizarPersona(data,id);
      });
    }
});








