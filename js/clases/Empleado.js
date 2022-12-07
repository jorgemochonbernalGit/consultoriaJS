class Empleado {
    constructor() {
        const cors ='https://cors-anywhere.herokuapp.com/'
        this.url =cors+'https://nodejs-mysql-restapi-production-d8bd.up.railway.app/api/employees';
        //this.url =  "http://localhost:3000/empleados/"
        //Lo cargo desde tu api hay que destacar que funciona fatal
        //mi api para cargarla tienes que descomentarla comentar la de arriba 
        //ir a la ruta de la app, consultaUsuarios y ejecutar json-server --watch empleados.json
        //el json se actualiza a la hora de que vas eliminando, editando etc
    }

    nuevoEmpleado = async empleado => {
        try {
            await fetch(this.url, {
                method: 'POST',
                body: JSON.stringify(empleado),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (er) {
            console.log(er);
        }
    }

    getEmpleados = async () => {
        try {
            const data = await fetch(this.url);
            const empleados = await data.json();
            return empleados;
        } catch (er) {
            console.log(er);
        }
    }

    obtenerEmpleado = async id => {
        try {
            const data = await fetch(`${this.url}/${id}`);
            const empleado = await data.json();
            return empleado;
        } catch (er) {
            console.log(er);
        }
    }


    editarEmpleado = async empleado => {
        try {
            await fetch(`${this.url}/${empleado.id}`, {
                method: 'PUT',
                body: JSON.stringify(empleado), 
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (er) {
            console.log(er);
        }
    }

    eliminarEmpleado = async id => {
        try {
            await fetch(`${this.url}/${id}`, {
                method: 'DELETE'
            });
        } catch (er) {
            console.log(er);
        }
    }
}

export default Empleado;