import React,{useState} from 'react';

const App = props => {

  // useStateにはオブジェクトが渡せる。
  const [state,setState] = useState(props)

  // const [name,setName]=useState(props.name)
  // const [price,setPrice]=useState(props.price)
  
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
