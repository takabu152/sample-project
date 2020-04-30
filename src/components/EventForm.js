import React ,{useContext,useState} from 'react'
import {
  CREATE_EVENT,
  DELETE_ALL_EVENTS,
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

import AppContext from '../contexts/AppContext'
import {timeCurrentIso8601} from '../utils'

const EventForm = () => {
    //Appコンポーネントから渡されてくるものを利用するため、ここでの宣言をなくす。
    //const [state,dispatch]=useReducer(reducer,[])
    
    //prop経由だったstateとdispatchをコンテキストで受け取る 
    const {state,dispatch} = useContext(AppContext)
    
    const [title,setTitle] = useState('')
    const [body,setBody]=useState('')
  
    // イベントの追加処理のメソッド
    const addEvent = e => {
      //ボタンによる再描画をオフにする
      e.preventDefault()

      dispatch(
        {
          type:CREATE_EVENT,
          title,
          body
        }
      )

      dispatch(
        {
          type:ADD_OPERATION_LOG,
          description:'イベントを作成しました。',
          operatedAt:timeCurrentIso8601()
        }
      )

      setTitle('')
      setBody('')
    }
  
    const deleteAllEvents = e =>{
      //ボタンによる再描画をオフにする
      e.preventDefault()
  
      //確認メッセージを表示
      const result = window.confirm(`全てのイベントを削除します。本当に良いですか？`)
      
      if (result){
        dispatch({type:DELETE_ALL_EVENTS})
        dispatch({
          type:ADD_OPERATION_LOG,
          description:'全てのイベントを削除しました。',
          operatedAt:timeCurrentIso8601()
        })  
      }
    } 
    
      const deleteAllOperationLogs = e =>{
        //ボタンによる再描画をオフにする
        e.preventDefault()
    
        //確認メッセージを表示
        const result = window.confirm(`全ての操作ログを削除します。本当に良いですか？`)
        
        if (result){
          dispatch({type:DELETE_ALL_OPERATION_LOGS})
        }
      }
    
    //タイトルとボディが何かが空かどうかを判定し、追加ボタンの非活性するかどうかを決める。
    const unCreatable = title === '' || body === ''


    return (
    <>
    <h4>イベント作成フォーム</h4>
    <form>
        <div className="form-group">
            <label htmlFor="formEventTitle">タイトル</label>
            <input className="form-control" id="formEventTitle" value ={title} onChange={e => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="formEventBody">ボディー</label>
            <textarea className="form-control" id="formEventBody" value ={body} onChange={e => setBody(e.target.value)}/>
        </div>

        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.events.length === 0}>全てのイベントを削除する</button>    
        <button className="btn btn-danger" onClick={deleteAllOperationLogs} disabled={state.operationLogs.length === 0}>全ての操作ログを削除する</button>    

    
    </form>
    </>
    )
}

export default EventForm
