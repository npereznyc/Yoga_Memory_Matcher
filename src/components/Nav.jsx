import React from "react"
import { useState } from "react"

function Nav() {
    const [seconds, setSeconds] = useState(0)
    const [time, setTime] = useState(0)
    const [start, setStart] = useState(false)

    const startTimer = () =>{
        setInterval(()=>{
            setSeconds(seconds => seconds + 1)
        }, 1000)

        document.querySelector('.start-btn').setAttribute('disabled', 'true')
    }

    const currentCount = seconds

    return (
        <>
        <button className='start-btn' onClick={startTimer}>Start</button>
        <h4>Time: <span id='counter'>{currentCount}</span></h4>
        <h4>Score: <span>0</span></h4>
        </>
    )
}

export default Nav