import Empleado from '../clases/Empleado.js';
import { codigoE, nameE, salaryE } from '../selectores/selectores.js';

const em = new Empleado();

document.addEventListener('DOMContentLoaded', async () => {
    formulario.addEventListener('submit', nuevo);
});

async function nuevo(e) {
    console.log('ww');
    e.preventDefault();
    const objetoE = {
        id: codigoE.value,
        name: nameE.value,
        salary: salaryE.value,
    }

    if( validar(objetoE) ) {
        alert('Todos los campos son obligatorios');
        return;
    }
    await em.nuevoEmpleado(objetoE);
    window.location.href = './index.html';
}

function validar(obj) {
    return !Object.values(obj).every(element => element !== '') ;
}
