import { useEffect, useState, useRef } from 'react'

function AnimatedSection({ children, className = '', as: Tag = 'section' }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`${className} ${isVisible ? 'is-visible' : ''}`}>
      {children}
    </Tag>
  )
}

export default AnimatedSection
