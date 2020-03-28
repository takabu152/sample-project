import React,{useState} from 'react';

const App = () => {
  const [count,setCount] = useState(0)
  
  const increment = () => setCount(count +1)
  const decrement = () => setCount(count -1)

  //setCountの引数には今の値を受け取ることができる
  //setCountには関数をかくことができる。その関数の引数には今の値を渡すことができる
  const increment2 = () => setCount((previousCount)=>previousCount+1)
  const decrement2 = () => setCount((previousCount)=>previousCount-1)
  const reset = () => setCount(0)
  const double =() => setCount(previousCount=>previousCount*2)

  const divide3 = () => setCount(previousCount => 
    // if (previousCount % 3 === 0)
    // {
    //   return previousCount/3
    // }else{
    //   return previousCount
    // }
     previousCount % 3 === 0 ? previousCount/3 : previousCount
  )

  return (
  <React.Fragment>
    <div>count : {count}</div>
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
    <div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
    </div>
    <div>
      <button onClick={reset}>Reset</button>
    </div>
    <div>
      <button onClick={double}>x2</button>
    </div>
    <div>
      <button onClick={divide3}>3の倍数の時だけ３でわる</button>
    </div>
    

  </React.Fragment>
  )
}

export default App;
