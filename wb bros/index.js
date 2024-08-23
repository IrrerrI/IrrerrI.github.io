const button = document.querySelector(".hamburger-icon")
const page = document.querySelector(".display-none")
const body = document.querySelector("body")

button.addEventListener("click", () => {
    page.classList.toggle("display-block")
    page.classList.toggle("display-none")
    body.classList.toggle("overflow-hidden")
})
