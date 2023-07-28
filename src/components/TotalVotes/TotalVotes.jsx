import React from 'react'
import { useContext } from 'react'
import ContextCandidates from '../../Context/ContextCandidates'
import './TotalVotes.scss'

function TotalVotes() {
  const { totalVotes } = useContext(ContextCandidates)
  return (
    <section className='total-votes'>
      <h3 className='total-votes__title'>Total Votes</h3>
      <p className='total-votes__result'>{totalVotes}</p>
    </section>
  )
}

export default TotalVotes

