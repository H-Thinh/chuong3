var a = prompt('nhap chieu dai: ');
var b = prompt('nhap chieu rong: ');
if(Number(a) > 0 && Number(b) > 0 )
{
    var chuvi = (Number(a) + Number(b)) * 2;
    var dientich = (a * b);
    console.log(chuvi);
    console.log(dientich);
}
else
{
    console.log("xin nhap lai");
}

