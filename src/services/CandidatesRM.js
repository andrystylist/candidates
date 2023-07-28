class CandidatesRM {
  static getCandidates() {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => data.results.slice(0, 4).map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
        species: character.species,
        votes: 0,
      })))
    // .then((result) => console.log(result) )
  }
}

export default CandidatesRM


