import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/config/ui";
import { decrementReducers, incrementReducers } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(incrementReducers());
  };
  const decrement = () => {
    dispatch(decrementReducers());

  };

  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button data-testid='increment-btn' onClick={increment}>increment</Button>
      <Button data-testid='decrement-btn' onClick={decrement}>decrement</Button>
    </div>
  );
};

export default Counter;
