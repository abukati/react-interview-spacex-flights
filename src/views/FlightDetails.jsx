import { Carousel } from "../components/Carousel"

export const FlightDetails = ({ flight }) => {

  const unixDateFormat = (timestamp) => {
    const date = new Date(timestamp * 1000)
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = '0' + date.getMinutes()
    const seconds = '0' + date.getSeconds()
    
    return (
      month + ' ' + day + ' ' + year + ' at ' + hours + ':' + minutes.substring(1) + ':' + seconds.substring(-2)
    )
  }

  const missionStatus = (status) => {
    return status ? 'successfully executed' : 'failed'
  }

  const flightFailures = (failures) => {
    if (!failures.length) return null
    return (
      <div className="flight-failures">
        <p>Failure count is {failures.length} and the {failures.length > 1 ? 'failures were' : 'failure was'}:</p>
        <ul>
          { flight.failures.map(failure => <li key={failure.reason}>
              {failure.reason}
            </li>
          )}
        </ul>
      </div>
    )
  }

  return (
    <div className="flight-details">
      <div className="flight-info">
        <p className="flight-name">{flight.name} mission was launched on {unixDateFormat(flight.date_unix)}</p>
        <p className="flight-status">The mission was {missionStatus(flight.success)}{flight.details ? ', ' + flight.details : ''}.</p>
        { flightFailures(flight.failures) }
      </div>
      <div className="flight-links">
        <p className="mission-video">
          <iframe src={`https://www.youtube.com/embed/${flight.links.youtube_id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </p>
        { flight.links.flickr.original.length > 0 && <Carousel images={flight.links.flickr.original} /> }
        <p className="read-more">Read more about the mission on <a href={flight.links.wikipedia} rel="noreferrer" target="_blank">wikipedia</a></p>
      </div>
    </div>
  )
}