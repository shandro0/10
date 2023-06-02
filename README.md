<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>






<p align="center">Лабораторная работа №10 <br> "JS" </p>






<p align="right">Выполнил: Шандро Н.Б.</p>
<p align="right">Проверил: Соболев Е. И.</p>







<p align="center">г. Южно-Сахалинск <br> 2023 год</p>




<h2 align="center">Введение</h2>
<p align="justify">Решение задач на JavaScript</p>

<h2 align="center">Цели и задачи</h2>

1. Напишите функцию, которая найдёт числа в массиве, которые делятся на заданное число. 
2. Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
3. Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u».
4. Треугольник. Напишите цикл,  выводит такой треугольник:

```
 1   #
 2   ##
 3   ###
 4   ####
 5   #####
 6   ######
 7   #######
```

5. FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3 и на 5.

6. Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. 

7. Минимум. Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

8. Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2. Напишите рекурсивную функцию isEven согласно этим правилам. Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

9. Считаем бобы. Символ номер N строки можно получить, добавив к ней .charAt(N) ( “строчка”.charAt(5) ) – схожим образом с получением длины строки при помощи .length. Возвращаемое значение будет строковым, состоящим из одного символа (к примеру, “к”). У первого символа строки позиция 0, что означает, что у последнего символа позиция будет string.length – 1. Другими словами, у строки из двух символов длина 2, а позиции её символов будут 0 и 1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.

10. Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона, и возвращающую массив, который содержит все числа из него, включая начальное и конечное.Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так, что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].

11. Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace. Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

12. Глубокое сравнение. Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект. Но иногда полезно было бы сравнить объекты по содержимому. Напишите функцию deepEqual, которая принимает два значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual. Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof. Если он выдаёт “object” для обеих величин, значит нужно делать глубокое сравнение. Не забудьте об одном дурацком исключении, случившемся из-за исторических причин: “typeof null” тоже возвращает “object”.

13. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.


<h2 align="center">Решение задач</h2>

1. 

```javascript
function zad1(arr, del = 3){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%del == 0){
            appendInPage("insert-1",arr[i]);
        }
    }
}
}
```

2. 

```javascript
function zad2(){
    const sort = (str) => str.replace(/[.,!?]/g,"").replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    const isAnagram = (original, test) => 
        original.trim() == test.trim() ? false : sort(original) == sort(test);

    insertInPage("insert-2",isAnagram("!соратница, аксамит  ?, пласировка     ","стационар,  ,мастика,    распиловка   ,   ,"));
    appendInPage("insert-2",isAnagram("пласировка","стационар"));
}
```

3. 

```javascript
function zad3(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(	str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'i' ||
            str[i] == 'o' ||
            str[i] == 'u'
        ) count++;
    }
    insertInPage("insert-3",str);
    appendInPage("insert-3",count);
}
```

4. 

```javascript
function zad4(count){
    var str = "#";
    for(let i = 0; i < count; i++){
        appendInPage("insert-4",(i+1)+"\t"+str);
        str+= "#";
    }
}
```

5. 

```javascript
function zad5(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 != 0) console.log("Fizz");
        else if(i % 3 != 0 && i % 5 == 0) console.log("Buzz");
        else if(i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
        else console.log(i);
    }
}
```

6. 

```javascript
function zad6(){
    var size = 8;
    var board = "";

    for (var y = 0; y < size; y++) {
        for (var x = 0; x < size; x++) {
            if ((x + y) % 2 == 0) board += "&nbsp;&nbsp;";
            else board += "#";
        }
        board += "<br>";
    }

    insertInPage("insert-6",board);
}
```

7. 

```javascript
function zad7(){
    insertInPage("insert-7",min(4,9));
}

function min(a,b){
    if(a<b) return a;
    else return b;
}
```

8. При вводе числа -1 функция не может вернуть значение и рекурсия будет продолжаться бесконечно. Это происходит, потому что -1 является отрицательным, а при N-2 оно будет уходить в минус бесконечность. Решить эту проблему можно, указав условия для положительных чисел и отрицательных.

