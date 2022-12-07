import Empleado from '../clases/Empleado.js'

const em = new Empleado();

export async function alertaEliminar(e) {
    if( e.target.classList.contains('eliminar') ) {
        const empleadoId = parseInt(e.target.dataset.empleado);
        console.log(empleadoId);
        const confirmar = confirm('¿Deseas eliminar este empleado?');
        if(confirmar) {
            await em.eliminarEmpleado(empleadoId);
            return location.reload(true);
        }
    }
    return;
}