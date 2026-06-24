function crearTulipan(){

    const tulipan = document.createElement("div");

    tulipan.classList.add("tulipan");

    tulipan.innerHTML = "🌷";

    tulipan.style.left =
        Math.random() * window.innerWidth + "px";

    tulipan.style.fontSize =
        (20 + Math.random() * 25) + "px";

    document.body.appendChild(tulipan);

    let y = -50;

    const velocidad =
        1 + Math.random() * 2;

    const movimiento =
        (Math.random() - 0.5) * 0.5;

    let x = parseFloat(tulipan.style.left);

    const animacion = setInterval(() => {

        y += velocidad;

        x += movimiento;

        tulipan.style.top = y + "px";
        tulipan.style.left = x + "px";

        if(y > window.innerHeight){

            clearInterval(animacion);
            tulipan.remove();
        }

    }, 16);
}

setInterval(crearTulipan, 700);

function abrirCarta(){

    const sobre = document.getElementById("sobre");
    const overlay = document.getElementById("overlay");

    // 1. primero abrir sobre
    sobre.classList.add("abierto");

    // 2. esperar animación del sobre
    setTimeout(() => {
        overlay.classList.add("mostrar");
    }, 800); // igual que la animación del sobre
}

function cerrarCarta(){

    const sobre = document.getElementById("sobre");
    const overlay = document.getElementById("overlay");

    // cerrar modal primero
    overlay.classList.remove("mostrar");

    // luego cerrar sobre
    setTimeout(() => {
        sobre.classList.remove("abierto");
    }, 300);
}