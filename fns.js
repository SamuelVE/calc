const fns = {
    sum,
    res,
    mul,
    div,
    pow,
};

function sum(a, b) {
    return a + b;
}

// Completar estas funciones

function res(a, b) {}

function mul(a, b) {}

function div(a, b) {
    if (b === 0) {
       return "Error: no es posible la division por cero";
    }
    if (isNaN(a) || isNaN(b)) {
        return "Error: por favor ingrese numeros";
    }
    return a / b;
}

function pow(a, b) {}

module.exports = fns;
