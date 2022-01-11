import { useState, useEffect } from 'react'
import { useLocalStorageState } from '../hooks/useLocalStorage'
import { FlightList } from '../components/FlightList'
import { PortalModal } from '../components/PortalModal'
import { FlightFilter } from '../components/FlightFilter'

export const FlightPage = () => {
  const [flights, setFlights] = useLocalStorageState('flights', [])
  const [error, setError] = useState(null)
  const [filterBy, setFilterBy] = useState(null)

  const [modalFlight, setModalFlight] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setError(null)
    if (flights.length > 1) return
    fetch('https://api.spacexdata.com/v4/launches')
      .then(res => res.json())
      .then(data => setFlights(data))
      .catch(err => setError(err.message))
  }, [flights, setFlights])


  const openModal = (flightId) => {
    const flightToShow = flights.find(flight => flight.id === flightId)
    setModalFlight(flightToShow)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setModalFlight(null)
    setIsModalOpen(false)
  }

  const onFilter = ({ target }) => {
    if (target.value) {
      setFilterBy(target.value === 'true')
    } else {
      setFilterBy(null)
    }
  }

  const filteredFlights = () => {
    if (filterBy) {
      const filtered = flights.filter(flight => flight.success === filterBy)
      return filtered.slice(0, 20)
    } else {
      return flights.slice(0, 20)
    }
  }


  if (error) return <div>An error has occurred, {error}</div>
  return (
    <div className="flight-page">
      <FlightFilter onFilter={onFilter} />
      <FlightList openModal={openModal} flights={filteredFlights()} />
      <PortalModal onClose={closeModal} flight={modalFlight} isOpen={isModalOpen} />
    </div>
  )
}