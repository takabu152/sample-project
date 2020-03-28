import React,{useEffect,useState} from 'react';

const App = props => {

  const [state,setState] = useState(props)

  //レンダリングの後に実行される
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate')
  })

  //初回レンダリングのしたい場合は第２引数に空の配列を渡す
  useEffect(() => {
    console.log('This is like componentDidMount')
  },[])

  //特定のものが変更された時だけ実行されるようにする
  useEffect(() => {
    console.log('This calllback is for name only')
  },[state.name])

  
  return (
    <React.Fragment>
      <p>現在の{state.name}は、{state.price}円です。</p>
      <button onClick={() => setState({...state,price:state.price +1})}>+1</button>
      <button onClick={() => setState({...state,price:state.price -1})}>-1</button>
      <button onClick={() => setState(props)}>Reset</button>
      <input value={state.name} onChange={e => setState({...state,name : e.target.value})}></input>
    
    </React.Fragment>
  )
}

//Appの引数として渡す。
//ここはdefaultPropsって書かないと引き渡せないようだ
App.defaultProps = {
  name:'',
  price:1000
}

export default App;
