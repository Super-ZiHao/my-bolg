import React from 'react'

type Props = {}

const Study: React.FC<Props> = ({ children }) => {
  return (
    <div className="study">
      {/* <div
        className=""
        onClick={() => {
          open('https://super-zihao.github.io/learning/#/sass')
        }}
      >
        <div className="ff-kt fs-44 text-center lh-56">Sass</div>
      </div> */}
      <div
        className="study-box animate__animated animate__fadeInDown"
        onClick={() => {
          open('https://super-zihao.github.io/learning/#/sass')
        }}
      >
        Sass
      </div>
      <div
        className="study-box animate__animated animate__fadeInDown"
        onClick={() => {
          open('https://super-zihao.github.io/learning/#/typescript')
        }}
      >
        TypeScript
      </div>
    </div>
  )
}

export default Study
