const frasesMotivacionales = {
    tristeza: [
        { id: "1", cita: "No importa cuántas veces caigas, sino cuántas veces te levantes." },
        { id: "2", cita: "La tristeza es solo un paso en el camino hacia la felicidad." },
        { id: "3", cita: "Todo es temporal, incluso la tristeza más profunda." }
    ],
    soledad: [
        { id: "1", cita: "La soledad te enseña a conocerte a ti mismo." },
        { id: "2", cita: "A veces necesitamos estar solos para entender quiénes somos realmente." },
        { id: "3", cita: "La soledad es una oportunidad para crecer interiormente." }
    ],
    fracaso: [
        { id: "1", cita: "El fracaso es el trampolín hacia el éxito." },
        { id: "2", cita: "No hay fracaso, solo lecciones aprendidas." },
        { id: "3", cita: "Los grandes éxitos nacen de grandes fracasos." }
    ],
    miedo: [
        { id: "1", cita: "El miedo es solo una ilusión que nos impide avanzar." },
        { id: "2", cita: "Atrévete a enfrentar tus miedos para alcanzar tus sueños." },
        { id: "3", cita: "El mayor obstáculo en la vida es el miedo al fracaso." }
    ],
    desesperanza: [
        { id: "1", cita: "No pierdas la esperanza, siempre hay una salida." },
        { id: "2", cita: "La desesperanza es solo una prueba de tu fortaleza interior." },
        { id: "3", cita: "Cada día es una nueva oportunidad para cambiar tu vida." }
    ],
    inseguridad: [
        { id: "1", cita: "Confía en ti mismo y el mundo confiará en ti." },
        { id: "2", cita: "La inseguridad es solo un estado mental que puedes superar." },
        { id: "3", cita: "La verdadera seguridad viene de aceptarte a ti mismo tal como eres." }
    ],
    frustracion: [
        { id: "1", cita: "La frustración es solo temporal, la perseverancia es eterna." },
        { id: "2", cita: "No te frustres por los obstáculos, son parte del camino hacia el éxito." },
        { id: "3", cita: "La verdadera grandeza viene de superar la frustración una y otra vez." }
    ]
};


document.getElementById("tristeza").addEventListener("click", cambiarFrases);
document.getElementById("soledad").addEventListener("click", cambiarFrases);
document.getElementById("fracaso").addEventListener("click", cambiarFrases);
document.getElementById("miedo").addEventListener("click", cambiarFrases);
document.getElementById("desesperanza").addEventListener("click", cambiarFrases);
document.getElementById("inseguridad").addEventListener("click", cambiarFrases);
document.getElementById("frustracion").addEventListener("click", cambiarFrases);

function cambiarFrases(event) {
    const botonId = event.target.id;
    const frases = frasesMotivacionales[botonId];


    if (frases && frases.length > 0) {
        const frasesContainer = document.getElementById("frases");

        frasesContainer.innerHTML = "";

        const indiceAleatorio = Math.floor(Math.random() * frases.length);
        const fraseAleatoria = frases[indiceAleatorio].cita;


        if (frasesContainer) {
            let template = `<p>${fraseAleatoria}</p>`;
            frasesContainer.innerHTML = template;
        } else {
            console.log("No se encontró el contenedor de frases.");
        }
    }
}
