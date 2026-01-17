import Button from "components/Button/Button"
import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/pedux/counterSlice/couterSlice"
import "./styles.css"


function Counter() {
  // не принимает аргументов, а просто нам функцию dispatch ,
  //которая будет передавать наши действия в хранилище Redux.
  const dispatch = useAppDispatch()

  // Получаем текущее значение счетчика из состояния Redux с помощью селектора.
  // Таким образом подписываемся на изменения этого значения в хранилище.
  const count = useAppSelector(counterSliceSelectors.count)

  const onMinus = () => {
    dispatch(counterSliceActions.minus())
  }

  const onPlus = () => {
    dispatch(counterSliceActions.plus())
  }

  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  )
}

export default Counter
