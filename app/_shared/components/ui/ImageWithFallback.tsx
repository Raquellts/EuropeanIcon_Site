'use client'

import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
}

export default function ImageWithFallback({ src, alt, className, loading = 'lazy', ...rest }: ImageWithFallbackProps) {
  const [error, setError] = useState(false)

  if (error) return null

  return (
    <img
      src={src}
      alt={alt || ''}
      className={className}
      loading={loading}
      onError={() => setError(true)}
      {...rest}
    />
  )
}
