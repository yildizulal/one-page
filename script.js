//SCROLL REVEAL
const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    reset:true,
})

sr.reveal(`.home-title, .home-job, .button, .home-social`)
sr.reveal(`.home-img`,{origin: 'left'})
sr.reveal(`.home-part-2`,{origin: 'right'})

