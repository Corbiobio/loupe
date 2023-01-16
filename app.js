const img = document.getElementById("grn")
const copie = document.getElementById("copie")
const item = img.getBoundingClientRect();


img.addEventListener("mousemove", (ev) => {
    let x = ev.clientX - item.x
    let y = ev.clientY - item.y

    const width = x / img.offsetWidth * 100 - 50
    const height = y / img.offsetHeight * 100 - 50

    copie.style.transform = `translateX(${-width}%) translateY(${-height}%)`
})


