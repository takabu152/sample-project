import React,{useReducer} from 'react';

import EventForm from './EventForm'
import Events from './Events'

import AppContext from '../contexts/AppContext'

import reducer from '../reducers'

const App = () => {

  const [state,dispatch]=useReducer(reducer,[])

  console.log(state)

  return (
    <AppContext.Provider value ={{state,dispatch}}>
      <div className="container-fluid">
        <EventForm />
        <Events />
      </div>
    </AppContext.Provider>
  )
}

export default App;
