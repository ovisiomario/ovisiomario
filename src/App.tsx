import { useState } from 'react'
import Hero from './components/Hero'
import Methodology from './components/Methodology'
import Responsibilities from './components/Responsibilities'
import Portfolio from './components/Portfolio'
import './App.css'

function App() {
  const [isProductManagerView, setIsProductManagerView] = useState(false)

  const toggleView = () => {
    setIsProductManagerView(!isProductManagerView)
  }

  return (
    <div className={`App ${isProductManagerView ? 'pm-view' : 'user-view'}`}>
      {/* Fixed Toggle Button */}
      <div className="fixed-toggle">
        <div className="toggle-container">
          <button
            className={`toggle-btn ${isProductManagerView ? 'active' : ''}`}
            onClick={toggleView}
            data-label={isProductManagerView ? 'PM VIEW' : 'USER VIEW'}
          >
          </button>
        </div>
        <div className="toggle-hint">
          {!isProductManagerView 
            ? "👆 Toggle to see my PM thinking" 
            : "🧠 PM mode active"}
        </div>
      </div>

      <Hero isProductManagerView={isProductManagerView} />
      <Methodology isProductManagerView={isProductManagerView} />
      <Responsibilities isProductManagerView={isProductManagerView} />
      <Portfolio isProductManagerView={isProductManagerView} />
    </div>
  )
}

export default App