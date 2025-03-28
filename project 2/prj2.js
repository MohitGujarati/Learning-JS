const form= document.querySelector('#form')


form.addEventListener('submit',function(e){
    console.log(e)
    e.preventDefault()

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results')

if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    results.innerHTML = "Please enter valid height and weight.";
}else{

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display BMI result
    let message = `Your BMI is ${bmi}. `;

    if (bmi < 18.6) {
      message += "You are underweight.";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message += "You have a normal weight.";
    } else {
      message += "You are overweight.";
    }

    results.innerHTML = message;
}
  
})
