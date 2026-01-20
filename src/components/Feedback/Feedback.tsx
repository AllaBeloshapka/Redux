import Button from "components/Button/Button";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counterSlice/couterSlice"

function Feedback() {

  // Получаем dispatch для отправки actions в Redux
  const dataDispatch = useAppDispatch();

  // Получаем текущее количество лайков из store
  const likeCounter = useAppSelector(counterSliceSelectors.like);

  // Получаем текущее количество дизлайков из store
  const disLikeCounter = useAppSelector(counterSliceSelectors.disLike);

  // Увеличивает количество лайков на 1
  const likeClick = () => {
    dataDispatch(counterSliceActions.plusLike())
  }

  // Увеличивает количество дизлайков на 1
  const dislikeClick = () => {
    dataDispatch(counterSliceActions.plusDislike())
  }
  
  // Обнуляет результаты (лайки и дизлайки)
  const resetResults = () => {
    dataDispatch(counterSliceActions.resetCount())
  }

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={likeClick} />
          {/* Отображаем текущее количество лайков */}
          <p className="count">{likeCounter}</p>
        </div>

        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={dislikeClick} />
          {/* Отображаем текущее количество дизлайков */}
          <p className="count">{disLikeCounter}</p>
        </div>
      </div>

      {/* Кнопка сброса всех результатов */}
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;

