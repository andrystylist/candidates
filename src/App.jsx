import { useEffect, useState } from 'react'
import CandidatesRM from './services/CandidatesRM'
import ContextCandidates from './Context/ContextCandidates'
import ListCandidates from './components/ListCandidates/ListCandidates'
import TotalVotes from './components/TotalVotes/TotalVotes'
import Filter from './components/Filter/Filter'
import CandidatesStats from './components/CandidatesStats/CandidatesStats'
import './App.scss'

function App() {
  const [candidates, setCandidates] = useState([])
  const [totalVotes, setTotalVotes] = useState(0)
  const [statsFormat, setStatsFormat] = useState('P') // P ó T
  const [allCandidateIds, setAllCandidateIds] = useState([])
  const [selectedCandidates, setSelectedCandidates] = useState([])

  useEffect(() => {
    CandidatesRM.getCandidates().then((characters) => {
      setCandidates(characters)
      
      // By default I'll show all the candidates stats
      const allIds = characters.map((candidate) => candidate.id)
      setAllCandidateIds(allIds)
      setSelectedCandidates(allIds)
    })
  }, [])



  return (
    <>
      <ContextCandidates.Provider
        value={{
          totalVotes,
          setTotalVotes,
          candidates,
          setCandidates,
          statsFormat,
          setStatsFormat,
          allCandidateIds,
          selectedCandidates,
          setSelectedCandidates,
        }}
      >
        <ListCandidates />
        <section className='app__dashboard'>
          <Filter />
          <section className='app__stats'>
            <TotalVotes />
            <CandidatesStats />
          </section>
        </section>
      </ContextCandidates.Provider>
    </>
  )
}
export default App
