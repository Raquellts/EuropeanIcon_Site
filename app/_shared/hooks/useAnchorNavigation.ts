'use client'

import { useCallback } from 'react'

export function useAnchorNavigation() {
  const navigateTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'auto' })

    el.classList.add('section-fade-in')
    setTimeout(() => {
      el.classList.remove('section-fade-in')
    }, 500)
  }, [])

  return navigateTo
}
