import React,{useState} from 'react';

const App = props => {

  // const initialStates={
  //   name:'',
  //   price:1000
  // }

  const [name,setName]=useState(props.name)
  const [price,setPrice]=useState(props.price)

  const reset = () => {
    setName(props.name)
    setPrice(props.price)
  }

  return (
    <React.Fragment>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <button onClick={() => setPrice(price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)}></input>
    
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
