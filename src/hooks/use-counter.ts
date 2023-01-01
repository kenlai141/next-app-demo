import { useCallback, useEffect, useReducer } from 'react';

interface CounterState {
  label: string;
  count: number;
  isDisabled: boolean;
  counter: any;
}

enum CounterActionType {
  UPDATE_COUNT,
  RESET_COUNT,
}

interface CounterAction {
  type: CounterActionType;
  payload?: Partial<CounterState>;
}

let initialState: CounterState = {
  label: '',
  count: 60,
  isDisabled: false,
  counter: undefined,
};

const counterReducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case CounterActionType.UPDATE_COUNT:
      let count = action.payload?.count || state.count;
      return {
        ...state,
        isDisabled: true,
        count: --count,
        label: `${count}s`,
      };
    case CounterActionType.RESET_COUNT:
      return initialState;
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
};

const useCounter = ({ label, duration, isDisabled = false }: any) => {
  initialState = {
    label: label,
    count: duration,
    isDisabled: isDisabled,
    counter: undefined,
  };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const resetCounter = useCallback(() => {
    const counter = state.counter;
    dispatch({ type: CounterActionType.RESET_COUNT });
    window.clearInterval(counter);
  }, [label, duration, isDisabled]);

  const startCounter = useCallback(() => {
    const counter = window.setInterval(() => {
      dispatch({ type: CounterActionType.UPDATE_COUNT, payload: { counter } });
    }, 1000);
  }, []);

  useEffect(() => {
    console.log('Watch count');

    if (state.count < 0) {
      console.log('Reset');
      dispatch({ type: CounterActionType.RESET_COUNT });
    }
  }, [state.count, resetCounter]);

  return {
    label: state.label,
    isDisabled: state.isDisabled,
    startCounter,
  };
};

export default useCounter;
