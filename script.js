const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const borderParticles = [];

function heart(t) {
    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    return { x, y };
}

// Crear partículas
for (let i = 0; i < 1000; i++) {

    const t = Math.random() * Math.PI * 2;
    const r = 0.3 + Math.random() * 0.7;

    const p = heart(t);

    const x = canvas.width / 2 + p.x * 26 * r;
    const y = canvas.height / 2 - p.y * 26 * r;

    particles.push({
        x: x,
        y: y,

        ox: x,
        oy: y,

        size: Math.random() * 2 + 1,

        angle: Math.random() * Math.PI * 2,

        speed: 0.005 + Math.random() * 0.02
    });
}

for (let i = 0; i < 1000; i++) {

    const t = (i / 120) * Math.PI * 2;

    const p = heart(t);

    borderParticles.push({

    x: canvas.width / 2 + p.x * 32,
    y: canvas.height / 2 - p.y * 32,

    size: 3,
    });
}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Movimiento suave
    particles.forEach(p => {

        p.angle += p.speed;

        p.x = p.ox + Math.cos(p.angle) * 10;
        p.y = p.oy + Math.sin(p.angle) * 10;

        ctx.beginPath();

        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fill();
    });

    // Conexiones tipo constelación
    for (let i = 0; i < particles.length; i++) {

        let conexiones = 0;

        for (let j = i + 1; j < particles.length; j++) {

            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;

            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 120) {

                ctx.beginPath();

                ctx.strokeStyle = "rgb(254, 254, 254)";
                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[i].x,
                    particles[i].y
                );

                ctx.lineTo(
                    particles[j].x,
                    particles[j].y
                );

                ctx.stroke();

                conexiones++;

                if (conexiones >= 3) break;
            }
        }
    }

    

    requestAnimationFrame(animate);
}

animate();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

borderParticles.forEach(p => {

    ctx.beginPath();

    ctx.fillStyle = "rgb(0, 0, 0)";

    ctx.arc(
        p.x,
        p.y,
        3,
        0,
        Math.PI * 2
    );

    ctx.fill();
});

for(let i = 0; i < borderParticles.length; i++){

    const next =
        borderParticles[
            (i + 1) % borderParticles.length
        ];

    ctx.beginPath();

    ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
    ctx.lineWidth = 2;

    ctx.moveTo(
        borderParticles[i].x,
        borderParticles[i].y
    );

    ctx.lineTo(
        next.x,
        next.y
    );

    ctx.stroke();
}
function irPagina2(){
    window.location.href = "pagina2.html";
}

function crearTulipan() {

    const tulipan = document.createElement("div");

    tulipan.innerHTML = "🌷";

    tulipan.style.position = "fixed";
    tulipan.style.left = Math.random() * window.innerWidth + "px";
    tulipan.style.top = "-50px";

    tulipan.style.fontSize =
        (20 + Math.random() * 20) + "px";

    tulipan.style.pointerEvents = "none";

    tulipan.style.zIndex = "2";

    document.body.appendChild(tulipan);

    let posY = -50;

    const velocidad = 1 + Math.random() * 2;

    const animacion = setInterval(() => {

        posY += velocidad;

        tulipan.style.top = posY + "px";

        if(posY > window.innerHeight){

            clearInterval(animacion);
            tulipan.remove();
        }

    }, 20);
}

setInterval(crearTulipan, 500);