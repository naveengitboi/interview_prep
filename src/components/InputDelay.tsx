import { ChangeEventHandler, useState } from "react"
import useDebounce from '../customHooks/useDebounce';
import styled from 'styled-components'


const Header = styled.span`
  font-size:0.5rem;
  color:gray;

`



const InputDelay = (): React.ReactElement => {
  const [inputVal, setInputVal] = useState('');
  const [delay, setDelay] = useState(350)
  const changeHandler = (e): void => {
    setInputVal(e.target.value)
  }
  const debounced = useDebounce(inputVal, delay)




  return (
    <div style={{ width: '300px' }}>
      <input type='text' onChange={changeHandler} style={{ width: '100%', padding: '0.5rem ' }} />

      <div style={{ border: '2px solid gray', margin: '1rem 0rem', padding: '0.75rem' }}>
        <Header>delay: {delay}</Header>
        <br />
        <input type='text' placeholder="delay" onChange={(e) => setDelay(+e.target.value)} />

        {debounced}
      </div>
    </div >
  )
}

export default InputDelay
