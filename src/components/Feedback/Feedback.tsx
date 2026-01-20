import Button from "components/Button/Button";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/redux/counterSlice/couterSlice"

function Feedback() {

const dataDispatch = useAppDispatch();

const likeCounter = useAppSelector(counterSliceSelectors.like);
const disLikeCounter = useAppSelector(counterSliceSelectors.disLike);
// const resetCounter = useAppSelector(counterSliceSelectors.reset);

  const likeClick  = () => {
    dataDispatch(counterSliceActions.plusLike())
  }
  const dislikeClick  = () => {
    dataDispatch(counterSliceActions.plusDislike())
  }
  
  const resetResults  = () => {
    dataDispatch(counterSliceActions.resetCount())
  }

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={likeClick } />
          <p className="count">{likeCounter}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={dislikeClick } />
          <p className="count">{disLikeCounter}</p>
        </div>
      </div>
      
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
