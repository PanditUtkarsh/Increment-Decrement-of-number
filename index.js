var number = 0;
var results = document.querySelector('.result');
const incre = () => {
    number = number + 1;
    results.innerHTML = number;
}
const decre = () => {
    if (number!==0) {
        number = number - 1;
        results.innerHTML = number;
    }
    else
    {
        results.innerHTML = 0;
    }
}