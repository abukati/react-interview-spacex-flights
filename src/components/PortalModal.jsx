import { createPortal } from "react-dom"
import { FlightDetails } from "../views/FlightDetails"

export const PortalModal = ({ flight, isOpen, onClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className="portal-modal">
      <div className="flight-info">
        <FlightDetails flight={flight} />
      </div>
      <div className="close-modal">
        <button onClick={onClose}>X</button>
      </div>
    </div>
  , document.body)
}