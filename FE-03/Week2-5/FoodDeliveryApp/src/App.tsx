import { createBrowserRouter, Outlet } from 'react-router-dom'
import BodyContainer from './components/BodyContainer'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import { Error } from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
// import Grocery from './components/Grocery'
import { lazy, Suspense } from 'react'

const Grocery =lazy(()=>import("./components/Grocery"))
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
  },{
    path:"/restaurants/:id",
    element:<RestaurantMenu/>
  },
  {
    path:"/grocery",
    element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>
  }
    ],
    errorElement:<Error/>
  },

])
export default App