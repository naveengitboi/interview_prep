import {useState} from 'react'
const DisableBtn = () => {
  const [disabledBtn, setDisabledBtn] = useState(true)
  const ChangeHandler = (e) => {
        if(e.target.value.length > 0){
      setDisabledBtn(false)
    }
    else{
      setDisabledBtn(true)
    }
  }

return(
    <div>
        <input type='text' onChange={ChangeHandler} />
      <button disabled={disabledBtn}>Verify</button>
    </div>
  )
}

export default DisableBtn
