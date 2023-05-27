var a = prompt('nhap so a: ');
var b = prompt('nhap so b: ');
if(Number(a) > 0 && Number(b) > 0 )
{
    var tich = a * b;
    var thuong = a / b;
    var sodu = a % b;
    console.log(tich);
    console.log(thuong);
    console.log(sodu);
}
else
{
    console.log("xin nhap lai");
}