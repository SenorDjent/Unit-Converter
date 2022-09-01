/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numInput = document.getElementById("num-input")
const convertBtn = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("weight-el")

let feet = 0
let meter = 0
let liter = 0
let gallon = 0
let kg = 0
let lb = 0
renderLength()
renderVolume()
renderWeight()
    
convertBtn.addEventListener("click", function() {
    renderLength()
    renderVolume()
    renderWeight()
})
function renderLength() {
    feet = numInput.value * 3.281
    meter = numInput.value / 3.281
    let length = ""
    length = `
    <h3>LENGTH</h3>
    <p>
        ${numInput.value} meters = ${feet.toFixed(3)} feet <br> ${numInput.value} feet = ${meter.toFixed(3)} meters
    </p>`
    lengthEl.innerHTML = length
}
function renderVolume() {
    liter = numInput.value * 3.785412
    gallon = numInput.value / 3.785412
    let volume = ""
    volume = `
    <h3>VOLUME</h3>
    <p>
        ${numInput.value} gallons = ${liter.toFixed(3)} liters <br> ${numInput.value} liters = ${gallon.toFixed(3)} gallons
    </p>`
    volumeEl.innerHTML = volume
}

function renderWeight() {
    kg = numInput.value / 2.205
    lb = numInput.value * 2.205
    let weight = ""
    weight = `
    <h3>WEIGHT</h3>
    <p>
        ${numInput.value} kilos = ${lb.toFixed(3)} pounds <br> ${numInput.value} pounds = ${kg.toFixed(3)} kilos
    </p>`
    weightEl.innerHTML = weight
}

