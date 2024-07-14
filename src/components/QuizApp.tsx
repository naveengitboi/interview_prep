import { useEffect, useState } from "react"


const shuffleArray = (arr) => {
  const store = []
  const final = []
  while (store.length != arr.length) {
    const random = Math.floor(Math.random() * (arr.length))
    console.log(random)
    if (!store.includes(random)) {
      store.push(random)
      final.push(arr[random])
    }
  }
  return final
}


const trivia = [
  {
    question: "abcd _ ?",
    options: [
      {
        value: 'e',
        isChecked: false,
        isCorrectAns: true
      },
      {
        value: 'f',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'g',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'h',
        isChecked: false,
        isCorrectAns: false
      }
    ]
  },
  {
    question: "abcd _ ?",
    options: [
      {
        value: 'e',
        isChecked: false,
        isCorrectAns: true
      },
      {
        value: 'f',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'g',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'h',
        isChecked: false,
        isCorrectAns: false
      }
    ]
  },
  {
    question: "abcd _ ?",
    options: [
      {
        value: 'e',
        isChecked: false,
        isCorrectAns: true
      },
      {
        value: 'f',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'g',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'h',
        isChecked: false,
        isCorrectAns: false
      }
    ]
  },
  {
    question: "abcd _ ?",
    options: [
      {
        value: 'e',
        isChecked: false,
        isCorrectAns: true
      },
      {
        value: 'f',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'g',
        isChecked: false,
        isCorrectAns: false
      },
      {
        value: 'h',
        isChecked: false,
        isCorrectAns: false
      }
    ]
  }
]

function Question(props) {
  console.log(props)
  const { qData } = props
  const options = shuffleArray(qData.options)
  const onChangeHandler = (e) => {
    options.map((opt) => {
      if (opt.value == e.target.name) {
        opt.isChecked = true
      }
    })
  }
  console.log(options)
  return (
    <div>
      <h1>{qData.question}</h1>
      <ul>
        {
          options.map((opt) => (
            <li> <input type='checkbox' name={opt.value} checked={opt.isChecked} onChange={onChangeHandler} /> {opt.value}</li>
          ))
        }
      </ul>
    </div>
  )
}

const QuizApp = () => {
  const [data, setData] = useState(trivia)
  return (
    <div>
      <div>
        {
          data.map((que) => {
            return (< Question qData={que} />)
          })
        }
      </div>
      <button>Submit</button>
    </div>
  )
}


export default QuizApp
