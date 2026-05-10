//Recuperar campos del formulario
const inpNombre = document.getElementById("nombre");
const inpCorreo = document.getElementById("correo");
const inpDni = document.getElementById("dni");
const inpFecha = document.getElementById("fecha");
//const inpSuge = document.getElementById("msj");

const form = document.getElementById("sugerencias");

form.addEventListener("submit", (e) => {
    /* ------- VALIDAR NOMBRE ------- */
    //validar nombre vacio
    if (inpNombre.value.trim() === "") {
        alert("El nombre no puede ser vacio");
        e.preventDefault()
        return;
    }
    //validar que el nombre sean solo letras
    const patronNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*$/;
    if (!patronNombre.test(inpNombre.value)) {
        alert("El nombre solo puede contener letras");
        e.preventDefault();
        return;
    }

    /* ------- VALIDAR DNI ------- */
    //validar dni vacio
    if(inpDni.value.trim() === ""){
        alert("El DNI no puede ser vacio");
        e.preventDefault();
        return;
    }
    //validar formato
    const patronDni = /^[1-9][0-9]{7}$/
    if(!patronDni.test(inpDni.value)){
        alert("Debe ingresar un DNI valido");
        e.preventDefault();
        return;
    }


    /* ------- VALIDAR CORREO ------- */
    const patronCorreo = /^[a-zA-Z0-9][a-zA-Z0-9-_.%$!]*[a-zA-Z0-9]@[a-z]{2,}\.[a-z]{2,3}(\.[a-z]{2,3})?$/
    if (inpCorreo.value.trim() === "") {
        alert("El correo no puede estar vacío");
        e.preventDefault();
        return;
    }
    //validar patron correo
    if(!patronCorreo.test(inpCorreo.value)){
        alert("Debe ingresar un correo valido");
        e.preventDefault();
        return;
    }

    /* ------- VALIDAR FECHA ------- */
    //validar fecha
    const patronFecha = /(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/[12][0-9]{3}/
    if(inpFecha.value.trim() === ""){
        alert("La fecha no puede ser vacia");
        e.preventDefault();
        return;
    }
    //Validar patron de fecha
    if(!patronFecha.test(inpFecha.value)){
        alert("Debe ingresar una fecha valida");
        e.preventDefault();
        return;
    }

    alert("Sugerencia enviada!")
})
