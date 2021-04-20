import {app} from "https://unpkg.com/hyperapp?module";
import html from "https://unpkg.com/hyperlit?module";

const Increment = (state) => ({...state, count: state.count + 1})

app({
    init: {count: 0},
    view: (state) => html`
        <div>
            <p>You clicked <span>${state.count}</span> times</p>
            <button onclick=${Increment}>Click Me</button>
        </div>
    `,
    node: document.getElementById("app")
});
