
export const FlightPreview = ({ flights, openModal }) => {

  return flights.map(flight => 
    <li className="flight-preview" key={flight.id} onClick={() => openModal(flight.id)}>
      <img src={flight.links.patch.small} alt="flight's patch" />
      <span className="flight-name">{flight.name}</span>
      <span className="flight-year">{flight.date_utc.slice(0,4)}</span>
    </li>
  )
}