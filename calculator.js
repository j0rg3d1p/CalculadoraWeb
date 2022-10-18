const op1 = document.getElementById("operando1")
const txtOperador = document.getElementById("operador")
const op2 = document.getElementById("operando2")
const btnCalcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)

function calcular(){
    const operador = txtOperador.value
    const operando1 = parseFloat(op1.value)
    const operando2 = parseFloat(op2.value)

    if (operador == "+" || operador == "-" || operador == "*" || operador == "/" ){
        let res = 9
        switch(operador){
            case "+": 
                res = operando1 + operando2
                break;
            case "-":
                res = operando1 - operando2
                break;
            case "*":
                res = operando1 * operando2
                break;
            default:
                res = operando1 / operando2
                break;
        }

        resultado.innerText = "= " + res
    }
    else{
    resultado.style = "color:red"
    resultado.innerText = "Operador incorrecto"
    }
}
