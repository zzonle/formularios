document.addEventListener('DOMContentLoaded', function() {
    const formularioEditarUsuario = document.getElementById('formularioEditarUsuario');
    const botonEditarModal = document.getElementById('btn-editar'); 

    function agregarUsuario() {
        const usuarios = [
            {
                nombre: "Ana Pérez",
                correo: "ana.perez@ejemplo.cl",
                rut: "12.345.678-9",
                edad: 30
            },
            {
                nombre: "Juan González",
                correo: "juan.gonzalez@ejemplo.cl",
                rut: "19.876.543-2",
                edad: 25
            },
            {
                nombre: "María López",
                correo: "maria.lopez@ejemplo.cl",
                rut: "15.987.654-1",
                edad: 42
            },
            {
                nombre: "Pedro Silva",
                correo: "pedro.silva@ejemplo.cl",
                rut: "21.098.765-3",
                edad: 28
            },
            {
                nombre: "Sofía Rodríguez",
                correo: "sofia.rodriguez@ejemplo.cl",
                rut: "17.654.321-0",
                edad: 35
            },
            {
                nombre: "Carlos Martínez",
                correo: "carlos.martinez@ejemplo.cl",
                rut: "20.123.456-7",
                edad: 22
            },
            {
                nombre: "Elena Vargas",
                correo: "elena.vargas@ejemplo.cl",
                rut: "13.579.246-8",
                edad: 48
            },
            {
                nombre: "Javier Soto",
                correo: "javier.soto@ejemplo.cl",
                rut: "18.246.801-5",
                edad: 31
            },
            {
                nombre: "Daniela Flores",
                correo: "daniela.flores@ejemplo.cl",
                rut: "16.432.790-6",
                edad: 27
            },
            {
                nombre: "Andrés Castro",
                correo: "andres.castro@ejemplo.cl",
                rut: "22.918.374-k",
                edad: 39
            }
            ];

            const d = document;
            const tbodyUsuario = d.querySelector('#tablaUsuario tbody');
            usuarios.forEach(function(usuario){
                let fila = d.createElement('tr');
                let celdaNombre = d.createElement('td');
                let celdaCorreo = d.createElement('td');
                let celdaRut = d.createElement('td');
                let celdaEdad = d.createElement('td');
                let celdaAcciones = d.createElement('td');

                celdaNombre.innerText = usuario.nombre;
                celdaCorreo.innerText = usuario.correo;
                celdaRut.innerText = usuario.rut;
                celdaEdad.innerText = usuario.edad;
                celdaAcciones.innerHTML = `
                    <button type="button" class="btn btn-warning text-white" data-toggle="modal" data-target="#staticBackdrop">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button class="btn btn-danger">
                        <i class="fa-solid fa-trash"></i>
                    </button>`;

                fila.append(celdaNombre);
                fila.append(celdaCorreo);
                fila.append(celdaRut);
                fila.append(celdaEdad);
                fila.append(celdaAcciones);
                
                tbodyUsuario.append(fila);
            });
    };
    agregarUsuario();
    botonEditarModal.addEventListener('click', function(event) {
        event.preventDefault();

        let errores = {};
        let nombreInput = document.getElementById('editarNombre');
        let emailInput = document.getElementById('editarEmail');
        let edadInput = document.getElementById('editarEdad');
        let rutInput = document.getElementById('editarRut');

        let nombre = nombreInput.value;
        let email = emailInput.value;
        let edad = edadInput.value;
        let rut = rutInput.value;

        // Limpiar mensajes de error previos
        const errorElements = formularioEditarUsuario.querySelectorAll('.text-danger');
        errorElements.forEach(el => el.textContent = '');

        if (nombre == '') {
            errores['editarNombre'] = 'El campo nombre es obligatorio.';
        }

        if (email === '') {
            errores['editarEmail'] = 'El campo email es obligatorio.';
        }

        if (edad === '') {
            errores['editarEdad'] = 'El campo edad es obligatorio.';
        } else if (edad <= 0) {
            errores['editarEdad'] = 'El campo edad no puede quedar en 0';
        }

        if (rut === '') {
            errores['editarRut'] = 'El campo Rut es obligatorio.';
        }

        // Mostrar los errores debajo de cada input 
        if (Object.keys(errores).length > 0) {
            for (const campoId in errores) {
                const errorElement = document.getElementById(`error-${campoId}`);
                if (errorElement) {
                    errorElement.textContent = errores[campoId];
                }
            }
            alert('Por favor, ingrese todos los datos requeridos en el formulario de edición.');
            return;
        }

        // Si no hay errores, recopilar y mostrar los datos
        const formData = {
            nombre: nombre,
            email: email,
            rut: rut,
            edad: edad
        };

        console.log("Datos del formulario de edición:", formData);
        alert("Datos de edición mostrados en la consola.");

        /**Datos */

        const modalEditar = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        if (modalEditar) {
            modalEditar.hide();
        }
    });
});