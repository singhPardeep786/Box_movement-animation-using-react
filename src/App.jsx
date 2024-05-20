import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'

const App = () => {

  const [valueX, setvalueX] = useState(0)
  const [valueY, setvalueY] = useState(0)
  const [rotate, setrotate] = useState(0)

  const randomX = gsap.utils.random(-500, 500, 10)
  const randomY = gsap.utils.random(-500, 200, 30)
  const rotateBox = gsap.utils.random(-360, 360, 20)

  const boxRef = useRef()
  
  useGSAP(()=>{
    gsap.to(boxRef.current, {
      x: valueX,
      y: valueY,
      rotate: rotate,
      duration: 1,
    })
  }, {scope: "main", dependencies: [valueX, valueY]})

  return (
    <>
      <main>
        <button onClick={()=>{
          setvalueX(randomX)
          setvalueY(randomY)
          setrotate(rotateBox)
        }}>Animate</button>
        <div ref={boxRef} className='box'></div>
      </main>
    </>
  )
}

export default App