const parrafos = document.querySelectorAll("p.hidden");
const verMasBtn = document.getElementById("ver-mas");
const verMenosBtn = document.getElementById("ver-menos");

verMasBtn.addEventListener("click", ()=>{
    console.log("click")
    parrafos.forEach((p) => {
        p.classList.remove("hidden");
    })
    verMasBtn.classList.add("hidden");
    verMenosBtn.classList.remove("hidden");
})

verMenosBtn.addEventListener("click", ()=>{
    console.log("click")
    parrafos.forEach((p) => {
        p.classList.add("hidden");
    })
    verMasBtn.classList.remove("hidden");
    verMenosBtn.classList.add("hidden");
})




