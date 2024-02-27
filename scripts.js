const convertButton = document.querySelector(".convert-button")
const currencyFrom = document.querySelector(".currency-from")
const currencyTo = document.querySelector(".currency-to")

const convertValues = async () => {
    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL').then(response => response.json())
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueConverted = document.querySelector(".currency-value-converted")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const realToDay = 1
    const dolarToDay = data.USDBRL.high
    const euroToDay = data.EURBRL.high
    const libraToDay = data.GBPBRL.high
    const btcToDay = data.BTCBRL.high


    //  CONVERSÃO DE REAL PARA ...

    if (currencyFrom.value == 'real' && currencyTo.value == 'real') {

        let resultRealtoReal = (realToDay / realToDay) * inputCurrencyValue

         currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(resultRealtoReal)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)

        }


    if (currencyFrom.value == 'real' && currencyTo.value == 'dolar') {

        let resultRealToDolar = (realToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultRealToDolar)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'real' && currencyTo.value == 'euro') {

        let resultRealToEuro = (realToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultRealToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'real' && currencyTo.value == 'libras') {

        let resultRealTolibra = (realToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultRealTolibra)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'real' && currencyTo.value == 'bitcoin') {

        let resultRealToBtc = inputCurrencyValue / btcToDay

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultRealToBtc)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyValue)
    }

    // CONVERSÃO DE DOLAR PARA ...


    if (currencyFrom.value == 'dolar' && currencyTo.value == 'dolar') {

        let resultDolarToDolar = (dolarToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultDolarToDolar)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'dolar' && currencyTo.value == 'euro') {

        let resultDolarToEuro = (dolarToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultDolarToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'dolar' && currencyTo.value == 'libras') {

        let resultDolarToLibra = (dolarToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultDolarToLibra)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'dolar' && currencyTo.value == 'bitcoin') {

        let resultDolarToBTC = (dolarToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultDolarToBTC)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'dolar' && currencyTo.value == 'real') {

        let resultDolarToReal = (dolarToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultDolarToReal)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyValue)
    }


    // CONVERSÃO DE EURO PARA ...


    if (currencyFrom.value == 'euro' && currencyTo.value == 'dolar') {

        let resultEuroToDolar = (euroToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultEuroToDolar)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'euro' && currencyTo.value == 'euro') {

        let resultEuroToEuro = (euroToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultEuroToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'euro' && currencyTo.value == 'libras') {

        let resultEuroToLibra = (euroToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultEuroToLibra)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'euro' && currencyTo.value == 'bitcoin') {

        let resultEuroToBtc = (euroToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultEuroToBtc)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'euro' && currencyTo.value == 'real') {

        let resultEuroTorReal = (euroToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultEuroTorReal)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyValue)
    }




    // CONVERSÃO DE LIBRA PARA ...




    if (currencyFrom.value == 'libras' && currencyTo.value == 'dolar') {

        let resultLibraToDolar = (libraToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultLibraToDolar)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'libras' && currencyTo.value == 'euro') {

        let resultLibraToEuro = (libraToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultLibraToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'libras' && currencyTo.value == 'libras') {

        let resultLibraToLibra = (libraToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultLibraToLibra)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'libras' && currencyTo.value == 'bitcoin') {

        let resultLibraToBtc = (libraToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultLibraToBtc)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'libras' && currencyTo.value == 'real') {

        let resultLibraToReal = (libraToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultLibraToReal)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyValue)
    }



    // CONVERSÃO DE BTC PARA ...



    if (currencyFrom.value == 'bitcoin' && currencyTo.value == 'dolar') {

        let resultBtcToDolar = (btcToDay / dolarToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {

            style: 'currency',
            currency: 'USD'
        }).format(resultBtcToDolar)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'bitcoin' && currencyTo.value == 'euro') {

        let resultBtcToEuro = (btcToDay / euroToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: 'EUR'
        }).format(resultBtcToEuro)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'bitcoin' && currencyTo.value == 'libras') {

        let resultBtcToLibra = (btcToDay / libraToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-GB', {

            style: 'currency',
            currency: 'GBP'
        }).format(resultBtcToLibra)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'bitcoin' && currencyTo.value == 'bitcoin') {

        let resultBtcToBtc = (btcToDay / btcToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {

            style: 'currency',
            currency: "BTC",
            minimumFractionDigits: 6
        }).format(resultBtcToBtc)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }
    if (currencyFrom.value == 'bitcoin' && currencyTo.value == 'real') {

        let resultBtcToReal = (btcToDay / realToDay) * inputCurrencyValue

        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-Br', {

            style: 'currency',
            currency: 'BRL'
        }).format(resultBtcToReal)

        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 6
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {
    const currencyName = document.querySelector(".currency-converted")
    const currencyImage = document.querySelector(".currency-img")
    const currencyFromImg = document.querySelector(".currency-from-img")
    const currencyFromName = document.querySelector(".currency-to-convert")

    if (currencyTo.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"

    }
              
    if (currencyTo.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/dolar.png"

    }

    if (currencyTo.value == "libras") {
        currencyName.innerHTML = "Libras"
        currencyImage.src = "./assets/libras.png"

    }

    if (currencyTo.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"

    }

    if (currencyTo.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"

    }

    if (currencyFrom.value == "real") {
        currencyFromName.innerHTML = "Real"
        currencyFromImg.src = "./assets/real.png"

    }

    if (currencyFrom.value == "dolar") {
        currencyFromName.innerHTML = "Dólar"
        currencyFromImg.src = "./assets/dolar.png"

    }

    if (currencyFrom.value == "libras") {
        currencyFromName.innerHTML = "Libras"
        currencyFromImg.src = "./assets/libras.png"

    }

    if (currencyFrom.value == "euro") {
        currencyFromName.innerHTML = "Euro"
        currencyFromImg.src = "./assets/euro.png"

    }

    if (currencyFrom.value == "bitcoin") {
        currencyFromName.innerHTML = "Bitcoin"
        currencyFromImg.src = "./assets/bitcoin.png"

    }

    convertValues()
}





currencyTo.addEventListener("change", changeCurrency)
currencyFrom.addEventListener("change", changeCurrency)


convertButton.addEventListener("click", convertValues)
convertButton.addEventListener("click", changeCurrency)


