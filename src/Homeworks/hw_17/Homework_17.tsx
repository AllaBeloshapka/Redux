
import Feedback from "components/Feedback/Feedback"
import { HwPageWrapper } from "./styles"


function Homework_17() {
  return (
  <HwPageWrapper>
    <Feedback 
      like={0} 
      dislike={0} 
      onLike={() => console.log("Liked")} 
      onDislike={() => console.log("Disliked")} 
      resetResults={() => console.log("Results reset")} 
    />
  </HwPageWrapper>
  )
}

export default Homework_17
