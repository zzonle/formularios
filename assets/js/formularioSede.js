document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formSede');

    const sedes = [
            { id: 1, nombre_sede: 'INACAP Arica', id_region: 1, id_comuna: 1 },
            { id: 2, nombre_sede: 'INACAP Iquique', id_region: 1, id_comuna: 1 },
            { id: 3, nombre_sede: 'INACAP Calama', id_region: 1, id_comuna: 1 },
            { id: 4, nombre_sede: 'INACAP Antofagasta', id_region: 1, id_comuna: 1 },
            { id: 5, nombre_sede: 'INACAP Copiapó', id_region: 1, id_comuna: 1 },
            { id: 6, nombre_sede: 'INACAP La Serena', id_region: 1, id_comuna: 1 },
            { id: 7, nombre_sede: 'INACAP Valparaíso', id_region: 1, id_comuna: 1 },
            { id: 8, nombre_sede: 'INACAP Apoquindo', id_region: 1, id_comuna: 1 },
            { id: 9, nombre_sede: 'INACAP Maipú', id_region: 1, id_comuna: 1 },
            { id: 10, nombre_sede: 'INACAP Renca', id_region: 1, id_comuna: 1 },
            { id: 11, nombre_sede: 'INACAP Ñuñoa', id_region: 1, id_comuna: 1 },
            { id: 12, nombre_sede: 'INACAP Santiago Centro', id_region: 1, id_comuna: 1 },
            { id: 13, nombre_sede: 'INACAP Santiago Sur', id_region: 1, id_comuna: 1 },
            { id: 14, nombre_sede: 'INACAP La Granja', id_region: 1, id_comuna: 1 },
            { id: 15, nombre_sede: 'INACAP Puente Alto', id_region: 1, id_comuna: 1 },
            { id: 16, nombre_sede: 'INACAP Rancagua', id_region: 1, id_comuna: 1 },
            { id: 17, nombre_sede: 'INACAP Curicó', id_region: 1, id_comuna: 1 },
            { id: 18, nombre_sede: 'INACAP Talca', id_region: 1, id_comuna: 1 },
            { id: 19, nombre_sede: 'INACAP Chillán', id_region: 1, id_comuna: 1 },
            { id: 20, nombre_sede: 'INACAP Concepción-Talcahuano', id_region: 1, id_comuna: 1 },
            { id: 21, nombre_sede: 'INACAP San Pedro de la Paz', id_region: 1, id_comuna: 1 },
            { id: 22, nombre_sede: 'INACAP Los Ángeles', id_region: 1, id_comuna: 1 },
            { id: 23, nombre_sede: 'INACAP Temuco', id_region: 1, id_comuna: 1 },
            { id: 24, nombre_sede: 'INACAP Valdivia', id_region: 1, id_comuna: 1 },
            { id: 25, nombre_sede: 'INACAP Osorno', id_region: 1, id_comuna: 1 },
            { id: 26, nombre_sede: 'INACAP Puerto Montt', id_region: 1, id_comuna: 1 },
            { id: 27, nombre_sede: 'INACAP Coyhaique', id_region: 1, id_comuna: 1 },
            { id: 28, nombre_sede: 'INACAP Punta Arenas', id_region: 1, id_comuna: 1 },
        ];

    function AgregarSedes(nueva = null) {
        const d = document;
        const tbodySede = d.querySelector('#tablaSede tbody');
        
        if (nueva) {
            sedes.push(nueva);

            let fila = d.createElement('tr');
            let celdaId = d.createElement('td');
            let celdaNombre = d.createElement('td');
            let celdaRegion = d.createElement('td');
            let celdaComuna = d.createElement('td');
            let celdaAcciones = d.createElement('td');

            celdaId.innerText = nueva.id;
            celdaNombre.innerText = nueva.nombre_sede;
            celdaRegion.innerText = nueva.id_region;
            celdaComuna.innerText = nueva.id_comuna;
            celdaAcciones.innerHTML = `
                <button type="button" class="btn btn-warning text-white" data-toggle="modal" data-target="#staticBackdrop">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                </button>`;

            fila.append(celdaId, celdaNombre, celdaRegion, celdaComuna, celdaAcciones);
            tbodySede.append(fila);
        } else {
            // Agrega todas las sedes iniciales
            sedes.forEach(sede => AgregarSedes(sede));
        }
    }
    AgregarSedes();

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        let nombre_sede = document.getElementById('nombreSede').value;
        let id_region = document.getElementById('idRegion').value;
        let id_comuna = document.getElementById('idComuna').value;

        if (!nombre_sede || !id_region || !id_comuna) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        const nuevaSede = {
            id: Math.max(...sedes.map(s => s.id)) + 1,
            nombre_sede,
            id_region,
            id_comuna,
        };

        AgregarSedes(nuevaSede);
        formulario.reset();
    });
});