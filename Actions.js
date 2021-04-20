export const Delay = data => [(dispatch, data) => {
    setTimeout(() => {
        dispatch(data.action);
    }, data.time)
}, data];

export const IncrementWithDelay = (state) => [Increment(state), Delay({action: Increment, time: 1000})];
export const Increment = (state) => ({...state, count: state.count + 1});