import { useEffect, useState } from 'react'

function Counter({ target, suffix = '', prefix = '', duration = 1200 }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const end = target
    const frameDuration = 1000 / 60
    const totalFrames = Math.round(duration / frameDuration)

    let frame = 0
    const counter = window.setInterval(() => {
      frame += 1
      const progress = frame / totalFrames
      const current = Math.round(end * progress)
      setValue(current)

      if (frame === totalFrames) {
        window.clearInterval(counter)
      }
    }, frameDuration)

    return () => window.clearInterval(counter)
  }, [duration, target])

  return (
    <span>
      {prefix}
      {value.toLocaleString('de-DE')}
      {suffix}
    </span>
  )
}

export default Counter
