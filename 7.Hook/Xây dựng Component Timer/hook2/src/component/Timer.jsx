import React, { useEffect, useState } from 'react'

export default function Timer() {
    let [time, setTime] = useState(10);

    useEffect(() => {
        let countDown = setInterval(() => {
            if (time !== 0) {
                setTime(time--)
            } else {
                alert("Time's up");
                clearInterval(countDown);
            }
        }, 1000)
        return () => clearInterval(countDown)
    },[])
    return (
        <div>
            <p>Count down from {time}</p>
        </div>
    )
}
