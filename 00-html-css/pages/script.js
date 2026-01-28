//const botones = document.querySelectorAll('.button-apply-job')

/*botones.forEach(boton => {
    boton.addEventListener('click', () => {
        boton.textContent = '¡Aplicado!'
        boton.classList.add('is-applied')
        boton.disabled = true
    })
}) */

const jobsListingSection = document.querySelector('.jobs-listings')

jobsListingSection?.addEventListener('click', (event) => {
    const element = event.target

    if (element.classList.contains('button-apply-job')){
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }
})

// Filtro por tecnología
const filterTech = document.querySelector('#filter-technology')

filterTech?.addEventListener('change', () => {
    const selectedTechnology = filterTech.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        const description = card.textContent.toLowerCase()
        
        if (selectedTechnology === 'null') {
            // Mostrar todas las cards si se selecciona la opción por defecto
            card.style.display = 'flex'
        } else if (description.includes(selectedTechnology)) {
            // Mostrar solo las cards que contienen la tecnología
            card.style.display = 'flex'
        } else {
            // Ocultar las cards que no la contienen
            card.style.display = 'none'
        }
    })
})

// Filtro por ubicación
const filterLocation = document.querySelector('#filter-location')

filterLocation?.addEventListener('change', () => {
    const selectedLocation = filterLocation.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        const description = card.textContent.toLowerCase()

        if (selectedLocation === 'null'){
            card.style.display = 'flex'
        } else if (description.includes(selectedLocation)){
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    })
})

// Filtro por tipo de contrato
const filterContract = document.querySelector('#filter-contract')

filterContract?.addEventListener('change', () => {
    const selectedContract = filterContract.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        const description = card.textContent.toLowerCase()

        if (selectedContract ==='null'){
            card.style.display = 'flex'
        } else if (description.includes(selectedContract)){
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    })
})

// Filtro por experiencia
const filterExperience = document.querySelector('#filter-experience')

filterExperience?.addEventListener('change', ()=>{
    const selectedExperience = filterExperience.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        const description = card.textContent.toLocaleLowerCase()

        if (selectedExperience === 'null'){
            card.style.display = 'flex'
        } else if (description.includes(selectedExperience)){
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        }
    })
})

/* const searchInput = document.querySelector('#empleos-search-input')

searchInput.addEventListener('input', ()=>{
    console.log(searchInput.value)
})

searchInput.addEventListener('blur', ()=>{
    console.log('Se dispara cuando el campo pierde el foco')
})

const searchForm = document.querySelector('#empleos-search-form')

searchForm.addEventListener('submit',(event)=>{
    event.preventDefault() //Previene que se recargue la página

    console.log('submit')
})

document.addEventListener('keydown', (event)=>{
    console.log('Tecla presionada: ',event.key)
})
 */
