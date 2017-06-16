/*
Given a string, convert it to integer, example s="123", n = 123;
*/

function atoi(str){
  var isNegative = false;
  if(str.charAt(0) === '+' || str.charAt(0) === '-'){
    isNegative = str.charAt(0) === '-' ? true : false;
    str = str.slice(1);
  }
  var num = 0;
  var element = 0;
  var pow = 0;
  for(var i = str.length-1; i >=0; i--){
    element = str[i].charCodeAt(0) - '0'.charCodeAt(0);
    if(element >= 0 && element <= 9){ //48 y 57
      num += element * Math.pow(10,pow++);
    }else{
      return 'Invalid number';
    }
  }
  return isNegative ? (num*-1) : num;
}

str = "123456";
console.log(atoi(str));