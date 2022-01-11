import { FlightPreview } from "./FlightPreview"

export const FlightList = (props) => {
  
  return (
    <div className="flight-list-container">
      <ul className="flight-list">
        <FlightPreview {...props} />
      </ul>
    </div>
  )
}