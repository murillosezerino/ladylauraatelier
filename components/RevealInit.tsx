'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el, i) => {
      const siblings = el.parentElement?.querySelectorAll('.reveal')
      if (siblings) {
        const idx = Array.from(siblings).indexOf(el as Element)
        if (idx > 0) {
          ;(el as HTMLElement).style.transitionDelay = `${idx * 0.1}s`
        }
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
