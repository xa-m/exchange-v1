const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const currency = "EUR";
const output = document.getElementById("outputResult");

const bottomoutput1 = document.getElementById("outputFirst");
const bottomoutput2 = document.getElementById("outputSecond");

amount.addEventListener("change", getCurrency);
firstCurrency.addEventListener("change", getCurrency);
secondCurrency.addEventListener("change", getCurrency);

// function getCurrency(e) {
//     fetch(`https://v6.exchangerate-api.com/v6/66767c0d52ba9f48aae77c9e/latest/${firstCurrency.value}`, { mode: "no-cors" })
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//         })
// }


fetch(`https://v6.exchangerate-api.com/v6/66767c0d52ba9f48aae77c9e/latest/usd`)
        .then(response => response.json())
        .then(response => {
            // console.log(response.conversion_rates[secondCurrency.value]);
            outputValue = response.conversion_rates["TRY"];

            output.value = outputValue;
        })

function getCurrency(e) {
    fetch(`https://v6.exchangerate-api.com/v6/66767c0d52ba9f48aae77c9e/latest/${firstCurrency.value}`)
        .then(response => response.json())
        .then(response => {
            // console.log(response.conversion_rates[secondCurrency.value]);
            outputValue = response.conversion_rates[secondCurrency.value] * amount.value;

            output.value = outputValue;





        })
        // console.log(firstCurrency.value);

    bottomoutput1.textContent = firstCurrency.value;
    bottomoutput2.textContent = secondCurrency.value;


};