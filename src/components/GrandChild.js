import React, { useContext } from 'react'
import { AppContext } from './contexts'

const Child = () => {
  console.log('AppContext', AppContext)
  const appContext = useContext(AppContext)
  return (
    <div>
      GrandChild
      {JSON.stringify(appContext)}
    </div>
  )
}

export default Child
