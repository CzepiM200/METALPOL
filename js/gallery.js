const images = document.querySelectorAll(".gallery__image-item")
const galleryZoom = document.querySelector(".gallery-zoom")
const galleryZoomImage = document.querySelector(".gallery-zoom-image")

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