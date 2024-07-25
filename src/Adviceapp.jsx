import {useState} from 'react'

const Adviceapp = () => {
    const [advice, setadvice] = useState("ONNAKKU ENNA ADVICE NU PAPOM AAH......");
    async function Getadvice(){
     const res=await fetch("https://api.adviceslip.com/advice");
     const data =await res.json();
     setadvice(data.slip.advice);
    }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={Getadvice}>Get Advice</button>
    </div>
  )
}

export default Adviceapp
