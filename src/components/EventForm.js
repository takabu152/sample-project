import React ,{useContext,useState} from 'react'
import {CREATE_EVENT,DELETE_ALL_EVENTS} from '../actions'

import AppContext from '../contexts/AppContext'


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
      console.log({title,body})
      dispatch(
        {
          type:CREATE_EVENT,
          title,
          body
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
      
      if (result) dispatch({type:DELETE_ALL_EVENTS})
  
    }
  
    //タイトルとボディが何かが空かどうかを判定し、追加ボタンの非活性するかどうかを決める。
    const unCreatable = title === '' || body === ''
  
    console.log(state)

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
        <button className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>全てのイベントを削除する</button>    
    </form>
    </>
    )
}

export default EventForm
