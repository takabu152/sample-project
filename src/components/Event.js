import React,{useContext} from 'react'
import {DELETE_EVENT, ADD_OPERATION_LOG} from '../actions'
import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({event}) => {
  const {dispatch} = useContext(AppContext)
  const handleClickDeleteButton = id_ =>{
    const result = window.confirm(`イベントid=${event.id}を本当に削除してもよろしいですか？`)
    if (result)
    {
      dispatch({type:DELETE_EVENT,id:event.id})}
      dispatch({
        type:ADD_OPERATION_LOG,
        description:`イベントID=${event.id}を削除しました。`,
        operatedAt:timeCurrentIso8601()
      })
    }
  
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button type="button" className ="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
