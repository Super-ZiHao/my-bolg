import React from "react"

type Props = {

}

const Popup: React.FC<Props> = () => {
  return (
    <div className="ZH-popup">
      <div className="ZH-mask" />
      <div className="ZH-popup-main"></div>
    </div>
  )
}

export default Popup