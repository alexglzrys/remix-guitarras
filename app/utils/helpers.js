export const formatearFecha = (fecha) => {
    const nueva_fecha = new Date(fecha);
    const opciones = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return nueva_fecha.toLocaleDateString('es-MX', opciones);
}