import React from 'react'
import { useContext } from 'react'
import Candidate from '../Candidate/Candidate';
import ContextCandidates from '../../Context/ContextCandidates'
import './ListCandidates.scss'

function ListCandidates() {
  const {candidates} = useContext(ContextCandidates)

  return (
    <section className='candidates-list'>
      <ul className='candidates-list__list'>
        {candidates.map((character) => (
          <li
            className='candidates-list__list-item'
            key={`character-${character.id}`}
          >
            <Candidate
              id={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              votes={character.votes}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ListCandidates