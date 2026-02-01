
//! jsx is html like syntax not html in javascript
// ! if we want to write multiple lines of jsx we have to wrap it in parentheses

import Heading from "./components/Heading"

// ! we can only return one parent element in jsx if we want to return multiple elements we have to wrap them in a parent element like div or fragment
const App = () => {
  return (
    <div><Heading/></div>
  )
}

export default App