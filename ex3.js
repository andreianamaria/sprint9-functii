// Scrieți o funcție pentru a găsi numărul de apariții al unei litere într-un șir
// Funcția letterCount() returnează numărul apariții al unei litere trimise ca parametru dintr-un șir dat.
// Input: sir = “Îmi place programarea” litera = “a”
// Output: 4


const letterCount = (string, letter) => {
    let count  = 0;
    for (let char of string) {
        if (char === letter) {
            count++;
        }
    }
    return count;
}

console.log(letterCount("Îmi place programarea", "a"));
console.log(letterCount("Vreau să lucrez în IT", "r"));