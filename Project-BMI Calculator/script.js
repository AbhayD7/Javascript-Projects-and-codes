const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height ${height}`;
    result.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight ${weight}`;
    result.style.color = "red";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    const weightGuide = document.querySelector("#weight-guide");
    if (bmi >= 0 && bmi < 18.6) {
      weightGuide.innerHTML = `BMI ${bmi}, You are Under Weight`;
      weightGuide.style.color = "red";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightGuide.innerHTML = `BMI ${bmi}, Well done `;
      weightGuide.style.color = "green";
    } else {
      weightGuide.innerHTML = `BMI ${bmi}, You are over Weight`;
      weightGuide.style.color = "red";
    }
  }
});
