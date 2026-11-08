'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import BlogStore from '@/zustand/Blog'

export default function PageLoader() {
  const { blogs } = BlogStore()
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimedOut(true)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  if (timedOut || blogs.length > 0) return null

  return (
    <div className="h-full w-full flex items-center justify-center fixed z-[100] bg-[var(--customColor)]">
      <Image
        src="/WhiteIcon.png"
        sizes="100vw"
        className="h-[100px] w-auto object-contain animate-pulse"
        width={0}
        height={0}
        alt="real"
      />
    </div>
  )
}
