const contactosUL = document.getElementById("lista-contactos");
const items = document.querySelectorAll("li.item-contacto");

//Funcion que se encarga de crear el elemento <li> con las inforamcion de los parametros
function crearItem(nombre, correo){
    //crear <li> de la lista de contactos
    const li = document.createElement("li");
    li.className = "item-contacto flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-zinc-100";

    //Crear elemento <img>
    const img = document.createElement("img");
    img.src = "./resources/images/usuario.webp";
    img.className = "size-16 rounded-full object-cover bg-zinc-200";

    //crear div donde esta la info del contacto
    const div = document.createElement("div");
    div.className = "flex flex-col";

    //crear span con la nommbre del contactos
    const spanNombre = document.createElement("span");
    spanNombre.className = "text-lg font-bold text-[#5d4037]";
    spanNombre.textContent = nombre;
    //crear span con correo del contacto
    const spanCorreo = document.createElement("span");
    spanCorreo.className = "text-sm text-gray-600";
    spanCorreo.textContent = correo;

    //agregar los span al div
    div.appendChild(spanNombre);
    div.appendChild(spanCorreo);

    //crear boton eliminar
    const boton = document.createElement("button");
    boton.textContent = "X";
    boton.className = "boton-eliminar";

    //Agregar los elementos al li
    li.appendChild(img);
    li.appendChild(div);
    li.appendChild(boton);

    return li;
}

function agregarFuncionEliminar(item){
    const botonEliminar = item.querySelector("button.boton-eliminar");
    botonEliminar.addEventListener("click", () =>{
        item.remove();
    })
}

items.forEach(agregarFuncionEliminar)


/* LOGICA FORMULARIO */
const form = document.getElementById("formulario-agregar");
const inpNombre = document.getElementById("inpNombre");
const inpCorreo = document.getElementById("inpCorreo");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(inpNombre);
    console.log(inpCorreo);
    const nombre = inpNombre.value;
    const correo = inpCorreo.value;
    
    const item = crearItem(nombre, correo);
    agregarFuncionEliminar(item);

    contactosUL.appendChild(item);
})