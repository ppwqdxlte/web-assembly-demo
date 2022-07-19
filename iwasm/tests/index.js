import assert from "assert";
import {add, minusOne} from "../build/debug.js";

assert.strictEqual(add(1, 2), 3);
assert.strictEqual(minusOne(1000), 999)

console.log("ok");
