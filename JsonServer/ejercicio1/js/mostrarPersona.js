export default function mostrarPersona(data){
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