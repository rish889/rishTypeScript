// define a type that accepts only one specified string literal.
let click: 'click';
click = 'click';
// click = 'dblclick'; compiler error


// Use the string literal types with union types and type aliases to define types that accept a finite set of string literals
type MyMouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MyMouseEvent;
mouseEvent = 'mousedown';
// mouseEvent = 'mouseover'; compiler error