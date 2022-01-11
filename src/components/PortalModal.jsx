import { createPortal } from "react-dom"
import { FlightDetails } from "../views/FlightDetails"

export const PortalModal = ({ flight, isOpen, onClose }) => {
  
  let rootStyle = document.getElementById('root').style

  if (isOpen) {
    rootStyle.filter = 'blur(5px)'
    rootStyle.pointerEvents = 'none'
    rootStyle.opacity = '.4'
  } else {
    rootStyle.filter = null
    rootStyle.pointerEvents = null
    rootStyle.opacity = null
  }

  if (!isOpen) return null
  return createPortal(
    <div className="portal-modal">
      <div className="modal-content">
        <div className="flight-info">
          <FlightDetails flight={flight} />
        </div>
        <div className="close-modal">
          <button onClick={onClose}>X</button>
        </div>
      </div>
    </div>
  , document.body)
}