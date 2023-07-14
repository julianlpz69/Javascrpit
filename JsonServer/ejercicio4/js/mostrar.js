


//----------------------------Mostrar ---------------------------------------------


export function mostrarPersona(data){
    let tbodyRutas = document.getElementById("tbodyRutas");

    tbodyRutas.innerHTML = "";

    data.forEach((ruta)=>{
        console.log("si")
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


