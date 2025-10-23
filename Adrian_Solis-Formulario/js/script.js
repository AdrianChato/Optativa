document.addEventListener("DOMContentLoaded", function () {

    var provincias = [
        "Álava", "Albacete", "Alicante", "Almería", "Asturias", "Ávila", "Badajoz",
        "Barcelona", "Burgos", "Cáceres", "Cádiz", "Cantabria", "Castellón", "Ciudad Real",
        "Córdoba", "Cuenca", "Girona", "Granada", "Guadalajara", "Guipúzcoa", "Huelva",
        "Huesca", "Illes Balears", "Jaén", "La Coruña", "La Rioja", "Las Palmas", "León",
        "Lleida", "Lugo", "Madrid", "Málaga", "Murcia", "Navarra", "Ourense", "Palencia",
        "Pontevedra", "Salamanca", "Santa Cruz de Tenerife", "Segovia", "Sevilla", "Soria",
        "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya", "Zamora",
        "Zaragoza", "Ceuta", "Melilla"
    ];

    var selectProvincia = document.getElementById('provincia');
    for (var i = 0; i < provincias.length; i++) {
        var option = document.createElement('option');
        option.value = provincias[i];
        option.textContent = provincias[i];
        selectProvincia.appendChild(option);
    }

    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault();

        var errores = [];

        var nombre = document.getElementById("nombre").value.trim();
        var email = document.getElementById("email").value.trim();
        var telefono = document.getElementById("telefono").value.trim();
        var dni = document.getElementById("dni").value.trim().toUpperCase();
        var provincia = document.getElementById("provincia").value;
        var fechaNacimiento = document.getElementById("fechaNacimiento").value;
        var genero = document.querySelector('input[name="genero"]:checked');
        var password = document.getElementById("password").value.trim();
        var confirmPassword = document.getElementById("confirmPassword").value.trim();
        var terminos = document.getElementById("terminos").checked;

        if (nombre === "") {
            errores.push("El nombre es obligatorio.");
        }

        if (email === "") {
            errores.push("El correo es obligatorio.");
        } else if (!email.includes("@") || !email.includes(".")) {
            errores.push("El correo no es válido.");
        }

        if (telefono === "") {
            errores.push("El teléfono es obligatorio.");
        } else if (!/^\d{9,}$/.test(telefono)) {
            errores.push("El teléfono debe tener al menos 9 dígitos.");
        }

        if (dni === "") {
            errores.push("El DNI es obligatorio.");
        } else if (!/^\d{8}[A-Z]$/.test(dni)) {
            errores.push("El DNI debe tener 8 números y una letra (ej: 12345678Z).");
        }

        if (provincia === "") {
            errores.push("Selecciona una provincia.");
        }

        if (fechaNacimiento === "") {
            errores.push("La fecha de nacimiento es obligatoria.");
        } else {
            var hoy = new Date();
            var nacimiento = new Date(fechaNacimiento);
            var edad = hoy.getFullYear() - nacimiento.getFullYear();

            var mes = hoy.getMonth() - nacimiento.getMonth();
            if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
                edad--;
            }

            if (edad < 18) {
                errores.push("Debes tener al menos 18 años.");
            }
        }

        if (!genero) {
            errores.push("Selecciona tu género.");
        }

        if (password.length < 6) {
            errores.push("La contraseña debe tener al menos 6 caracteres.");
        }

        if (confirmPassword !== password) {
            errores.push("Las contraseñas no coinciden.");
        }

        if (!terminos) {
            errores.push("Debes aceptar los términos y condiciones.");
        }

        var divErrores = document.getElementById("errores");
        divErrores.innerHTML = "";

        if (errores.length > 0) {
            for (var j = 0; j < errores.length; j++) {
                var p = document.createElement("p");
                p.textContent = errores[j];
                divErrores.appendChild(p);
            }
        } else {
            alert("Formulario enviado con éxito :)");
            document.getElementById("miFormulario").reset();
        }
    });
});
