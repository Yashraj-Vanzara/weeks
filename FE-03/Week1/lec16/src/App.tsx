
import './App.css'
import Chaicard from './components/Chaicard'
import Counter from './components/Counter'

function App() {
  

  return (
    <>
      
      <h1>Vite + React</h1>
      <Chaicard name="Chai" price={10} isspecial={true} />
      <Counter/>
    
    </>
  )
}

export default App
