import { cargarJson } from '../funciones/mostrarEmpleados.js';
import { alertaEliminar } from '../funciones/eliminarEmpleado.js';
import { tbody } from '../selectores/selectores.js';

class App {
    constructor() {
        this.eventos();
    }

    eventos() {
      document.addEventListener("DOMContentLoaded", cargarJson);
      tbody.addEventListener("click",alertaEliminar);
    }
}

export default App;