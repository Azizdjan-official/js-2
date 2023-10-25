let ism = prompt('Iltimos ismizni kiriting')
let yoshi = prompt('Iltimos tugilgan yilizni kiriting')

let hozir = new Date();

alert( ' Hurmatli ' + String(ism) + ', siz ' + (+hozir.getUTCFullYear() - yoshi) + ' yil ' + hozir.getMonth() + 
' oy ' + hozir.getDay() + ' kun '  + hozir.getHours() + ' soat yashabsiz. ');


// 1 chi savolning javobi tugadi toliq



let mevalar = [ 'olma', 'anor', 'anjir' , 'behi', 'gilos', 'shaftoli', 'banana'];
console.log(mevalar);
mevalar.push('apelsin');  //bunda ohiriga qoshildi
console.log(mevalar);
mevalar.shift()         //bunda esa ohiridan olindi
console.log(mevalar);

