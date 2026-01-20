import { createAppSlice } from "store/createAppSlice"

const counterInitialState = {
  count: 0,
  like: 0,
  disLike: 0,
  reset: false, // Added reset property
}

export const counterSlice = createAppSlice({
  // name - это имя для slice, которое будет использоваться в Redux DevTools и других местах.
  name: "COUNTER",
  // initialState - это state по умолчанию для этого slice.
  initialState: counterInitialState,
  // reducers - это объект, содержащий редьюсеры для управления состоянием.
  reducers: {
    plus: state => {
      state.count = state.count + 1 // Увеличение счетчика на 1
    },
    minus: state => {
        state.count = state.count -1; // Уменьшение счетчика на 1
    },
    plusLike: state => {
      state.like = state.like + 1;
    },
    plusDislike: state => {
      state.disLike = state.disLike + 1;
    },
    resetCount: state => {
      state.like = 0;
      state.disLike = 0;
    }
  },
  selectors: {
    // Селектор
    count: state => {
      return state.count
    },
    like: state => {
      return state.like
    },
    disLike: state => {
      return state.disLike
    },
    reset: state => {
      return state.reset 
    },

  },
})

// Экспортируем действия и селекторы для использования в компонентах
// couterSlice сам создает объект действий на основе определенных редьюсеров
export const counterSliceActions = counterSlice.actions
// Экспортируем действия и селекторы для использования в компонентах
export const counterSliceSelectors = counterSlice.selectors
