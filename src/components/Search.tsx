import { useEffect, useRef, useState } from "react"



const fruits = ['Apple', 'Pine Apple', 'Carrot', 'Beetroot', 'dnager', 'egglet', 'Lorem', 'ipsum', 'dolor'];
const makeBolder = (x: string) => {
  return (
    <span style={{ fontWeight: 'bolder', background: 'purple' }}>{x}</span>
  )
}
const matchChars = (item: string, search: string) => {
  const final = []
  let i = 0;
  let j = 0;
  while (j < item.length) {
    if (i == search.length || (i < search.length && item[j] != search[i])) {
      i == 0;
    }
    if (item[j].toLowerCase() == search[i]) {
      final.push(makeBolder(item[j]))
      i += 1;
    } else {
      final.push(item[j]);
    }
    j += 1;
  }
  return final;
};

console.log(matchChars('appple', 'abcd'))

const Search = () => {
  const inputRef = useRef(null)
  const [search, setSearch] = useState('');
  const [filteredVals, setFilteredVals] = useState(fruits)
  const filteredItems = filteredVals.filter((item) => {
    return item.toLowerCase().includes(search.toLowerCase());

  })

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key == '/') {
        inputRef?.current.focus();
        console.log(inputRef?.current)
      }
    }

    window.addEventListener('keydown', handler)
    return (() => {
      removeEventListener('keydown', handler)
    })
  }, [])

  return (
    <div className="searchContainer">
      <input type='text' placeholder="press ctrl + / to start typing" onChange={(e) => setSearch(e.target.value)} ref={inputRef} />
      {
        filteredItems.map((item, idx) => {
          return (
            <p key={idx}>{matchChars(item, search)}</p>
          )
        })
      }
    </div>
  )
}

export default Search;
