const animationSpeed = "0.8s"
const sectionTitle = document.querySelectorAll(".animate")

sectionTitle.forEach(element => {
    element.style.opacity = "0"
    element.style.transition = `all ${animationSpeed} ease-in-out`
});

sectionTitle.forEach(element => {
    const observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true) {
            element.style.opacity = "1"
        }  
    }, { threshold: [0] }) 
    observer.observe(element)
});