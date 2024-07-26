import { getArrayFrom } from "./GetListFrom"
import { users } from "./data"

const CoreConcepts = () => {
  getArrayFrom(users, ['name', 'gender'], true)

  return (
    <h1>Core Concepts. Console it</h1>
  )
}


export default CoreConcepts

