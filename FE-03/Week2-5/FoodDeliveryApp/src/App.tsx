import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'
import About from './components/About'
const App = () => {
  return (
    <div className="App">
      <Header/>
      <BodyContainer/>
    </div>
  )
}


export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  }
])
export default App