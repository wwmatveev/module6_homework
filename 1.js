/*Задание 1.

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.

На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, 
вызовите функцию, проанализируйте синтаксис.*/

const myArray = [12, 5, 8, 130, 44, 0, 1, 0, 7,];

const oddElementArray = myArray.filter(function(elem){
    return elem != (Math.floor (elem / 2)) * 2
})

const evenElementArray = myArray.filter(function(elem){
    return elem === (Math.floor (elem / 2)) * 2
})

const zeroElementArray = myArray.filter(function(elem){
    return elem === 0
})

const otherElementArray = myArray.filter(function(elem){
    return elem != +elem 
})


console.log(oddElementArray.length)
console.log(evenElementArray.length)
console.log(zeroElementArray.length)
console.log(otherElementArray.length)