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
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    )

    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-stagger'
    const elements = document.querySelectorAll(selectors)
    elements.forEach((el, i) => {
      // Stagger siblings within same parent
      const parent = el.parentElement
      if (parent) {
        const siblings = parent.querySelectorAll(selectors)
        const idx = Array.from(siblings).indexOf(el as Element)
        if (idx > 0 && !el.classList.contains('reveal-stagger')) {
          ;(el as HTMLElement).style.transitionDelay = `${idx * 0.08}s`
        }
      }
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
