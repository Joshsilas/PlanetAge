function getEarthAge() {
    return parseInt(document.querySelector('.AgeInput').value);
}
document.querySelectorAll('button').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        // calculateAgeOnPlanets()
        var planetAge = (getEarthAge() / parseFloat(btn.value));
        document.querySelector('.Output').textContent = "Your age is " + planetAge.toFixed(1).toString() + btn.className;
    });
});
