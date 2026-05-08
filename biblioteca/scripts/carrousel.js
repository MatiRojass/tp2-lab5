//Obtener el <ul> del carrousel
const ul = document.querySelector(".carrousel");
//Obtener los elementos <li>
const items = document.querySelectorAll(".carrousel-item");

//obtener cantidad de elementos
const itemsCount = items.length;
//contador del indice del siguiente item a mostrar
let nextItem = 1;

function iniciar(){
    //se crea un interval, que ejecutara la funcion anonima cada 5 segundos
    setInterval(() => {
        //se obtiene el ancho que ocupa cada item
        const itemWidth = items[0].clientWidth;
        ul.scrollTo(nextItem * itemWidth, 0);
        nextItem = (nextItem+1) % itemsCount;
    }, 5000);
}

iniciar()
