import { useState } from 'react' 
import './App.css'

// Strictly defining props types for components
type SliderProps = {
  tempo : number
  onTempoChange: (bpm : number) => void
}

type TempoDisplayProps = {
  tempo : number
}

type StartButtonProps = {
  on : boolean
  onToggle: () => void
}

// Component to display current tempo
function TempoDisplay({tempo} : TempoDisplayProps) {
  return(
    <div>
      <h2>{tempo} BPM</h2>
    </div>
  )
}

// Component to modify current tempo
function Slider({ tempo, onTempoChange } : SliderProps) {
  return(
    <div className="slidercontainer">
      <input type="range" min="40" max="300" 
      value={tempo} className="slider" id="metSlider" 
      onChange={(e) => onTempoChange(Number(e.target.value))}/>
    </div>
  )
}

function StartButton({ on, onToggle } : StartButtonProps) {
  return(
    <button className="startbutton" type="button" onClick={onToggle}>
      {on ? "Stop" : "Start"}
    </button>
  )
}

export default function App() {
  // Defining state variable tempo and function to update it settempo (default value 80)
  const [tempo, setTempo] = useState(80)
  const [status, setStatus] = useState(false)
  
  // Rendering complete app
  return (
    <div>
      <h1>Click</h1>
      <TempoDisplay tempo={tempo}/>
      <Slider tempo={tempo} onTempoChange={setTempo}/>
      <StartButton on={status} onToggle={() => setStatus(prev => !prev)}/>
    </div>
  )
}

