import React from 'react'

type Props = {}

const Study: React.FC<Props> = ({ children }) => {
  return (
    <div className="card works-option animate__animated animate__fadeInRight" style={{ gridAutoRows: '150px' }}>
      <div
        className="works-option-item"
        style={{ width: '100px', height: '50px', backgroundColor: '' }}
        onClick={() => {
          open('https://huangzihao3344.github.io/bolg-sass/')
        }}
      >
        <div className="ff-kt fs-44 text-center lh-56">Sass</div>
      </div>
    </div>
  )
}

export default Study
