import { useState, useEffect } from "react"
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { fetchFlights } from '../services/flight.service'
import { FlightList } from "../components/FlightList"
import { PortalModal } from "../components/PortalModal"

export const FlightPage = () => {
  const [flights, setFlights] = useLocalStorageState('flights', [])
  const [error, setError] = useState(null)

  const [modalFlight, setModalFlight] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        // const flightsData = await fetchFlights()
        // console.log(flightsData);
        // if (flightsData) setFlights(flightsData)
      } catch (e) {
        setError(e.message)
      }
    })()
    if (flights) setError(null)
  }, [setFlights, flights])

  const openModal = (flightId) => {
    const flightToShow = twentyFlights.find(flight => flight.id === flightId)
    setModalFlight(flightToShow)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalFlight(null)
    setIsModalOpen(false)
  }


  if (error) return <div>An error has occurred, {error}</div>

  const twentyFlights = flights.slice(0, 20)

  return (
    <div className="flight-page">
      <FlightList openModal={openModal} flights={twentyFlights} />
      <PortalModal onClose={closeModal} flight={modalFlight} isOpen={isModalOpen} />
    </div>
  )
}