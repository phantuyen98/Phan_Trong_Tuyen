var gt = 1;
var n = prompt('Nhập vào 1 số n','Nhập vào đây...')
var s = 0;
for (var i = 1; i <= n; i++) {
    gt *= i;
    s += (i/gt)
}
document.write('Tổng S = 1 /1! + 2 /2! + ….+ n / n! bằng: '+s)