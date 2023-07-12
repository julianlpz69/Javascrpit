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

await fetch(`http://localhost:3000/persona`,config).json();

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
    let accion = e.target.dataset;
    console.log(e.target.dataset)

        getPersona();
    
});

getPersona()