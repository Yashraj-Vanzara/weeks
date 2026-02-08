import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const err=useRouteError()
    console.log(err)
  return (<>
    <div>Error</div>
    <h1>Page not found</h1>
    <p>{err.status}:{err.statusText}</p>
</>
  )
}
