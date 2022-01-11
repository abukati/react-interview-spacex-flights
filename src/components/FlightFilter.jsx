
export const FlightFilter = (props) => {
  return (
    <select name="filterBy" id="filterBy" onChange={props.onFilter}>
      <option value="">Set filter by mission's status</option>
      <option value="true">Success</option>
      <option value="false">Failure</option>
    </select>
  )
}
