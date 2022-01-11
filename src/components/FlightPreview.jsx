
export const FlightPreview = ({ flight, openModal }) => {

  return (
    <li className="flight-preview" onClick={() => openModal(flight.id)}>
      <img src={flight.links.patch.small} alt="flight's patch" />
      <span className="flight-name">{flight.name}</span>
      <span className="flight-year">{flight.date_utc.slice(0,4)}</span>
    </li>
  )
}