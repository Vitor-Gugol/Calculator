function number(num) {
    let display = document.getElementById("display");
    let currentDisplay = display.innerHTML;

    // Verifica se o display está mostrando apenas 0 ou um resultado anterior
    if (currentDisplay === "0" || currentDisplay.includes("=")) {
        display.innerHTML = num;
    } else {
        // Concatena os números digitados como strings
        display.innerHTML += num;
    }
}

function clearDisplay() {
    document.getElementById("display").innerHTML = "0";
}

function calcular() {
    let display = document.getElementById("display").innerHTML;
    
    // Verifica se há algo no display antes de tentar calcular
    if(display) {
        document.getElementById("display").innerHTML = eval(display);
    }
}
