import React from 'react'
import { useRouteError } from 'react-router-dom'
// useRouteError
const Error = () => {
    const err=useRouteError()
  return (
    // @ts-ignore
    <div>{err.status}:{err.statusText}</div>
  )
}

export default Error