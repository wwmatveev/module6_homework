// Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
// определяет, является ли оно простым, и выводит простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. 
// Обратите внимание на числа 0 и 1.

// Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы

const num = prompt('Введите число')
const testPrime = function() {
    if (num > 1000){
        console.log('данные неверны')
        return false;
    }
    if (num === 1)  {
        return false;
    }
    else if(num === 2)  {
      console.log('это простое число ')
      return false;
    } else   {
      for(var x = 2; x < num; x++)  {
        if(num % x === 0) {
         console.log('это число простым не является')
         return false;
        }
      }
      return ;  
    }
}
  
console.log(testPrime(num));