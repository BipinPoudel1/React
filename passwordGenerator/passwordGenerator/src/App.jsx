import { useCallback, useState, useEffect, useRef } from 'react'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState()
  const [numbersIncluded, setNumbersIncluded] = useState(true)
  const [charactersIncluded, setCharactersIncluded] = useState(true)

  //Ref 
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numbersIncluded)
      alphabets += "0123456789"

    if (charactersIncluded)
      alphabets += "~`!@#$%^&*()_-+={[}]:;<,>.?/"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * alphabets.length + 1))
      pass += alphabets.charAt(char)
    }
    setPassword(pass)
  }, [length, numbersIncluded, charactersIncluded, setPassword])

  useEffect(() => { passwordGenerator() }, [length, numbersIncluded, charactersIncluded, passwordGenerator])

  const copyPassword = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='flex'>
        <div className='h-80 w-150 p-5 mt-50 ml-20'>
          <div>
            <h1 className='font-bold text-5xl text-white'>PassGen</h1>
            <h2 className='font-bold text-3xl text-white'>A STRONG PASSWORD GENERATOR</h2>
          </div>

          <div className='mt-10 flex-column'>
            <label htmlFor="length" className='text-xl text-white'>Length: {length}</label><br />
            <input type="range" name="length" id="length" min={8} max={30} value={length} className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
          </div>

          <div className='mt-4'>
            <input type="checkbox" name="numbers" id="numbers" defaultChecked={numbersIncluded}
              onChange={() => {
                setNumbersIncluded((prev) => !prev)
              }} />
            <label htmlFor="numbers" className='text-xl text-white'> Numbers </label>
          </div>

          <div>
            <input type="checkbox" name="special_characters" id="special_characters" defaultChecked={charactersIncluded}
              onChange={() => {
                setCharactersIncluded((prev) => !prev)
              }} />
            <label htmlFor="special_characters" className='text-xl text-white'> Characters </label>
          </div>

          <button className='bg-white mt-5 h-15 w-60 cursor-pointer text-xl font-bold text-black rounded-sm hover:text-blue-400'
            onClick={passwordGenerator}>Generate Password</button>

        </div>

        <div className='h-80 w-150 p-5 mt-50 ml-20'>
          <div className='mt-25 ml-50'>
            <h1 className='text-3xl text-lime-400' ref={passwordRef}>{password}</h1>
            <button className='bg-white mt-4 h-10 w-20 cursor-pointer hover:text-blue-400 '
              onClick={copyPassword}>Copy</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
