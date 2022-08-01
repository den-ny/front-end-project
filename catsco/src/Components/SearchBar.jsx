import { useState } from 'react'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  
  return (
    <div id='search-bar-container'>
      <form>
        <input
          id='search-box'
          onChange={(e) => {
            setSearchTerm(e.target.value)
            console.log(searchTerm)
          }}
        />
        <button id='search-button' type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
