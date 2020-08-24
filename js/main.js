const compose = (...functions) => (data) =>
  functions.reduceRight((value, func) => func(value), data);

const $DESCRIPTION = document.getElementById("description");
const $CALORIES = document.getElementById("calories");
const $CARBS = document.getElementById("carbs");
const $PROTEIN = document.getElementById("protein");

//Function for validate a empty input if isnt empty add to the list
const validateInputs = () => {
  $DESCRIPTION.value ? "" : $DESCRIPTION.classList.add("is-invalid");
  $CALORIES.value ? "" : $CALORIES.classList.add("is-invalid");
  $CARBS.value ? "" : $CARBS.classList.add("is-invalid");
  $PROTEIN.value ? "" : $PROTEIN.classList.add("is-invalid");

  if ($DESCRIPTION.value && $CALORIES.value && $CARBS.value && $PROTEIN.value) {
    console.log("Ok");
  }
};

//Remove the invalid class when the input isnt empty
$DESCRIPTION.addEventListener("keypress", () =>
  $DESCRIPTION.classList.remove("is-invalid")
);
$CALORIES.addEventListener("keypress", () =>
  $CALORIES.classList.remove("is-invalid")
);
$CARBS.addEventListener("keypress", () =>
  $CARBS.classList.remove("is-invalid")
);
$PROTEIN.addEventListener("keypress", () =>
  $PROTEIN.classList.remove("is-invalid")
);
