import { five, someVariable as master, someVariable } from "./first.mjs";
import { ten } from "./first.mjs";
import defaultValue from "./first.mjs";

const hello1 = function (a) {
  if (a !== undefined) return { defaultValue: { defaultValue: defaultValue } };
};
console.log(five, ten, someVariable, hello1(ten), defaultValue);
