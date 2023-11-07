const timeline=gsap.timeline({
    repeat:-1,
});
timeline.to('.imagecontainer',{
    duration:2,
    ease:Expo.easeInOut,
    stagger:2,
    width:"100%",
})
function loadingAnimation() {
    gsap.from("#center-container h1,h2,h3", {
        y: 100, 
        opacity: 0,
        delay: 0.5,
        duration: 0.9,
        stagger: 0.3, 
    })
   
    gsap.from("#center-container #text-container #buttonC", {
        x:-100,
        scale: 0.9,
        opacity: 0,
        delay: 2,
        duration: 0.4,
        stagger: 0.3,
    })
    gsap.from('#center #nav',{
        y:-100,
        opacity:0,
        delay:1,
        duration:0.9,
        stagger:0.3,
    })
}
loadingAnimation();
