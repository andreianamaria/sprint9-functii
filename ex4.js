// Scrieți o funcție pentru a adăuga numere nelimitate
// Funcția addNumber() returnează suma tuturor numerelor transmise ca argumente funcției. 
// Numărul de argumente nu este definit. Se poate transmite un număr nelimitat de numere.

const addNumber = (...args) => {
    let sum = 0;
    for (let elem of args) {
        sum += elem;
    }
    return sum;
}

console.log(addNumber(1, 2, 3));
console.log(addNumber(1, 2, 3, 4, 5));