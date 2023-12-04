
// 'number' + 23 + 32

// 'number' is string
// plus 23 plus 23
// result -> string number2323
//------------------

// 41 + 1 + 'number'

// 41 is number
// 1 is number
// number plus number 42 is number
// number pus string
// result-> string 42number
//------------------

// null + 1

// null is nothing
// nothing plus 1 (number) is number 1
//------------------

// 'five' + + 'two'

// 'five' is string
// + + number
// but 'two' is string - NaN (not a number)
// result -> string fiveNaN
//------------------

// 2 && 7

// More generally, the operator returns the value
// of the first falsy operand encountered when
// evaluating from left to right, or the
// value of the last operand if they are all truthy.
// return 7 -> number
//------------------

// +'40' + +'2';

// +'40' - number because +
// +'2' - number because +
// number 40 plus number result is 42 (number)
//------------------

// '10' - 5 === 6;

// '10' string
// string minus 5 is number 5
// === equal value and equal type
// 5 not equal 6
//------------------

// true + false

// true is 1
// false is 0
// 1 + 0 result is 1 -> number
//------------------

// '4px' - 3

// '4px'
// minus try to convert to number but px -> string
// You cannot perform subtraction on strings
// string minus number result -> NaN
//------------------

// '4' - 3

// '4' convert to number
// 4 number minus 3 result is 1 (number)
//------------------

// '2' + 3 ** 2;

// 1st 3 ** 2 result is 9
// '2' string + (concatenation) 9
// result 29 (string)
//------------------

// 12 / '6'

// 12 number
// / divide try convert '6' to number
// 12 / 6 result 2 (number)
//------------------

// 23 + 42 + 'number'

// 1st 23 number plus 42 number result 65
// number + string result -> 65number (string)
//------------------

// '10' + (5 === 6);

// 5 === 6 result boolean false
// '10' string concatenate false
// result -> 10false (string)
//------------------

// 'number' + 15 + 3

// 'number' string
// plus concatenate 15 as string anf 3 as string
// result number153
//------------------

// undefined + 1;

// undefined is not reserved word
// then undefined concatenate 1 try to convert to number
// but it is not number is it a string
// string + 1 result NaN
//------------------

// 'true' == true

// == equal
// 'true' string not equal boolean
// result false (boolean)
//------------------

// false == 'false'

// 'false' is string
// string not equal boolean
// result false (boolean)
//------------------

// null == ''

// null is not '' empty string
// result false (boolean)
//------------------

// 3 ** (9 / 3);

// number 9 / 3 because () -> 3
// 3 power of 3
// result 27 (number)
//------------------

// !!'false' == !!'true'

// !! not equal and again not equal from value 'false' is string
// and !! from 'true' string
// result true (boolean)
//------------------

// 0 || '0' && 1

// 0 or '0' result '0'
// '0' and 1 ('0' true) and (1 true)
// result 1 (boolean)
//------------------

// 1 < 2 < 3

// 1 < 2 true
// 2 < 3 true
// result is true (boolean)
//------------------

// 'foo'+ + +'bar'

// 'foo' string
// + + + plus number, but 'bar' is string
// result -> fooNaN
//------------------

// 3 ** 2 / 3;

// 3 power of 2 -> 9
// 9 / 3 rrsult -> 3 (number)
//------------------

// 1 < 2 > 3

// 1 < 2 true
// but 2 not > 3 result false (boolean)
//------------------

// (+null == false) < 1;

// +null -> 0
// 0 == false (false is 0) result -> true
// true (1) not < 1 result false (boolean)
//------------------

// false && true || true

// false and true is false
// false or true reault -> true
//------------------

// false && (true || true);

// (true or true) is true
// true and false result -> false
//------------------

// (+null == false) < 1 ** 5;

// +null -> 0
// 0 == false -> false
// false or 0 < 1**5 (5) not -> false
// result false (boolean)
//------------------