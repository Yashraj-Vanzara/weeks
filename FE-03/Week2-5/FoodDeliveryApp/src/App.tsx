import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import { Error } from './components/Error'
const App = () => {
  return (
    <div className="App">
      <Header/>
     <Outlet/>
    </div>
  )
}


export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element: <BodyContainer/>
      },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
    ],
    errorElement:<Error/>
  },

])
export default App