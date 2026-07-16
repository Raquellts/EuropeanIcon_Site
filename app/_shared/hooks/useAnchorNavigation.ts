'use client'

import { useCallback } from 'react'

export function useAnchorNavigation() {
  const navigateTo = useCallback((id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({ behavior: 'auto' })

    el.classList.add('section-fade-in')
    setTimeout(() => {
      el.classList.remove('section-fade-in')
    }, 500)
  }, [])

  return navigateTo
}
