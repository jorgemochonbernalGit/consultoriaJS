import Empleado from '../clases/Empleado.js';
import { codigoE, nameE, salaryE } from '../selectores/selectores.js';

const em = new Empleado();

document.addEventListener('DOMContentLoaded', async () => {
    console.log("asd");
    const idUrl = new URLSearchParams(window.location.search);
    const idEmpleado = parseInt(idUrl.get('id'));
    const empleados = await em.obtenerEmpleado(idEmpleado);
    const { id, name, salary } = empleados;
    codigoE.textContent = id;
    nameE.textContent = name
    salaryE.textContent = salary;
});
