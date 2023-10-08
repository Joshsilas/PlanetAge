
function getEarthAge(): number {
    return parseInt(document.querySelector<HTMLInputElement>('.AgeInput').value)
}

document.querySelectorAll<HTMLInputElement>('button').forEach(btn => {
    btn.addEventListener('click', (e: MouseEvent)=> {
     // calculateAgeOnPlanets()
        const planetAge = (getEarthAge() / parseFloat(btn.value))
        document.querySelector<HTMLElement>('.Output').textContent = "Your age is " + planetAge.toFixed(1).toString() + btn.className
    })
})
