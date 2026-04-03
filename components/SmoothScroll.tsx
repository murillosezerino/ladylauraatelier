'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    // Parallax elements on scroll
    const parallaxElements = document.querySelectorAll('[data-parallax]')
    // Subtle parallax on section images with data-scroll-speed
    const scrollSpeedElements = document.querySelectorAll('[data-scroll-speed]')

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        parallaxElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.parallax || '0.1')
          const rect = el.getBoundingClientRect()
          const inView = rect.top < window.innerHeight && rect.bottom > 0
          if (inView) {
            const offset = (rect.top - window.innerHeight / 2) * speed
            ;(el as HTMLElement).style.transform = `translateY(${offset}px)`
          }
        })

        scrollSpeedElements.forEach((el) => {
          const speed = parseFloat((el as HTMLElement).dataset.scrollSpeed || '0.03')
          const rect = el.getBoundingClientRect()
          const inView = rect.top < window.innerHeight && rect.bottom > 0
          if (inView) {
            const offset = (rect.top - window.innerHeight / 2) * speed
            ;(el as HTMLElement).style.transform = `translateY(${offset}px)`
          }
        })

        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
