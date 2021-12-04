import React from 'react';
import { useEffect, useState } from 'react';
// import './App.css';
// import '../styles/App.css'

const Clock = () => {
  const init = new Date()
  const [date, setDate] = useState(init)

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    const timerID = setTimeout(() => tick(), 1000)
    return () => {
      clearTimeout(timerID)
    }
  }, [date])

  return date.toLocaleTimeString()
}


function App() {
  return (
    <main>
      <h1>
        <code>EYE CANDY</code>
      </h1>
      <p>
        <a href="/">
          <code2>AI POWERED EYE CANDY</code2>
      <br />
          <code2>Coming Soon</code2>
        </a>
      </p>
      <br />
      <code2>
        <Clock></Clock>
      </code2>
    </main>
  );
}

export default App;