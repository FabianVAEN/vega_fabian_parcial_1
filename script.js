function generarFibonacci(n) {
    let secuencia = [0, 1]; 

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
        mensajeError.textContent = "Por favor ingrese un el número entre 1 y 50.";
        return;
    }

    mensajeError.textContent = "";

    const secuencia = generarFibonacci(cantidad);

    output.innerHTML = "";

    output.innerHTML = `<p>Secuencia de Fibonacci: ${secuencia.join(', ')}</p>`;
});

btnLimpiar.addEventListener("click", function() {
    output.innerHTML = "";  
    entrada.value = "";     
    mensajeError.textContent = "";  
});
