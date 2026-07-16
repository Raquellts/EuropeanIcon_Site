'use client'

import { Suspense, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

function PageTransitionInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.classList.remove('page-fade-in')
    void el.offsetWidth
    el.classList.add('page-fade-in')
  }, [pathname])

  return <div ref={ref}>{children}</div>
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <PageTransitionInner>{children}</PageTransitionInner>
    </Suspense>
  )
}
