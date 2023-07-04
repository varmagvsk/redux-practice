import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux'
import { actions } from './reducers/counterReducer';


function App() {
  
  const dispatch = useDispatch();
  //console.log(state)
  const counter = useSelector((state)=>state.counter)

  const increment = ()=>{
    dispatch(actions.increment())
  }
  const decrement = ()=>{
    dispatch(actions.decrement())
  }
  const addmore = ()=>{
    dispatch(actions.addmore(13))
  }

  return (
    <div >
      <h2>Counter App using toolkit</h2>
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addmore}>addmore</button>
    </div>
  );
}

export default App;
