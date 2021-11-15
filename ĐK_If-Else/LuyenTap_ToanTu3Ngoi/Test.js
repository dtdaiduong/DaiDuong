// for (let i=1; i<=10; i++){
//     console.log(i);
// }
// var i=1;
// while(i<=10){
//     console.log(i)
//     i++
// }

// do {
//     console.log(i);
//     i++;
// } while(i<=10);
// yêu cầu người dùng nhập 1 số và hiện ra màng hình va dừng lại khi họ nhập số 0
do {
    Number = parseFloat(prompt("Nhap so:"));
    console.log(Number);
}
while (Number != 0);

while (Number != 0) {
    console.log(Number);
    Number = parseFloat(prompt("nhap so:"));
}