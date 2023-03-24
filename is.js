is.num = (value) => Number.isInteger(value)

is.nan =(value)=> Number.isNaN(value);

is.str = (value)=> typeof(value)=== "string";

is.bool = (value)=> typeof(value)=== "boolean";

is.undef = (value)=> typeof(value)=== "undefined";

is.def= (value)=> typeof(value)=== !"undefined";

is.arr = (value)=> Array.isArray(value);

is.obj = (value)=> typeof(value)=== "object";

is.fun = (value)=> typeof(value)=== "function";

is.truthy= (value)=> !value;

is.falsy= (value)=> value;