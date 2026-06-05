(function () {
  if (window.__clickRippleLoaded) return
  window.__clickRippleLoaded = true

  const colors = [
    'rgba(35, 166, 213, 0.48)',
    'rgba(35, 213, 171, 0.42)',
    'rgba(255, 114, 66, 0.42)'
  ]

  const createRipple = event => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (event.button !== undefined && event.button > 0) return
    if (event.target.closest && event.target.closest('.click-ripple-effect')) return

    const ripple = document.createElement('span')
    const color = colors[Math.floor(Math.random() * colors.length)]

    ripple.className = 'click-ripple-effect'
    ripple.style.left = `${event.clientX}px`
    ripple.style.top = `${event.clientY}px`
    ripple.style.setProperty('--ripple-color', color)

    document.body.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove(), { once: true })
  }

  document.addEventListener('pointerdown', createRipple, { passive: true })
})()
