// кнопка Рассчитать становится активной при заполнении всех полей
let submitBtn = document.querySelector(".form__submit-button");
let clearBtn = document.querySelector(".form__reset-button");

let resultsBlock = document.querySelector("section");

let inputsGroup = document.querySelector(".inputs-group");
let age = document.querySelector('input[name="age"]');
let height = document.querySelector('input[name="height"]');
let weight = document.querySelector('input[name="weight"]');

let male = document.getElementById("#gender-male");

inputsGroup.addEventListener("input", function () {
  if (
    age.value.length > 0 &&
    height.value.length > 0 &&
    weight.value.length > 0
  ) {
    submitBtn.removeAttribute("disabled");
    clearBtn.removeAttribute("disabled");
  }
});

//по клику на кнопку Рассчитать появляется блок с информацией
// и/или обновлявляется
submitBtn.addEventListener("click", function () {
  resultsBlock.classList.remove("counter__result--hidden");
});

let maleN;
let maleNorm;

let femaleN;
let femaleNorm;

function calculateCalorieNorm(age, height, weight) {
  maleNorm = 10 * weight + (6, 25 * height) - 5 * age + 5;
  console.log(maleNorm);
  return maleNorm;
}

module.exports = calculateCalorieNorm();
//коэффициенты активности

// let arrRatio = {
//   minRatio: 1.2,
//   lowRatio: 1.375,
//   averageRatio: 1.55,
//   highRatio: 1.725,
//   realHighRatio: 1.9,
// };

// if (male == true) {
//   maleN = 10 * weight + (6, 25 * height) - 5 * age + 5;
// let arrRatio = {
//   for (let i = 0; i < arrRatio.length; i++) {
//     maleNorm = maleN * minRatio;
//   }

// } else {
//   femaleN = 10 * weight + (6, 25 * height) - 5 * age - 161;
//   femaleNorm = femaleN * minRatio;
// }

// поддержание веса

//формулы для набора и сброса веса
//для женщин
// let toGainWeightFemale = femaleNorm + (femaleNorm % 100) * 15;
// let toLoseWeightFemale = femaleNorm - (femaleNorm % 100) * 15;
// //для мужчин
// let toGainWeightMale = maleNorm + (maleNorm % 100) * 15;
// let toLoseWeightMale = maleNorm - (maleNorm % 100) * 15;
