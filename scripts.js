
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".converter2")

async function convertValues(){
  const inputCurrencyValue = document.querySelector(".input-currency").value
  const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// Valor em Real
  const currencyValueConverted = document.querySelector(".currency-value")// Outras moedas

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL").then( response => response.json())

  console.log(currencySelect.value)
  const dolarToday = data.USDBRL.high
  const euroToday = data.EURBRL.high
  const bitcoinToday = data.BTCBRL.high
  const libraToday = data.GBPBRL.high

  if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
  }
  if(currencySelect.value =="euro"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
  }
  if(currencySelect.value =="bitcoin"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8, // mínimo de 8 casas decimais
      maximumFractionDigits: 8  // máximo de 8 casas decimais
    }).format(inputCurrencyValue / bitcoinToday)
  }
  if(currencySelect.value == "libra"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue) 
}

function changeCurrency(){
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.querySelector(".currency-img")

  if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar"
    currencyImage.src = "assets/dollar.png"
  }

  if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "assets/euro.png"
  }

  if(currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "assets/bitcoin.png"
  }

  if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "assets/libra.png"
  }

  convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