```javascript
function zad8(){
    insertInPage("insert-8",isEven(50));
    appendInPage("insert-8",isEven(75));
    appendInPage("insert-8",isEven(-1));
}

function isEven(N) {


    if (N > 0) {
        if( (N-2) == 0 ) {
            return true;
        } else if ( (N-2) == 1) {
            return false;
        } else {
            return isEven( N-2 );
        }
    } else {
        if( (N+2) == 0 ) {
            return true;
        } else if ( (N+2) == 1) {
            return false;
        } else {
            return isEven( N+2 );
        }
    }
}
```

9. 

```javascript
function zad9(){
    insertInPage("insert-9",countBs("Bean has Beans and Bean juice"));
    appendInPage("insert-9",countChar("Bean has Beans and Bean juice", "e"));
}

function countBs(str){
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] == "B") count++
    }
    return count;
}

function countChar(str, val){
    let count = 0;
    for(let i = 0; i <= str.length; i++){
        if(str[i] == val) count++
    }
    return count;
}
```

10. 

```javascript
function zad10(){
    insertInPage("insert-10",range(1, 10, 2));
    appendInPage("insert-10",sum(range(1, 10, 2)));

    appendInPage("insert-10",range(5, 2, -1));
    appendInPage("insert-10",sum(range(5, 2, -1)));
}

function range(start, end, step=1) {
    let result = [];
    
    if(start < end){
        for(let i = start; i <= end; i+=step){
            result.push(i);
        }
    }
    else{
        for(let i = start; i >= end; i+=step){
            result.push(i);
        }
    }
    return result;
}
    
function sum(arr) {
    let _sum = 0;

    for ( i = 0; i < arr.length; i++ ) {
        _sum += arr[i];
    }   
    return _sum;
}

```

11. 

```javascript
function zad11(){
    var a = [0,1,2,3,4,5,6,7,8,9,10];

    appendInPage("insert-11",reverseArray(a));
    appendInPage("insert-11",reverseArrayInPlace(a));                
}

function reverseArray(arr1){
    var arr2 = [];
    for(let i = arr1.length-1; i >=0; i--) 
        arr2.push(arr1[i]);

    return arr2;
}

function reverseArrayInPlace(arr){
    for(let i =0; i < (arr.length/2); i++) 
    {
        var temp = arr[i];
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = temp;
    }

    return arr;
}
```

12. 

```javascript
function zad12(){
    var obj = {here: {is: "an"}, object: 2};
    insertInPage("insert-12",deepEqual(obj, obj));        
    appendInPage("insert-12",deepEqual(obj, {here: 1, object: 2}));
    appendInPage("insert-12",deepEqual(obj, {here: {is: "an"}, object: 2}));
}


function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
 
    if (a == null || typeof(a) != "object" ||
        b == null || typeof(b) != "object")
    {
        return false;
    }
 
    var propertiesInA = 0, propertiesInB = 0;
    for (var property in a) {
        propertiesInA += 1;
    }
    for (var property in b) {
        propertiesInB += 1;
        if (!(property in a) || !deepEqual(a[property], b[property])) {
            return false;        
        }
    }        
    return propertiesInA == propertiesInB;
}
```

13. 

```javascript
function zad13(){
    var oldArr = [
        [8,3,6,2,6],
        [9,3,22,1,8,9,93,42,24],
        [226,5,258,242,45,82,45,214]
    ];

    var newArr = convolution(oldArr);
    insertInPage("insert-13", newArr);
}

function convolution(arr, d = 1) {
    return d > 0 ? 
        arr.reduce(
            (acc, val) => acc.concat(Array.isArray(val) ? 
            convolution(val, d - 1) 
                : val), []) 
        : arr.slice();
 };
```

<h2 align="center">Вывод</h2>
В данной лабораторной работе я улучшил свои навыки программирования на JS.
