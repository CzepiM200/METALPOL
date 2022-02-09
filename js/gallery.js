const images = document.querySelectorAll(".gallery__image-item")
const galleryZoom = document.querySelector(".gallery-zoom")
const galleryZoomImage = document.querySelector(".gallery-zoom-image")
const gradientRelative = document.querySelector(".gradient-relative")
const galleryHidden = document.querySelector(".gallery__items_more")
const galleryMore = document.querySelector("#gallery_more")

if (galleryMore && galleryHidden && gradientRelative)
    galleryMore.addEventListener('click', () => {
        galleryHidden.setAttribute('style', 'display: grid')
        galleryMore.setAttribute('style', 'display: none')
        gradientRelative.setAttribute('style', 'display: none')
    })

galleryZoom.addEventListener('click', () => {
    console.log(galleryZoom)
    galleryZoom.style.display = 'none'
})

images.forEach(element => {
    element.addEventListener('click', () => {
        galleryZoom.style.display = 'flex'
        galleryZoomImage.setAttribute('src', element.src.replace('/thumbnails-min', ''))
    });
});