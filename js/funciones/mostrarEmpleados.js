import Empleado from '../clases/Empleado.js'
import { tbody } from '../selectores/selectores.js';

const em = new Empleado();

export function cargarJson() {
    mostrarEmpleados();
};

async function mostrarEmpleados() {
    const empleados = await em.getEmpleados();
    empleados.forEach(empleado => {
        const { id, name, salary } = empleado;
        let tr = document.createElement("tr");
        tr.innerHTML = `
                 <td scope="col">${id}</td>
                 <td scope="col">${name}</td>
                 <td scope="col">${salary}</td>
                 <td scope="col"><button type="button"><a href="editarEmpleado.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a></button></td>
                 <td scope="col"><button type="button"><a href="detalleEmpleado.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Detalle</a></button></td>
                 <td scope="col"><button data-empleado="${id}" type="button" class="btn btn-outline-danger eliminar">Danger</button></td>
            `;
        tbody.appendChild(tr);
    });
}