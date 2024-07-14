import { useEffect, useState } from "react";

type limitState = {
  limit: number,
  offset: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'
const Pagination = () => {



  const [data, setData] = useState([]);
  const [getLimit, setGetLimit] = useState<limitState>({
    limit: 20,
    offset: 0
  })
  const totalPages: number = Math.ceil(data.length / getLimit.limit);
  const pages = [...Array(totalPages)]
  console.log(pages)
  const [limitedData, setLimitedData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  const moveHandler = (e) => {
    setCurrentPage(+ e.target.textContent - 1)
  }



  useEffect(() => {
    const getApiData = async () => {
      const resp = await fetch(url, {
        method: 'GET'
      })
      const ans = await resp.json()
      setData(ans)
      setLimitedData(ans.slice(getLimit.offset, getLimit.limit))
    }

    getApiData()
  }, [])
  useEffect(() => {
    setGetLimit((prev) => (
      {
        ...prev,
        offset: currentPage * prev.offset
      }
    ))
    setLimitedData(data.slice(currentPage * getLimit.limit, currentPage * getLimit.limit + getLimit.limit))
  }, [currentPage])

  return (
    <div>
      Pagination
      <ul>
        {
          limitedData.map((todo, idx) => {
            return (
              <li key={idx}>{todo.title}</li>
            )
          })
        }
      </ul>

      <div>
        {
          pages.map((item, idx: number) => {
            return (
              <span style={{ padding: '0.85rem', border: '2px solid gray' }} onClick={moveHandler} key={idx}>{idx + 1}</span>
            )
          })

        }
      </div>
    </div >
  )
}


export default Pagination
