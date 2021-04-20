import {Increment, IncrementWithDelay} from "./Actions.js";
import assert from "assert";

// test simple action
const {count}  = Increment({count: 1})
assert.deepStrictEqual(count, 2);

// test effectful action
const [state, [_, data]]  = IncrementWithDelay({count: 1})
assert.deepStrictEqual(state.count, 2);
assert.deepStrictEqual(data, {action: Increment, time: 1000});