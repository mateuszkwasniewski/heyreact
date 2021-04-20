import {h, text, app} from "https://unpkg.com/hyperapp?module";

const Increment = (state) => ({...state, count: state.count + 1})

app({
    init: {count: 0},
    view: (state) => h("div", {}, [
        h("p", {}, text(`You clicked ${state.count} times`)),
        h("button", {onclick: Increment}, text("Click me"))
    ]),
    node: document.getElementById("app")
});