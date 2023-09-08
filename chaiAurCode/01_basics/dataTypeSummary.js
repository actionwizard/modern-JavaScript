/*
There are basically two divisions of datatypes in JS
1. Primitive
    -no methods or properties
    
    -immutable (The variable may be reassigned to a new value, 
                but the existing value can not be changed 
                in the ways that objects, arrays, and functions can be altered.)

    -all primitives are declared in the stack, and whenever we access something in the stack
    
    -we have wrappers which create a temporary object of the primitive datatype and we actually do
    using call by value concept, i.e. a copy of the variable value is given. example below
    access to a few properties of the object. eg string 
    -number, string, boolean, symbol, bigint, null **(return type is object), undefined
    {Conceptually, undefined => absence of a value, while null => absence of an object}

2. Referenced (Non Primitive)
    arrays, objects, function
    -object is a value in memory which is possibly referenced by an identifier
    -objects can be seen as a collection of properties
    -functions are also objects with the additional capability of being callable
*/


let value = -Infinity;
console.log(value);
console.log(typeof value);