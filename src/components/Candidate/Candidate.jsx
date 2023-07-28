/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import ContextCandidates from '../../Context/ContextCandidates';
import './Candidate.scss'

function Candidate({id, name, image, species, votes}) {
  const { candidates, setCandidates, setTotalVotes } = useContext(ContextCandidates)
  
  const handleVote = (candidateId) => {
    setTotalVotes((totalVotes) => ++totalVotes)
    setCandidates(candidates.map((candidate) => {
      if (candidate.id === candidateId) {
        ++candidate.votes
      }
      return candidate
    }))
  }

  return (
    <section className='candidate'>
      <img
        className='candidate__img'
        src={image}
        alt="Candidate Image"
      />
      <h2 className='candidate__title'>
        {name}
      </h2>
      <h3 className='candidate__subtitle'>
        {species}
      </h3>
      <button
        type='button'
        className='candidate__vote-btn'
        aria-label={`Vote for ${name}`}
        onClick={() => handleVote(id)}
      >
        Vote ({votes})
      </button>
    </section>
  )
}

export default Candidate



  
