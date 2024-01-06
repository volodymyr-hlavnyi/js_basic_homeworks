
// 'number' + 23 + 32

// 'number' is string
// plus 23 plus 23
// result -> string number2323
//------------------

// 41 + task1 + 'number'

// 41 is number
// task1 is number
// number plus number 42 is number
// number pus string
// result-> string 42number
//------------------

// null + task1

// null is nothing
// nothing plus task1 (number) is number task1
//------------------

// 'five' + + 'two'

// 'five' is string
// + + number
// but 'two' is string - NaN (not a number)
// result -> string fiveNaN
//------------------

// task2 && 7

// More generally, the operator returns the value
// of the first falsy operand encountered when
// evaluating from left to right, or the
// value of the last operand if they are all truthy.
// return 7 -> number
//------------------

// +'40' + +'task2';

// +'40' - number because +
// +'task2' - number because +
// number 40 plus number result is 42 (number)
//------------------

// '10' - 5 === 6;

// '10' string
// string minus 5 is number 5
// === equal value and equal type
// 5 not equal 6
//------------------

// true + false

// true is task1
// false is 0
// task1 + 0 result is task1 -> number
//------------------

// '4px' - task3

// '4px'
// minus try to convert to number but px -> string
// You cannot perform subtraction on strings
// string minus number result -> NaN
//------------------

// '4' - task3

// '4' convert to number
// 4 number minus task3 result is task1 (number)
//------------------

// 'task2' + task3 ** task2;

// 1st task3 ** task2 result is 9
// 'task2' string + (concatenation) 9
// result 29 (string)
//------------------

// 12 / '6'

// 12 number
// / divide try convert '6' to number
// 12 / 6 result task2 (number)
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

// 'number' + 15 + task3

// 'number' string
// plus concatenate 15 as string anf task3 as string
// result number153
//------------------

// undefined + task1;

// undefined is not reserved word
// then undefined concatenate task1 try to convert to number
// but it is not number is it a string
// string + task1 result NaN
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

// task3 ** (9 / task3);

// number 9 / task3 because () -> task3
// task3 power of task3
// result 27 (number)
//------------------

// !!'false' == !!'true'

// !! not equal and again not equal from value 'false' is string
// and !! from 'true' string
// result true (boolean)
//------------------

// 0 || '0' && task1

// 0 or '0' result '0'
// '0' and task1 ('0' true) and (task1 true)
// result task1 (boolean)
//------------------

// task1 < task2 < task3

// task1 < task2 true
// task2 < task3 true
// result is true (boolean)
//------------------

// 'foo'+ + +'bar'

// 'foo' string
// + + + plus number, but 'bar' is string
// result -> fooNaN
//------------------

// task3 ** task2 / task3;

// task3 power of task2 -> 9
// 9 / task3 rrsult -> task3 (number)
//------------------

// task1 < task2 > task3

// task1 < task2 true
// but task2 not > task3 result false (boolean)
//------------------

// (+null == false) < task1;

// +null -> 0
// 0 == false (false is 0) result -> true
// true (task1) not < task1 result false (boolean)
//------------------

// false && true || true

// false and true is false
// false or true reault -> true
//------------------

// false && (true || true);

// (true or true) is true
// true and false result -> false
//------------------

// (+null == false) < task1 ** 5;

// +null -> 0
// 0 == false -> false
// false or 0 < task1**5 (5) not -> false
// result false (boolean)
//------------------