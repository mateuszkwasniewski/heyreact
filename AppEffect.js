import {app} from "https://unpkg.com/hyperapp?module";
import html from "https://unpkg.com/hyperlit?module";

// It lives in the effect library code
const delayEffect = (dispatch, data) => {
    setTimeout(() => {
        dispatch(data.action);
    }, data.time)
};
const Delay = data => [delayEffect, data];

// You application code
export const IncrementWithDelay = (state) => [state, Delay({action: Increment, time: 1000})];
export const Increment = (state) => ({...state, count: state.count + 1});

app({
    init: {count: 0},
    view: ({count}) => html`
        <div>
            <p>You clicked <span>${count}</span> times</p>
            <button onclick=${IncrementWithDelay}>Click Me</button>
        </div>
    `,
    node: document.getElementById("app")
});