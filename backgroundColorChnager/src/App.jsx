import { useState } from "react"

function App() {
  const [color, setColor] = useState('black')

  return (
    <>
    <div className="w-full h-screen" style={{backgroundColor: color}} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-500 px-3 py-2 rounded-3xl"> 
        <button onClick={() => setColor('maroon')} className="outline-none px-4 py-1 rounded-full text-orange-100 shadow-large" style={{backgroundColor: 'maroon'}}>Maroon</button>
        <button onClick={() => setColor('aqua')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'aqua'}}>Aqua</button>
        <button onClick={() => setColor('lavender')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'lavender'}}>Lavender</button>
        <button onClick={() => setColor('teal')} className="outline-none px-4 py-1 rounded-full text-orange-100 shadow-large" style={{backgroundColor: 'teal'}}>Teal</button>
        <button onClick={() => setColor('violet')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'violet'}}>Violet</button>
        <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'orange'}}>Orange</button>
        <button onClick={() => setColor('indigo')} className="outline-none px-4 py-1 rounded-full text-orange-100 shadow-large" style={{backgroundColor: 'indigo'}}>Indigo</button>
        <button onClick={() => setColor('tan')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'tan'}}>Tan</button>
        <button onClick={() => setColor('gold')} className="outline-none px-4 py-1 rounded-full text-orange-950 shadow-large" style={{backgroundColor: 'gold'}}>Golden</button>
        <button onClick={() => setColor('brown')} className="outline-none px-4 py-1 rounded-full text-orange-100 shadow-large" style={{backgroundColor: 'brown'}}>Brown</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
