import {app} from "https://unpkg.com/hyperapp?module";
import html from "https://unpkg.com/hyperlit?module";

// It lives in the effect library code
const Delay = data => [(dispatch, data) => {
    setTimeout(() => {
        dispatch(data.action);
    }, data.time)
}, data];

// You application code
export const IncrementWithDelay = (state) => [Increment(state), Delay({action: Increment, time: 1000})];
export const Increment = (state) => ({...state, count: state.count + 1});

const grandParent = () => html`<div>${parent()}</div>`
const parent = () => html`<div>${counter()}</div>`
const counter = props => state => html`<p>You clicked <span>${state.count}</span> times</p>`;

export const stateProvider = (fn) => (state) =>
    (function provide(target) {
        if (typeof target === "function") return provide(target(state));
        if (typeof target.name === "function") return provide(target.name(state));
        if (target.children)
            target.children = target.children.map((child) => provide(child));
        return target;
    })(fn(state));

const view = (state) => html`
        <div>
            ${grandParent()}
            <button onclick=${IncrementWithDelay}>Click Me</button>
        </div>
    `;

app({
    init: {count: 0},
    view: stateProvider(view),
    node: document.getElementById("app")
});