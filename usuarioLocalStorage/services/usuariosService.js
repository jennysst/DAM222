import { guardar, obtener } from "../storage/localStorage";

export async function guardarInput(nombre, edad) {
    if (!nombre.trim() || !edad.trim()) {
        window.alert("Complete los espacios");
        return false;
    } else if (!isNaN(nombre)) {
        window.alert("El nombre no puede ser un numero");
        return false;
    } else if (isNaN(edad)) {
        window.alert("La edad debe ser un numero");
        return false;
    } else {
        return true;
    }

}

export async function guardarUsuario(nombre, edad) {
    const validacion = await guardarInput(nombre, edad);
    if (validacion) {
        let id
        do{
            id = Math.floor(Math.random() * 100)
        } while(obtener(id))

        const nuevoUsuario = {
            nombre: nombre,
            edad: edad,
        }
        guardar(id, nuevoUsuario)
        window.alert("Se guardo el usuario")
    }

}

export async function listaUsuarios() {
    const claves = Object.keys(localStorage);

    const lista = claves.map(clave => {
        return {
            id: clave,
            ...JSON.parse(localStorage.getItem(clave))
        }
    });

    return lista
}