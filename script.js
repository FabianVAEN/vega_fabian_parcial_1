function generarFibonacci(n) {
    if (n === 1) return [1];
    if (n === 2) return [1, 1];

    let secuencia = [1, 1]; // Comenzar con F(1)=1, F(2)=1

    for (let i = 2; i < n; i++) {
        secuencia.push(secuencia[i - 1] + secuencia[i - 2]);
    }

    return secuencia;
}

const btnGenerar = document.getElementById("btnGenerar");
const btnLimpiar = document.getElementById("btnLimpiar");
const output = document.getElementById("output");
const entrada = document.getElementById("entrada");
const mensajeError = document.getElementById("mensajeError")


btnGenerar.addEventListener("click", function() {
    const cantidad = parseInt(entrada.value); 


    if (cantidad < 1 || cantidad > 50) {
        mensajeError.textContent = "Por favor ingrese un número entre 1 y 50.";
        return;
    }

    mensajeError.textContent = "";

    const secuencia = generarFibonacci(cantidad);

    output.innerHTML = "";

    secuencia.forEach((valor, index) => {

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        let formula = "";
        if (index === 0 || index === 1) {
            formula = `F(${index + 1}) = ${valor}`; 
            formula = `F(${index + 1}) = F(${index}) + F(${index - 1}) = ${secuencia[index - 1]} + ${secuencia[index - 2]} = ${valor}`;
        }

        const esPar = valor % 2 === 0 ? "par" : "impar";

        tarjeta.classList.add(esPar);

        tarjeta.innerHTML = `
            <h3>Índice: F(${index + 1})</h3>
            <p><strong>Valor:</strong> ${valor}</p>
            <p><strong>Fórmula:</strong> ${formula}</p>
        `;
        output.appendChild(tarjeta);
    });
});

btnLimpiar.addEventListener("click", function() {
    output.innerHTML = "";  
    entrada.value = "";     
    mensajeError.textContent = "";  
});