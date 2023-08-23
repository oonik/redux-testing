import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../../redux/counterSlice";

const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    
    return (
        <div>
            <h1>counter</h1>
            <h2>{count}</h2>

            <button onClick={()=>dispatch(increment()) } 
            className="btn btn-primary">increment</button>

            <button onClick={()=>dispatch(incrementByValue(5)) } 
            className="btn btn-primary">increment by 5</button>

            <button onClick={()=>dispatch(decrement()) } 
            className="btn btn-primary">increment</button>
        </div>
    );
};

export default Counter;