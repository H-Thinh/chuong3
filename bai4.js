var a = prompt('nhap day tren: ');
var b = prompt('nhap day duoi: ');
var h = prompt('nhap chieu cao: ');
if(Number(a) > 0 && Number(b) > 0 && Number(h) > 0)
{
    var dientich = ((Number(a) + Number(b))/2) * h;
    console.log(dientich);
}
else
{
    console.log("xin nhap lai");
}


