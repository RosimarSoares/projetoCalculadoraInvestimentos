import { generateReturnsArray } from "./src/investmentGoals";

const form = document.getElementById("investiment-form");
const clearFormButton = document.getElementById("clear-form");
//const calculateButton = document.getElementById("calculate-results");

function renderProgression(event) {
  event.preventDefault();
  if (document.querySelector(".error")) {
    return;
  }
  //const startingAmount = Number(form["startingAmount"].value);
  const startingAmount = Number(
    document.getElementById("starting-amount").value.replace(",", ".")
  );

  const additionalContribuition = Number(
    document.getElementById("addicional-countribution").value.replace(",", ".")
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document
    .getElementById("time-amount-period")
    .value.replace(",", ".");
  const returnRate = Number(
    document.getElementById("return-rate").value.replace(",", ".")
  );
  const returnRatePeriod = document
    .getElementById("evaluation-period")
    .value.replace(",", ".");
  const taxRate = Number(
    document.getElementById("tax-rate").value.replace(",", ".")
  );

  const returnsArray = generateReturnsArray(
    startingAmount,
    timeAmount,
    timeAmountPeriod,
    additionalContribuition,
    returnRate,
    returnRatePeriod,
    taxRate
  );

  console.log(returnsArray);
}

function clearForm() {
  form["starting-amount"].value = "";
  form["addicional-countribution"].value = "";
  form["time-amount"].value = "";
  form["return-rate"].value = "";
  form["tax-rate"].value = "";

  const errorInputContainers = document.querySelectorAll(".error");

  for (const errorInputContainer of errorInputContainers) {
    errorInputContainer.classList.remove('error');
    errorInputContainer.parentElement.querySelector("p").remove();
  }
}

function validateInput(event) {
  if (event.target.value === "") {
    return;
  }

  const { parentElement } = event.target;
  const grandParenteElement = event.target.parentElement.parentElement;
  const inputValue = event.target.value.replace(",", ".");

  if (
    !parentElement.classList.contains("error") &&
    (isNaN(inputValue) || Number(inputValue) <= 0)
  ) {
    // objetivo: <p class="text-red-500">Insira um valor numérico e maior que zero</p>
    const errorTextElement = document.createElement("p"); //<p></p>
    errorTextElement.classList.add("text-red-500"); //<p class='text-red-500'></p>

    errorTextElement.innerText = "Insira um valor numérico e maior que zero";

    parentElement.classList.add("error");
    grandParenteElement.appendChild(errorTextElement);
  } else if (
    parentElement.classList.contains("error") &&
    !isNaN(inputValue) &&
    Number(inputValue) > 0
  ) {
    parentElement.classList.remove("error");
    grandParenteElement.querySelector("p").remove();
  }
}

for (const formElement of form) {
  if (formElement.tagName === "INPUT" && formElement.hasAttribute("name")) {
    formElement.addEventListener("blur", validateInput);
  }
}

form.addEventListener("submit", renderProgression);
//calculateButton.addEventListener("click", renderProgression);
clearFormButton.addEventListener("click", clearForm);
