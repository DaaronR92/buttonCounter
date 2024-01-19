const button = document.getElementById('myButton');
const counterDisplay = document.getElementById('counter');

let count = 0;

button.addEventListener('click', function() {
    count++;
    counterDisplay.textContent = count;
});

