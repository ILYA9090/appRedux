import React from 'react'
import { useState, useEffect } from 'react'
const Clock = () => {
    const [clock, setClock] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
          setClock(new Date());
        }, 1000);
      });
  return (
    <div className="Clock">
          <h1>{clock.toLocaleTimeString()}</h1>
        </div>
  )
}

export default Clock;
