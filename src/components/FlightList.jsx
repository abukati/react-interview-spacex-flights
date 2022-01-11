import { FlightPreview } from "./FlightPreview"

export const FlightList = ({ flights, openModal }) => {
  
  return (
    <div className="flight-list-container">
      <ul className="flight-list">
        { flights.map(flight => 
          <FlightPreview key={flight.id} flight={flight} openModal={openModal}/>
        )}
      </ul>
    </div>
  )
}