import React, { useContext } from 'react'
import ContextCandidates from '../../Context/ContextCandidates'
import './Filter.scss'

function Filter() {
  const {
    candidates,
    statsFormat,
    setStatsFormat,
    allCandidateIds,
    selectedCandidates,
    setSelectedCandidates
  } = useContext(ContextCandidates)

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const isCandidateChecked = (value) => {
    if (value === '*') {
      return allCandidateIds.length === selectedCandidates.length
    }

    return selectedCandidates.includes(value);
  }

  const handleCandidateSelection = (event) => {
    if (event.target.value === '*') {
      let newCheckedList = []
      if (event.target.checked) {
        newCheckedList = allCandidateIds
      }
      return setSelectedCandidates(newCheckedList)
    }

    let newCheckedList = [...selectedCandidates]
    let numberValue = Number.parseInt(event.target.value, 10)
 
    if (event.target.checked) { // Si cambia a checked lo agrego a la lista
      newCheckedList.push(numberValue)
    } else { // Si cambia a un-checked lo quito de la lista
      newCheckedList = newCheckedList.filter((id) => numberValue !== id)
    }

    return setSelectedCandidates(newCheckedList)
  }

  return (
    <section className='filter'>
      <h2 className='filter__title'>Filters</h2>
      <form onSubmit={handleSubmit} className='filter__form'> 
        <fieldset className='filter__fieldset filter__fieldset--stats-format'>
          <legend>Stats Format</legend>
          <label className='filter__form-radio-label'>
            <input
              type="radio"
              name="statsFormat"
              value="P"
              checked={statsFormat === 'P'}
              onChange={(event) => setStatsFormat(event.target.value)}
            />
            Percentage (%)
          </label>
          <label className='filter__form-radio-label'>
            <input
              type="radio"
              name="statsFormat"
              value="T"
              checked={statsFormat === 'T'}
              onChange={(event) => setStatsFormat(event.target.value)}
            />
            Totals (#)
          </label>
        </fieldset>
        <fieldset className='filter__fieldset filter__fieldset--selected-candidates'>
          <legend>Select Candidate</legend>
          <ul>
            <li>
              <label className='filter__form-check-label'>
                <input
                  type="checkbox"
                  name="all"
                  value="*"
                  checked={isCandidateChecked('*')}
                  onChange={handleCandidateSelection}
                />
                All
              </label>
            </li>
            {candidates.map((candidate) => (
              <li key={`candidate-filter-${candidate.id}`}>
              <label className='filter__form-check-label'>
                <input
                  type="checkbox"
                  name={`checkbox-${candidate.id}`}
                  value={candidate.id}
                  checked={isCandidateChecked(candidate.id)}
                  onChange={handleCandidateSelection}
                />
                {candidate.name}
              </label>
            </li>
            ))}
          </ul>
        </fieldset>
      </form>
    </section>
  )
}

export default Filter

