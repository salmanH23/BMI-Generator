const form = document.querySelector('form');
const resultDisplay = document.querySelector('#results'); 

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    if (isNaN(height) || height <= 0) {
        resultDisplay.innerHTML = `Please provide a valid height.`;
    } else if (isNaN(weight) || weight <= 0) {
        resultDisplay.innerHTML = `Please provide a valid weight.`;
    } else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if (bmi < 18.6) {
            resultDisplay.innerHTML = `Underweight: Your BMI is <span>${bmi}</span>`;
        } else if (bmi >= 18.6 && bmi < 24.9) {
            resultDisplay.innerHTML = `Normal: Your BMI is <span>${bmi}</span>`;
        } else {
            resultDisplay.innerHTML = `Overweight: Your BMI is <span>${bmi}</span>`;
        }
    }
});
