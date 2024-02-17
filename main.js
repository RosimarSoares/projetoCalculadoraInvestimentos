import { generateReturnsArray } from "./src/investmentGoals";

const form = document.getElementById("investiment-form");
//const calculateButton = document.getElementById("calculate-results");

function renderProgression(event) {
  event.preventDefault();
  //const startingAmount = Number(form["startingAmount"].value);
  const startingAmount = Number(
    document.getElementById("starting-amount").value
  );

  const additionalContribuition = Number(
    document.getElementById("addicional-countribution").value
  );
  const timeAmount = Number(document.getElementById("time-amount").value);
  const timeAmountPeriod = document.getElementById("time-amount-period").value;
  const returnRate = Number(document.getElementById("return-rate").value);
  const returnRatePeriod = document.getElementById("evaluation-period").value;
  const taxRate = Number(document.getElementById("tax-rate").value);

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

form.addEventListener("submit", renderProgression);
//calculateButton.addEventListener("click", renderProgression);
