document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('miFormulario');

    function agregarProfesores() {
        const Profesores = [
            {
                nombre: "Juanita Perez",
                correo: "ana.perez@ejemplo.cl",
                rut: "12.345.678-9",
                edad: 30
            },
            {
                nombre: "Aquiles Baeza",
                correo: "aquiles.baeza@ejemplo.cl",
                rut: "19.876.543-2",
                edad: 25
            },
            {
                nombre: "Elsa Pallo",
                correo: "elsa.pallo@ejemplo.cl",
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
            }
        ];


            const d = document;
            const tbodyProfesor = d.querySelector('#tablaProfesores tbody');
            Profesores.forEach(function(usuario){
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
                
                tbodyProfesor.append(fila);
            });
    };
    agregarProfesores();
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        let errores = {};
        let nombre = document.getElementById('nombre');
        let email = document.getElementById('email');
        let edad = document.getElementById('edad');
        let rut = document.getElementById('rut');
        let carrera = document.getElementById('carrera');
        let asignatura = document.getElementById('asignatura');
        let descripcion = document.getElementById('descripcion');
        let sede = document.getElementById('sede');

        // Limpiar mensajes de error previos
        document.querySelectorAll('.text-danger').forEach(el => el.textContent = '');
        document.querySelectorAll('.form-control').forEach(el => el.style.borderColor = '');

        if (nombre.value == '') {
            errores['nombre'] = 'El campo nombre es obligatorio.';
            //nombre.style.borderColor = 'red';
        }

        if (email.value === '') {
            errores['email'] = 'El campo email es obligatorio.';
        }

        if (edad.value === '') {
            errores['edad'] = 'El campo edad es obligatorio.';
        }else if(edad <= 0){
            errores['edad'] = 'El campo edad no puede quedar en 0';
        }

        if (rut.value === '') {
            errores['rut'] = 'El campo Rut es obligatorio.';
        }

        if (carrera.value === '') {
            errores['carrera'] = 'La seleccion de Carrera es obligatoria';
        }

        if (asignatura.value === '') {
            errores['asignatura'] = 'La seleccion de asignatura es obligatoria'
        }

        if (descripcion.value === '') {
            errores['descripcion'] = 'El campo Descripcion es obligatorio';
        }

        if (sede.value === '') {
            errores['sede'] = 'La seleccion de sede es obligatoria';
        }

        // Mostrar los errores debajo de cada input
        if (Object.keys(errores).length > 0) {
            for (const campo in errores) {
                const errorElement = document.querySelector(`.error-${campo}`);
                if (errorElement) {
                    errorElement.textContent = errores[campo];
                }
            }
            alert('Por favor, ingrese todos los datos requeridos.');
            return; // Detener la ejecución si hay errores
        }

        // Si no hay errores, recopilar y mostrar los datos en la consola
        const formData = {
            nombre: nombre,
            email: email,
            rut: rut,
            edad: edad,
            carrera: carrera,
            asignatura: asignatura,
            descripcion: descripcion,
            sede: sede
        };

        console.log("Datos del formulario:", formData);

        alert("Formulario enviado (datos mostrados en la consola)");



        // Opcional: Puedes resetear el formulario
        formulario.reset();
    });
});