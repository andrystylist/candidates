import React, { useContext } from 'react'
import ContextCandidates from '../../Context/ContextCandidates'
import './CandidatesStats.scss'

function CandidatesStats() {
  const { candidates, totalVotes, statsFormat, selectedCandidates } = useContext(ContextCandidates)

  const calcStats = (votes) => {
    if (statsFormat === 'T') {
      return `${votes} vote${(votes>1 && votes!=0)?'s':''}`
    }

    if (totalVotes === 0) {
      return '0%'
    }

    const perc = votes*100/totalVotes
    return `${perc.toFixed(2)}%`
  }

  const finalSelected = candidates.filter((candidate) => {
    return selectedCandidates.includes(candidate.id)
  })

  return (
    <section className='candidates-stats'>
      <h2 className='candidates-stats__title'>Votes Stats</h2>
      <ul className='candidates-stats__list'>
        {finalSelected.map((candidate) => (
          <li className='candidates-stats__list-item' key={`candidates-stats-${candidate.id}`}>
            <strong>
              {candidate.name}:
            </strong> {calcStats(candidate.votes)}
          </li>
        ))}
        {(finalSelected.length === 0) && (
          <li>
            No Candidates Selected
          </li>
        )}
      </ul>
    </section>
  )
}

export default CandidatesStats