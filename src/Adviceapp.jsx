import {useState} from 'react'
import profiles from './assets/icon.jpg'

const Adviceapp = () => {
    const [advice, setadvice] = useState("");
    async function Getadvice(){
     const res=await fetch("https://api.adviceslip.com/advice");
     const data =await res.json();
     setadvice(data.slip.advice);
    }
  return (
    <div>
      <nav>
        <table>
          <tbody>
            <td><img src={profiles} alt="" /></td>
            <td><h1 className='head'>ADVICE!!!</h1></td>
          </tbody>
        </table>
      </nav>
      <h1 className='center'>{advice}</h1>
      <button onClick={Getadvice}>Get Advice</button>
      <p>&copy; Designed by THINESH</p>
    </div>
  )
}

export default Adviceapp
