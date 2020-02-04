import React from 'react'
import Child from 'components/Child'
import { AppContext } from 'components/contexts'

class App extends React.Component {
  render () {
    console.log('App rendering')
    return (
      <AppContext.Provider value={{
        app: {
          appName: 'Context API Demo'
        }
      }}>
        <div>
          APP
          <Child />
        </div>
      </AppContext.Provider>
    )
  }
}

export default App
