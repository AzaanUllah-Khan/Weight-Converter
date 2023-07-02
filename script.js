
var kg = document.getElementById('kg');
var pd = document.getElementById('pd');
var oun = document.getElementById('oun');
var gram = document.getElementById('g');
var mgram = document.getElementById('mg');
var tone = document.getElementById('tne');

kg.addEventListener('input', function () {
    pd.value = (kg.value * 2.20).toFixed(2);
    oun.value = (kg.value * 35.27).toFixed(2);
    gram.value = (kg.value * 1000).toFixed(2);
    mgram.value = (kg.value * 1000000).toFixed(2);
    tone.value = (kg.value / 1000).toFixed(2);
});

pd.addEventListener('input', function () {
    kg.value = (pd.value / 2.20).toFixed(2);
    oun.value = (pd.value * 16).toFixed(2);
    gram.value = (pd.value * 453.59).toFixed(2);
    mgram.value = (pd.value * 453592.37).toFixed(2);
    tone.value = (pd.value / 2204.62).toFixed(2);
});

oun.addEventListener('input', function () {
    pd.value = (oun.value / 16).toFixed(2);
    kg.value = (oun.value / 35.27).toFixed(2);
    gram.value = (oun.value * 28.35).toFixed(2);
    mgram.value = (oun.value * 28349.52).toFixed(2);
    tone.value = (oun.value / 35273.96).toFixed(2);
});

gram.addEventListener('input', function () {
    kg.value = (gram.value / 1000).toFixed(2);
    pd.value = (gram.value / 453.59).toFixed(2);
    oun.value = (gram.value / 28.35).toFixed(2);
    mgram.value = (gram.value * 1000).toFixed(2);
    tone.value = (gram.value / 1000000).toFixed(2);
});

mgram.addEventListener('input', function () {
    kg.value = (mgram.value / 1000000).toFixed(2);
    pd.value = (mgram.value / 453592.37).toFixed(2);
    oun.value = (mgram.value / 28349.52).toFixed(2);
    gram.value = (mgram.value / 1000).toFixed(2);
    tone.value = (mgram.value / 1000000000).toFixed(2);
});

tone.addEventListener('input', function () {
    kg.value = (tone.value * 1000).toFixed(2);
    pd.value = (tone.value * 2204.62).toFixed(2);
    oun.value = (tone.value * 35273.96).toFixed(2);
    gram.value = (tone.value * 1000000).toFixed(2);
    mgram.value = (tone.value * 1000000000).toFixed(2);
});

function more(btn) {
    gram.parentElement.style.display = 'flex';
    mgram.parentElement.style.display = 'flex';
    tone.parentElement.style.display = 'flex';
    btn.parentElement.style.display = 'none';
}
