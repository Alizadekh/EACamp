/* 
QEYD:

LOOPS -- 

looplar for while kimi acar sozlerle yazilir. Baslayaq for dan. 
for looplarinin 3 novu var birinci
for i in array: bu arrayimizin icerisinde olan elementlerin index nomrelerinin icerisinde gezecek

for i of array: bu yolla ise indexlerini yox mehz elementlerinin ozunu gezecek ve console.log etmek istedikde bu zaman i bizim arrayimizin icerisindeki elementlerimiz olacaq 

*/

// FOR IN NUMUNE:

var arr = ["aykhan", "kabira", "aysu"];

for (var i in arr) {
  console.log(i);
}
// output: 0,1,2 yeniki indexler

// FOR OF NUMUNE:
for (var j of arr) {
  console.log(j);
}
// output: aykhan  kabira   aysu   -- yeniki elementlerin ozunu cap etdik

// FOR UMUMI FORMASI NUMUNE:

for (let u = 0; u < arr.length; u++) {
  console.log(arr[u]);
}
/* umumi struktur bu sekildedir

for(baslangic deyeri; bitiş dəyəri; hər dövrdən sonra yerinə yetirəcəyi əməliyyat){
    emel
}

*/
