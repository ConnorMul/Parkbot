const fetch = require("node-fetch");

async function fetchAPIData() {
     const response = await fetch("https://storage.googleapis.com/airgarage/airgarage-data.json")
    // .then(r => r.json())
    // .then(data => {
    //     console.log(data)
    // })
    return data = await response.json()
    // console.log(data)

}

async function executeCommand() {

    if (process.argv[2] === "locate") {

    const data = await fetchAPIData()
    // console.log(process.argv.slice(3))
    const filteredArray = await data.forEach((parkingLot) => {
        if(parkingLot.address.state === process.argv[3]) {
            console.log(parkingLot.name)
        }
    })
    } else if (process.argv[2] === "findPriceHourlyLTE") {
        const data = await fetchAPIData()
        // console.log(parseInt(process.argv.slice(3).join("")))
        const filteredArray = await data.forEach((parkingLot) => {
            if (parkingLot.price_hourly <= process.argv[3]) {
                console.log(parkingLot.name)
            }
        })
    } else if (process.argv[2] === "findPriceHourlyGT") {
        const data = await fetchAPIData()
        // console.log(parseInt(process.argv.slice(3).join("")))
        const filteredArray = await data.forEach((parkingLot) => {
        if (parkingLot.price_hourly > process.argv[3]) {
            console.log(parkingLot.name)
        }
    })
    }
}


executeCommand()