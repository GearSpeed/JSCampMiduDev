// Filtro por tecnología
const filterTech = document.querySelector('#filter-technology')

filterTech?.addEventListener('change', () => {
    const selectedTechnology = filterTech.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        const tecnologia = card.getAttribute('data-technology')
        const isShow = selectedTechnology === 'null' || selectedTechnology === tecnologia
        card.classList.toggle('is-hidden', !isShow)
    })
})

// Filtro por ubicación
const filterLocation = document.querySelector('#filter-location')

filterLocation?.addEventListener('change', () => {
    const selectedLocation = filterLocation.value.toLowerCase()
    const cards = document.querySelectorAll('.job-listing-card')

    cards.forEach(card => {
        //APLICANDO ESTILO FLEX CON  EL ATRIBUTO STYLE
        /* const description = card.textContent.toLowerCase()

        if (selectedLocation === 'null'){
            card.style.display = 'flex'
        } else if (description.includes(selectedLocation)){
            card.style.display = 'flex'
        } else {
            card.style.display = 'none'
        } */ 

        //APLICANDO CLASE IS-HIDDEN ** Sin Ramificar mi código con if **
        const modalidad = card.getAttribute('data-modalidad')
        const isShow = selectedLocation === 'null' || selectedLocation === modalidad //Aqui se hace la condición

        card.classList.toggle('is-hidden', !isShow) //si isShow es false, se agrega la clase is-hidden
        
        //EL CÓDIGO ANTERIOR PERO RAMIFICADO
        /* if(selectedLocation === 'null' || selectedLocation === modalidad){
            card.classList.remove('is-hidden')
        } else {
            card.classList.add('is-hidden')
        } */
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
