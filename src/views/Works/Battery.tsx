import { Button } from 'antd'
import { useRef } from 'react'

type Props = {}

const Battery: React.FC<Props> = () => {
  const batteryRef = useRef<HTMLDivElement>(null)
  let battery = 0
  let timer: any = null
  const unFull = () => {
    clearInterval(timer)
    battery = 0
    batteryRef.current?.style.setProperty('--battery', `${battery}`)
  }
  const Full = () => {
    battery += 0.01
    batteryRef.current?.style.setProperty('--battery', `${battery}`)
    if (battery >= 1) return
    clearInterval(timer)
    timer = setInterval(() => {
      battery += 0.01
      batteryRef.current?.style.setProperty('--battery', `${battery}`)
      if (battery >= 1) clearInterval(timer)
    }, 20)
  }
  return (
    <div className='battery'>
      <div ref={batteryRef} className="battery-text text-center">
        About text charging effect
      </div>
      <div>
        <Button type="primary" onClick={Full}>充电</Button>
        <Button type="primary" className='ml-32' onClick={unFull}>放电</Button>
      </div>
    </div>
  )
}

export default Battery
