import { createAppSlice } from "store/createAppSlice"

// Начальное состояние для counter slice
const counterInitialState = {
  count: 0,      // общий счётчик (может использоваться для тестов или примеров)
  like: 0,       // количество лайков
  disLike: 0,    // количество дизлайков
  reset: false,  // флаг сброса (пока не используется в логике)
}

export const counterSlice = createAppSlice({
  // Уникальное имя slice (видно в Redux DevTools)
  name: "COUNTER",

  // Начальное состояние slice
  initialState: counterInitialState,

  // Reducers описывают, как изменяется state при определённых событиях
  reducers: {
    // Увеличивает общий счётчик на 1
    plus: state => {
      state.count = state.count + 1
    },

    // Уменьшает общий счётчик на 1
    minus: state => {
      state.count = state.count - 1
    },

    // Увеличивает количество лайков
    plusLike: state => {
      state.like = state.like + 1
    },

    // Увеличивает количество дизлайков
    plusDislike: state => {
      state.disLike = state.disLike + 1
    },

    // Сбрасывает лайки и дизлайки к начальному значению
    resetCount: state => {
      state.like = 0
      state.disLike = 0
    }
  },

  // Selectors используются для чтения данных из Redux store
  selectors: {
    // Возвращает значение общего счётчика
    count: state => {
      return state.count
    },

    // Возвращает текущее количество лайков
    like: state => {
      return state.like
    },

    // Возвращает текущее количество дизлайков
    disLike: state => {
      return state.disLike
    },

    // Возвращает состояние флага reset
    reset: state => {
      return state.reset
    },
  },
})

// Экспортируем actions для dispatch в компонентах
export const counterSliceActions = counterSlice.actions

// Экспортируем selectors для useAppSelector
export const counterSliceSelectors = counterSlice.selectors

