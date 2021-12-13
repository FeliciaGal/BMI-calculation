"use strict";

// bmi = weight / height^2
//bmi<18,5 => underweight
//bmi intre 18,5 si 25 => normal weight
//bmi intre 25 si 30 => overweight
//bmi>30 => obesity

const weightInput = document.querySelector("#tex1");
const heightInput = document.querySelector("#text2");
const btnResult = document.querySelector("#btn");
const check = document.querySelector("#result");

function calcBMi() {
  const weight = weightInput.value;
  const height = heightInput.value;

  let BMI = weight / (height * 2);
  let result;
  if (BMI < 18.5) {
    result = "underweight";
  } else if (BMI > 18.5 && BMI < 25) {
    result = "normal weight";
  } else if (BMI > 25 && BMI < 30) {
    result = "overweight";
  } else {
    result = "obesity";
  }

  check.innerText = result;
}

btnResult.addEventListener("click", calcBMi);
