import {calculateDistance} from "./lib.js";

const volumeOfFuelEl = document.getElementById('volumeOfFuel');
const fuelConsumptionEl = document.getElementById('fuelConsumption');
const resultEl = document.getElementById('result');
const calculateEl = document.getElementById('calculate');

calculateEl.addEventListener('click', function (evt) {
  const volume = volumeOfFuelEl.value;
  const consumption = fuelConsumptionEl.value;
  const  result = calculateDistance(volume, consumption);

  resultEl.textContent = result;
});

// Не понимаю по чему ни с одним из вариантов кнопка "рассчитать" не работает

// function reactToClick() {
//     const volume = volumeOfFuelEl.value;
//     const consumption = fuelConsumptionEl.value;
//     const result = calculateDistance(volume, consumption);
//
//     resultEl.textContent = result;
// }
//
// calculateEl.addEventListener('click', reactToClick );

