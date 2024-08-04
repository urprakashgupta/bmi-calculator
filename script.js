const form = document.querySelector("form");
// const weightGuide = document.querySelector("#weight-guide");
form.addEventListener('submit' , function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseFloat(document.querySelector("#weight").value);
    const results = document.querySelector('#results');

    //validation logic 

    if (height === ' ' || height < 0 || isNaN(height)) {
        results.innerHTML = `please enter valid height ${height}`;
    }else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `please enter valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // results.innerHTML = `<span> Your BMI is : ${bmi}</span>`;

        //show the results
        if (bmi < 18.6) {
            results.innerHTML = `<span> Your BMI is : ${bmi} So You Are Under Weight .</span>`;
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<span> Your BMI is : ${bmi} So You Are Normal Range .</span>`;
        } else {
            results.innerHTML = `<span> Your BMI is : ${bmi} So You Are Over Weight .</span>`;
        }
        
    }
});
