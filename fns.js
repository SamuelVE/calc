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

function res(a, b) {
	return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
    if (b === 0) {
       return "Error: div by 0";
    }
    if (isNaN(a) || isNaN(b)) {
        return "Error: por favor ingrese numeros";
    }
    return a / b;
}

function pow(a, b) {
	return a ** b;
}

module.exports = fns;
