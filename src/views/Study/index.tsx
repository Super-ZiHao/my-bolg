import { studys } from '@/utils/constants/study'
import React from 'react'

type Props = {}

const Study: React.FC<Props> = ({ children }) => {
  
  return (
    <div className="study">
      {studys.map((item, index) => {
        const a = 1
        return (
          <div className='study-item' key={item.title}>
            <div className="color-white study-item-title ff-kt">{item.title}</div>
            <div className="flex flex-wrap">
              {item.data.map((data, index2) => (
                <div
                  key={data.title}
                  className={`study-box${index + 1} animate__animated animate__fadeInUp animate__delay-2s`}
                  onClick={() => {
                    // open(`https://super-zihao.github.io/learning/#/${item.url}/${data.url}`)
                    open(`http://localhost:4000/#/${item.url}/${data.url}`)
                  }}
                  style={{
                    // @ts-ignore
                    '--animate-delay': `${index2 / 10}s`
                  }}
                >
                  {data.title}
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Study
