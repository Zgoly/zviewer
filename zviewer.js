function zviewer(i) {
    // Div
    let div = document.createElement('div')
    div.style.display = 'block'
    div.style.position = 'fixed'
    div.style.zIndex = 999

    div.style.opacity = 0
    div.style.top = 0
    div.style.left = 0
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.cursor = 'pointer'

    div.style.transitionDuration = '0.5s'
    div.style.backdropFilter = 'brightness(0.5) blur(5px)'
    document.body.appendChild(div)

    // Img
    let img = document.createElement('img')
    img.src = i.src || i

    img.style.opacity = 0
    img.style.scale = 0.5
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.objectFit = 'contain'

    img.style.transitionDuration = '0.5s'
    div.appendChild(img)

    // Spinner
    let canvas = document.createElement('canvas')
    canvas.width = 100
    canvas.height = 100

    canvas.style.position = 'fixed'
    canvas.style.top = 'calc(50% - 50px)'
    canvas.style.left = 'calc(50% - 50px)'
    canvas.animate([{ scale: 0.5, filter: 'opacity(0)' }, { filter: 'opacity(1)' }, { scale: 1, filter: 'opacity(0)' }], { duration: 750, iterations: Infinity })

    let spinner = canvas.getContext('2d')
    spinner.beginPath()
    spinner.arc(50, 50, 40, 0, 2 * Math.PI, false)
    spinner.lineWidth = 8
    spinner.strokeStyle = '#FFF'
    spinner.stroke()
    div.append(canvas)

    img.addEventListener('load', () => {
        img.style.opacity = 1
        img.style.scale = 1
        canvas.remove()
    });

    // Show animation
    setTimeout(function () {
        div.style.opacity = 1
        document.body.style.overflow = 'hidden'
    }, 1)

    // Hide animation & remove
    div.onclick = function () {
        this.onclick = null
        img.style.scale = 0.5
        div.style.opacity = 0
        img.pointerEvents = 'none'
        div.pointerEvents = 'none'
        document.body.style.removeProperty('overflow')
        setTimeout(function () { div.remove() }, 500)
    }
}