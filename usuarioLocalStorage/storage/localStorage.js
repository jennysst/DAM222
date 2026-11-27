
export function guardar(clave, valor) {
    const valorJson = JSON.stringify(valor)
    localStorage.setItem(clave, valorJson);
}

export function obtener(clave) {
    const valorJson = localStorage.getItem(clave)
    if(valorJson == null){
        return null;
    } else {
        return JSON.parse(valorJson)
    }
}

export function eliminar(clave) {
    localStorage.removeItem(clave)
}