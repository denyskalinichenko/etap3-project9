const possibilities = [];
const h1 = document.querySelector('h1');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnAdvice = document.querySelector('.showAdvice');
const btnOptions = document.querySelector('.showOptions');


const addPsblt = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    // pobieranie znaczenia z input
    const psblt = input.value;
    // dodanie elementu
    possibilities.push(psblt);
    // czyszczenia pola input
    input.value = "";
}

const cleanPsblt = () => {
    // czyszczenia tablicy "possibilities"
    possibilities.splice(0, possibilities.length);
}

const showAdvice = () => {
    // randomne dodawanie "rady"
    const index = Math.floor(Math.random() * possibilities.length);
    h1.textContent = possibilities[index];
}
const showOptions = () => {
    // pokazuje wszystkie wprowadzone opcji
    h1.textContent = possibilities;
}

btnAdd.addEventListener("click", addPsblt);
btnClean.addEventListener("click", cleanPsblt);
btnAdvice.addEventListener("click", showAdvice);
btnOptions.addEventListener("click", showOptions);