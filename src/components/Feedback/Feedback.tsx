import Button from "components/Button/Button";
import "./styles.css";

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/pedux/counterSlice/couterSlice"

function Feedback() {

const dataDispatch = useAppDispatch();

const likeCounter = useAppSelector(counterSliceSelectors.like);
const disLikeCounter = useAppSelector(counterSliceSelectors.disLike);

  const handleClick  = () => {
    dataDispatch(counterSliceActions.plus("like"))
  }
  const handleClick  = () => {
    dataDispatch(counterSliceActions.plus("disLike"))
  }


  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={handleClick } />
          <p className="count">{likeCounter}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={handleClick } />
          <p className="count">{disLikeCounter}</p>
        </div>
      </div>
      {/* <Button name="Reset Results" onClick={resetResults} /> */}
    </div>
  );
}

export default Feedback;
