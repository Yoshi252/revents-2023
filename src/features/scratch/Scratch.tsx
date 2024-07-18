import { Button } from "semantic-ui-react"
import { useAppDispatch, useAppSelector } from "../../app/store/store"
import { increment, decrement, incrementByAmount } from "./testSlice";

export default function Scratch() {
  const {data} = useAppSelector(state => state.test)
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Scratch Page</h1>
      <h3>The date is: {data}</h3>
      <Button onClick={() => dispatch(increment())} color='green' content='Increment'/>
      <Button onClick={() => dispatch(decrement())} color='red' content='Increment'/>
      <Button onClick={() => dispatch(incrementByAmount(5))} color='teal' content='Increment'/>
    </div>
  )
}