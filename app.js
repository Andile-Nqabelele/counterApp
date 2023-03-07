let increaseBtn = document.getElementById('increase');
let reduceBtn = document.getElementById('reduce');
let number = document.getElementById('number');
let counter = 0;

increaseBtn.addEventListener('click', () => {
    counter += 1;
    number.innerHTML = counter;
});

reduceBtn.addEventListener('click', () => {
    counter -= 1;
    number.innerHTML = counter;
    number.innerHTML.style.animation.name = 'spin';
});