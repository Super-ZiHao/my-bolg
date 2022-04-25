import React from 'react'

type Props = {}

const Study: React.FC<Props> = ({ children }) => {
  const types1 = ['Vue3', 'React', 'TypeScript']
  const types2 = ['Sass', 'Less', 'Tailwind.css', 'animate.css']
  return (
    <div className="study">
      <div className="flex flex-wrap">
        {types1.map((type, index) => (
          <div
            className="study-box1 animate__animated animate__fadeInDown animate__delay-2s"
            onClick={() => {
              open(`https://super-zihao.github.io/learning/#/${type.toLowerCase()}`)
            }}
            style={{
              // @ts-ignore
              '--animate-delay': `${index / 10}s`
            }}
          >
            {type}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap mt-32">
        {types2.map((type, index) => (
          <div
            className="study-box2 animate__animated animate__fadeInDown animate__delay-2s"
            onClick={() => {
              open(`https://super-zihao.github.io/learning/#/${type.toLowerCase()}`)
            }}
            style={{
              // @ts-ignore
              '--animate-delay': `${index / 10}s`
            }}
          >
            {type}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Study
