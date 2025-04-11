import { useState } from 'react'
import reactLogo from './assets/synagent-logo.png'
import viteLogo from '/synagent-logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>

        <a href="https://syn-agent.app" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://syn-agent.app" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Your AI Assistant for Business Efficiency</h1>
      
      <div className="card">
        
      
      </div>
      <p className="read-the-docs">
      Launch your own AI agent to automate workflows, respond instantly, and stay productive.
        
      </p>
      <a
            className="App-link"
            href="https://youtube.com/@synagent?si=0DcaXGOLP91eL03E"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Video
          </a>
    </>
  )
}
export default App

