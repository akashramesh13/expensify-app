import { createStore } from "redux";

const countReducer = (
  state = {
    count: 0,
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + action.incrementBy,
      };
    }
    case "DECREMENT": {
      const decrementBy = action.decrementBy ?? 1;
      return {
        count: state.count - decrementBy,
      };
    }
    case "RESET": {
      return {
        count: 0,
      };
    }
    case "SET": {
      return {
        count: action.count,
      };
    }
    default:
      return state;
  }
};

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
  count: 0,
});

store.dispatch(
  incrementCount({
    incrementBy: 5,
  })
);

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount(19));

store.dispatch(setCount({ count: 100 }));
