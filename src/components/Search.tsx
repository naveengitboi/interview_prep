import { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="searchContainer">
      <input type='text' onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default Search;
