//Дополнительные функции вывода
function insertInPage(where, that){
    document.getElementById(where).innerHTML = that + "<br>";
}
function appendInPage(where, that){
    document.getElementById(where).innerHTML += that+"<br>";
}
//<--------------------------->//

function zad1(arr, del = 3){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]%del == 0){
            appendInPage("insert-1",arr[i]);
        }
    }
}

function zad2(){
    const sort = (str) => str.replace(/[.,!?]/g,"").replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    const isAnagram = (original, test) => 
        original.trim() == test.trim() ? false : sort(original) == sort(test);

    insertInPage("insert-2",isAnagram("!соратница, аксамит  ?, пласировка     ","стационар,  ,мастика,    распиловка   ,   ,"));
    appendInPage("insert-2",isAnagram("пласировка","стационар"));
}

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

function zad4(count){
    var str = "#";
    for(let i = 0; i < count; i++){
        appendInPage("insert-4",(i+1)+"\t"+str);
        str+= "#";
    }
}

function zad5(){
    for(let i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 != 0) console.log("Fizz");
        else if(i % 3 != 0 && i % 5 == 0) console.log("Buzz");
        else if(i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
        else console.log(i);
    }
}

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

function zad7(){
    insertInPage("insert-7",min(4,9));
}

function min(a,b){
    if(a<b) return a;
    else return b;
}

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