import { useState, useEffect } from 'react'
import movieList from './data/movie'


function App() {

  const [movie] = useState(movieList)
  const [filteredMovie, setFilteredMovie] = useState(movie)
  const [searchCategory, setSearchCategory] = useState('')

  useEffect(() => {

    let updateMovie = movie

    if (searchCategory !== '') {
      updateMovie = updateMovie.filter(element => element.genre === searchCategory)
    }

    setFilteredMovie(updateMovie)
  }, [searchCategory, movie])

  return (
    <>
      <h1>Lista Film</h1>
      <section>
        <label>Cerca per generi</label>
        <div>
          <select value={searchCategory} onChange={e => setSearchCategory(e.target.value)}>
            <option value="">----</option>
            <option>Fantascienza</option>
            <option>Thriller</option>
            <option>Romantico</option>
            <option>Azione</option>
          </select>
        </div>
      </section>
      <section>
        {filteredMovie.map((element) => <div key={element.id}>
          <h4>{element.title}</h4>
          <p>Genere: {element.genre}</p>
        </div>)}
      </section>
    </>
  )
}

export default App
