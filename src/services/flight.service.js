import axios from 'axios'
// https://api.spacexdata.com/v4/launches

export async function fetchFlights() {
  try {
    const res = await axios.get(`https://api.spacexdata.com/v4/launches`)
    return res.data
  } catch (e) {
    throw e
  }
}