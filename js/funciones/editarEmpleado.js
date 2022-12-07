import Empleado from '../clases/Empleado.js';
import { codigoE, nameE, salaryE, formulario } from '../selectores/selectores.js';

const em = new Empleado();

document.addEventListener('DOMContentLoaded', async () => {
    const idUrl = new URLSearchParams(window.location.search);
    const idEmpleado = parseInt(idUrl.get('id'));
    const empleados = await em.obtenerEmpleado(idEmpleado);
    editar(empleados);
    formulario.addEventListener('submit', actualizar);
});


function editar(empleados) {
    const { id, name, salary } = empleados;
    codigoE.value = id;
    nameE.value = name
    salaryE.value = salary;
}

async function actualizar(e) {
    e.preventDefault();
    const objetoE = {
        id: codigoE.value,
        name: nameE.value,
        salary: salaryE.value,
    }

    if (validar(objetoE)) {
        alert('Todos los campos son obligatorios');
        return;
    }

    await em.editarEmpleado(objetoE);
    window.location.href = 'http://127.0.0.1:8887/index.html';
}

function validar(objetoE) {
    return !Object.values(objetoE).every(element => element !== '');
}

