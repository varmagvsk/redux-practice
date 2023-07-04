import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'

function App() {

  
  const dispatch = useDispatch();
  const increment = () =>{
    dispatch({type:'INC'})
  }

  const decrement = () =>{
    dispatch({type:'DEC'})
  }

  const addmore = () => {
    dispatch({type:'ADD',payload:10})
  }

  const counter = useSelector((state)=>state.counter)

  return (
    <div>
    <h2>Counter App</h2>
    <p>{counter}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={addmore}>Add 10 more</button>
    </div>
  );
}

export default App;
