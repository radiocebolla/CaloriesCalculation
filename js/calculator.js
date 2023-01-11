let norm;

function calculateCalorieNorm(age, height, weight, gender, activityLevel) {
  let arrRatio = {
    min: 1.2,
    low: 1.375,
    average: 1.55,
    high: 1.725,
    huge: 1.9,
  };

  ratio = arrRatio[activityLevel];
  if (gender === "male") {
    norm = 10 * weight + (6, 25 * height) - 5 * age + 5;
  } else {
    norm = 10 * weight + (6, 25 * height) - 5 * age - 161;
  }

  return norm * ratio;
}

module.exports = calculateCalorieNorm;
